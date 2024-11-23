import { GraphQLClient } from "graphql-request";

if (!process.env.HYGRAPH_API_ENDPOINT || !process.env.HYGRAPH_AUTH_TOKEN) {
    throw new Error("HYGRAPH_API_ENDPOINT or HYGRAPH_AUTH_TOKEN is not set in environment variables");
}

export const hygraph = new GraphQLClient(
    process.env.HYGRAPH_API_ENDPOINT as string,
    {
        headers: {
            Authorization: `Bearer ${process.env.HYGRAPH_AUTH_TOKEN}`,
        },
    }
);

// Function to check authentication
export async function checkHygraphAuth() {
    const query = `
    query {
      __schema {
        queryType {
          name
        }
      }
    }
  `;

    try {
        await hygraph.request(query);
        console.log("Hygraph authentication successful");
        return true;
    } catch (error) {
        console.error("Hygraph authentication failed:", error);
        return false;
    }
}