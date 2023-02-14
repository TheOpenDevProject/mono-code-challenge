import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
} from "relay-runtime";
import { FetchGraphQL } from "./fetchGraphQL";

interface IRelayVariables {
  [key: string]: string;
}

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(
  params: RequestParameters,
  variables: IRelayVariables
) {
  console.log(
    `fetching query ${params.name} with ${JSON.stringify(variables)}`
  );
  return FetchGraphQL(params.text, variables);
}

// Export a singleton instance of Relay Environment configured with our network function:
export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
