import { gql } from "apollo-server-express";

export const statusQueries = gql`
    type Query {
        getStatuses: [Status!]!
    }
`