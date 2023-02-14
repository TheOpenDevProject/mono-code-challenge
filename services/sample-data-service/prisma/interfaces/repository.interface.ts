export interface RepositoryInterface {
  createOne(createInput);

  findOne(where, include?);

  findMany(where, include?);

  updateOne(uuid: string, updateInput);

  deleteOne(uuid: string);

  deleteMany(where);
}
