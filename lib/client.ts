import { GraphQLClient } from "graphql-request"

const endpoint = "https://graphql.datocms.com/"

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
  },
})

export default client
