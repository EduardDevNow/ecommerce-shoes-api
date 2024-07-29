import { gql } from 'apollo-server-express';

export const statusMutations = gql`
    type Mutation {
        createStatus(name: String!, model: String!, color_status: String!, translation_status: String!): Status
    }
`