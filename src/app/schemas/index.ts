import { mergeTypeDefs } from '@graphql-tools/merge';
/** Types */
import { statusType } from './Status';
/** Mutations */
import { statusMutations } from '../mutations/Status'
/** Queries */
import { statusQueries } from '../queries/Status'

export const typesDefs = mergeTypeDefs([
    statusType,
    statusMutations,
    statusQueries,
])