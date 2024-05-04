import './App.css'
import { useCatImage } from './hooks/useCatImage';
import { useCatFact } from './hooks/useCatFact';

function App() {

  const { fact, refreshFact } = useCatFact();
  const { imageURL } = useCatImage({ fact });

  const handleNewRandomFact = async () => {
    refreshFact();
  }

  return (
    <main className="app">
      <h2>App de gatitos</h2>
      {fact && <p>{fact}</p>}
      <button onClick={ () => handleNewRandomFact() }>Nuevo hecho random</button>
      {imageURL && 
        <img 
          src={imageURL}
          className='cat-image' 
          alt={`Get image using three first word to the sentence: ${fact}`} />
      }
      
    </main>
  )
}

export default App
