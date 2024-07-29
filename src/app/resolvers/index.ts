import { mergeResolvers } from '@graphql-tools/merge'
/** Resolvers */
import { statusResolvers } from './Status'

export const resolversDefs = mergeResolvers([
    statusResolvers
])