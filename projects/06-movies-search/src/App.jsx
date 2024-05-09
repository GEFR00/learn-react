import { useState } from 'react'
import './App.css'
import { getMovieByName } from './services/service';
import { MovieCard } from './components/MovieCard';

function App() {

  const [movieSearch, setMovieSearch] = useState('')
  const [movies, setMovies] = useState([]);
  const [lastSearch, setLastSearch] = useState('');

  const handleMovieSearch = (event) => {
    event.preventDefault();

    if(!movieSearch.trim() || movieSearch === lastSearch) return;

    getMovieByName(movieSearch)
      .then(data => {
        setMovies(data);
        console.log(data);
        setLastSearch(movieSearch); 
      })
      .catch(error => console.log(error))

  }



  return (
    <>
      <header className='movieApp-header'>
        <h1>Buscador de películas</h1>
          <form className="movieApp-header-form" onSubmit={handleMovieSearch}>
            <input 
              value={movieSearch}
              onChange={ (e) => setMovieSearch(e.target.value) } 
              type="text"
              placeholder="Ingrese nombre de la película"  />

            <button type="submit" className="">Buscar</button>
          </form>
      </header>
      <main>
        <section className='movieApp-moviesContainer'>
          {
            movies.map(movie => (
              <MovieCard 
                key={movie.imdbID}
                id={movie.imdbID}
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}/>
            ))
          }
        </section>
      </main>
    </>
  )
}

export default App
