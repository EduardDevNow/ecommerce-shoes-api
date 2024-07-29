import { gql } from 'apollo-server-express';

export const statusType = gql`
    type Status {
        id: ID!
        name: String!
        model: String!
        color_status: String!
        translation_status: String!
    }
`;