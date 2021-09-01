
import React from 'react'
import { useGetPokemonByNameQuery } from './redux/counter'

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('')
  
console.log(error);
  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
        {data.results.map((data) => (
          <>
          <h1>{data.title}</h1>
          <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt={data.title} />
          </>
        ))}
        </>
      ) : null}
    </div>
  )
}

