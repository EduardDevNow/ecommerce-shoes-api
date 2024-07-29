/** Models */
import { Status } from "app/models/Status";

export const statusResolvers = {
    // Query: {
    //     getStatuses: async () => {
    //         return []
    //     }
    // },
    Mutation: {
        createStatus: async (_:any, args: Status) => {
            console.log(args)
            return args;
        }
    }
}