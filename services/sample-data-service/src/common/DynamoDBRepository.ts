import * as AWS from 'aws-sdk';
import {
  AttributeMap,
  BatchGetItemInput,
  ExpressionAttributeNameMap,
  ItemList,
} from 'aws-sdk/clients/dynamodb';

export type BatchItemKey = { [key: string]: string };

export type BatchItemQueryBuilderOptions<T, U> = {
  projectionExpression: string;
  expressionAttributeNames: ExpressionAttributeNameMap;
  generateKeys: (queryItem: T) => BatchItemKey;
};

export default abstract class DynamoDBRepository {
  /**
   * The internal DynamoDB mapper instance used to talk to DynamoDB
   *
   * @private
   * @type {AWS.DynamoDB.DocumentClient}
   * @memberof DynamoDBRepository
   */
  private readonly documentClient: AWS.DynamoDB.DocumentClient;

  /**
   *
   *
   * @private
   * @type {string}
   * @memberof DynamoDBRepository
   */
  private readonly tableName: string;

  /**
   *Creates an instance of DynamoDBRepository.
   * @param {string} tableName
   * @memberof DynamoDBRepository
   */
  protected constructor(tableName: string) {
    this.tableName = tableName;
    const dynamoDbConfig = {
      region: 'ap-southeast-2',
      endpoint: '',
      accessKeyId: '',
      secretAccessKey: '',
    };

    this.documentClient = new AWS.DynamoDB.DocumentClient(dynamoDbConfig);
  }

  /**
   * Generates DynamoDB compliant batches for doing batchWrite.
   *
   * ***Warning: the array that gets passed into here is mutated and will eventually be a size of 0
   * It's best to be careful of future operations performed on this object***
   * @returns {Generator<Array<Actor>>}
   * @param queryRecords
   * @param batchSize
   */
  public *generateBatch<T>(
    queryRecords: Array<T>,
    batchSize = 25,
  ): Generator<Array<T>> {
    const queryRecordsRemaining = [...queryRecords];
    /**
     * If we still have records continue our batch generation
     */
    while (queryRecords.length > 0) {
      /**
       * There are less records than our allowed batch size, splice the rest of them, yield the final batch
       * and continue for one more iteration which will complete.
       */
      if (queryRecords.length <= batchSize) {
        /**
         * This is how many records we have remaining.
         */
        yield queryRecords.splice(0, queryRecordsRemaining.length);
        continue;
      }
      /**
       * Splice the records from 0 to the max allowed batch size
       */
      yield queryRecords.splice(0, batchSize);
    }
  }

  /**
   *
   * @param {Array<DynamoDB.BatchGetItemInput>} queryItems
   * @returns {Promise<Array<DynamoDB.BatchGetItemOutput>>}
   */
  public async resolveBatchGetQueryItems(
    queryItems: Array<BatchGetItemInput>,
  ): Promise<(ItemList | undefined)[]> {
    /**
     * Resolve all our batches in parallel so we're not waiting for the next or previous batch to complete.
     * Its recommended setting the appropriate RCU / WRU and or the correct batch size for the data being queried.
     * DDB has a hard 100 record LIMIT however this might actually be lower if the total size of the records coming
     * back exceeds 16MB.
     */
    const batchQueries = queryItems.map(
      async (item) => await this.getConnection().batchGet(item).promise(),
    );
    const results = await Promise.all(batchQueries);

    let mergedResults: ItemList[] = [];
    for (const result of results) {
      /**
       * Check if all of the responses we got were valid, if not just throw an exception, we don't implement
       * a retry so we have to consider our data corrupt / incomplete.
       */
      if (
        result.Responses !== undefined &&
        result.Responses[this.getTableName()].length !== 0
      ) {
        mergedResults = mergedResults.concat(
          result.Responses[this.getTableName()],
        );
      }
    }
    /**
     * Merge all the results
     */
    return mergedResults;
  }

  /**
   * Gets an instance of the active connection to DynamoDB
   *
   * @protected
   * @returns {AWS.DynamoDB.DocumentClient}
   * @memberof DynamoDBRepository
   */
  protected getConnection(): AWS.DynamoDB.DocumentClient {
    return this.documentClient;
  }

  protected getTableName(): string {
    return this.tableName;
  }

  /**
   *
   * @param {Array<T>} queryItems A collection of items which contain keys used for the search keys
   * @param options
   * @returns {DynamoDB.BatchGetItemInput}
   * @protected
   */
  protected batchGetQueryBuilder<T, U>(
    queryItems: Array<T>,
    options: BatchItemQueryBuilderOptions<T, U>,
  ): Array<BatchGetItemInput> {
    const getQueryBatches: Array<BatchGetItemInput> = [];
    /**
     * DynamoDB only allows 100 items to be returned with a max size of 16MB of total data (All records combined)
     * Because of this we need to batch our get requests in batches of 100.
     * generateBatch<T> will created batches of 100 queries until there is less than 100 items remaining
     * it will then put the remaining items into a final batch and the generator will complete
     */
    for (const getItemBatch of this.generateBatch<T>(queryItems, 100)) {
      getQueryBatches.push({
        RequestItems: {
          /**
           * We need to construct a BatchGetItem (See: https://docs.aws.amazon.com/amazondynamodb/latest/APIReference/API_BatchGetItem.html)
           */
          [this.getTableName()]: {
            /**
             * From our current batch we generate (N-Size) keys {partitionKey, sortKey}
             */
            Keys: getItemBatch.map(
              (queryItem: T) => options.generateKeys(queryItem) as AttributeMap,
            ),
            /**
             * Force a projection expresion so that we're always in control of the data we get back
             */
            ProjectionExpression: options.projectionExpression,
            /**
             * Allow remapping of reserved keywords in DDB from our ProjectionExpression.
             */
            ExpressionAttributeNames: options.expressionAttributeNames,
          },
        },
      });
    }

    return getQueryBatches;
  }
}
