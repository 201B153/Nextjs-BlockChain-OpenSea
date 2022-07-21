import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'tx3y4aoe',
    dataset: 'production',
    apiVersion: '2021-02-05',
    token: "skYjhd5AAAJyb5AFecV1r6sD9PaD3qlGx6SzdFKVMThZU3i8ESmsfhuMiUZyEOc8pDA1NmDj8E6y2rlZ5EpIrAmWG5gu54RTk9YNYajbd9sxzA8nurh9Ta7Lt4CS5nXseEDiVxonyt2vevrx8EFxSZfpQnpKp49ekRnV1C95aXZY46JoGXKp",
    useCdn: false,
})