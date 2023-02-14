import { useAxios } from "../hooks/useAxios";

export const FetchGraphQL = async (
  query: string | null | undefined,
  variables: unknown
) => {
  const axios = useAxios();

  const { data, status } = await axios.post(
    `${process.env.REACT_APP_API_BASE_URL}/graphql`,
    {
      query,
      variables,
    }
  );
  if (status === 419 || status === 401) {
    data.data = { me: null };
  }
  return data;
};
