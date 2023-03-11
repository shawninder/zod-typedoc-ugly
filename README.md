# Zod + Typedoc = ugly
Reproducing an issue I'm having with Zod types in Typedoc docs

## The Problem
I'm first using `z.infer` to produce types from Zod schemas and then Typedoc to generate documentation for the types, but the output is less than ideal in a few ways.
- The types come out as type aliases in the form `TypeName: z.infer<typeof schemaName>`, which isn't helpful in itself
- The schemas come out with all sorts of Zod types in the way, e.g. `ZodObject<{ name: ZodOptional<ZodString>}>` in stead of the idal`{ name?: string }`
- Optional object properties in schemas come out as e.g. `name: undefined | string` rather than `name?: string` or even `(optional) name?: string`, which Typedoc does for regular (non-Zod) types.

This is all demonstrated in index.ts in hopes that someone can point me to a better way of doing things or perhaps a workaround or alternative…

## Reproducing the Issue
- Clone this repo
- Install dependencies: `npm i`
- Build the docs: `npm run build:docs`
- View the docs: `open docs/index.html`
- Compare the ZodUser with the Typescript user

## What solutions look like
I'm looking for a way to get the advantages of Zod (I can use the schema responsible for the type at runtime to validate inputs) along with the simpler docs of zod-less Typescript types.
I understand I can maintain the two separately, but I would rather that be automatic and not introduce a risk for both of these versions to fall out of sync.