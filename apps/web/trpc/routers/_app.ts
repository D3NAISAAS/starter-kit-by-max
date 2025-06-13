import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import db from '@workspace/database/db';
import { users } from '@workspace/database/schemas/users';
export const appRouter = createTRPCRouter({
  hello: baseProcedure
    // .input(
    //   z.object({
    //     text: z.string(),
    //   }),
    // )
    .query(async () => {
      return await db.select().from(users)
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;