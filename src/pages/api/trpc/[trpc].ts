import { initTRPC, TRPCError } from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';

export const t = initTRPC.create();

export const appRouter = t.router({
	hello: t.procedure
		.input(
			z
				.object({
					text: z.string().nullish(),
				})
				.nullish(),
		)
		.query(({ input }) => {
			return {
				greeting: `hello ${input?.text ?? 'world'}`,
			};
		}),
	loginData: t.procedure
		.input(
			z
				.object({
					username: z.string().nullish(),
					password: z.string().nullish(),
				})
				.nullish(),
		)
		.query(({ input }) => {
			return {
				username: input?.username,
				password: input?.password,
			};
		}),
	userData: t.procedure
		.input(
			z
				.object({
					username: z.string().nullish(),
				})
				.nullish(),
		)
		.query(({ input }) => {
			return {
				username: input?.username,
			};
		}),
	userMenu: t.procedure
		.input(
			z
				.object({
					data: z.array(
						z.object({
							id: z.any(),
							label: z.any(),
							icon: z.any(),
							link: z.any(),
							children: z
								.array(
									z.object({
										id: z.any(),
										label: z.any(),
										icon: z.any(),
										link: z.any(),
									}),
								)
								.nullish(),
						}),
					),
				})
				.nullish(),
		)
		.query(({ input }) => {
			return {
				result: input?.data,
			};
		}),
	pieData: t.procedure
		.input(
			z
				.object({
					result: z.array(
						z.object({
							name: z.string(),
							y: z.any(),
						}),
					),
				})
				.nullish(),
		)
		.query(({ input }) => {
			return {
				result: input?.result,
			};
		}),
	chartData: t.procedure
		.input(
			z
				.object({
					result: z.array(
						z.object({
							type: z.string(),
							name: z.string(),
							data: z.any().array(),
						}),
					),
				})
				.nullish(),
		)
		.query(({ input }) => {
			return {
				result: input?.result,
			};
		}),
	dataMaterial: t.procedure
		.input(
			z
				.object({
					data: z.array(
						z.object({
							id: z.number(),
							nama: z.string(),
							keterangan: z.string(),
						}),
					),
				})
				.nullish(),
		)
		.query(({ input }) => {
			return {
				result: input?.data,
			};
		}),
	createMaterial: t.procedure
		.input(
			z
				.object({
					nama: z.string(),
					keterangan: z.string(),
				})
				.nullish(),
		)
		.mutation(({ input }) => {
			return {
				result: { ...input },
			};
		}),
	editMaterial: t.procedure
		.input(
			z
				.object({
					id: z.number(),
					nama: z.string(),
					keterangan: z.string(),
				})
				.nullish(),
		)
		.mutation(({ input }) => {
			return {
				result: { ...input },
			};
		}),
});

// export type definition of API
export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
	router: appRouter,
	createContext: () => ({}),
});
