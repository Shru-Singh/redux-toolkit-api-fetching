import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1` }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `/`,
    }),
  }),
})

export const { useGetPokemonByNameQuery } = pokemonApi