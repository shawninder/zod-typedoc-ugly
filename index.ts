import z from 'zod'

export const userSchema = z.object({
  name: z.string().optional()
})

export type ZodUser = z.infer<typeof userSchema>

export type TypescriptUser = {
  name?: string
}
