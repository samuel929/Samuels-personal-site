import { GraphQLClient } from "graphql-request";

export const hygraph = new GraphQLClient(process.env.HYFRAPH_API_KEY as string
)