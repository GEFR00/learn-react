import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/service';
import { useCatImage } from './hooks/useCatImage';

function App() {

  const [fact, setFact] = useState(null);
  const { imageURL } = useCatImage({ fact });

  const handleNewRandomFact = async () => {
    const newRandomFact = await getRandomFact();
    setFact(newRandomFact);
  }

  //Obtiene un hecho aleatorio de gatos
  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact));
    
  }, [])
 
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
