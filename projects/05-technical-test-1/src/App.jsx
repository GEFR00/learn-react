import { useEffect, useState } from 'react'
import './App.css'
import { CAT_ENDPOINT_RANDOM_FACT, CAT_ENDPOINT_RANDOM_FACT_IMAGES } from './constants';

function App() {

  const [fact, setFact] = useState(null);
  const [imageURL, setImageURL] = useState(null);

  //Obtiene un hecho aleatorio de gatos
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(response => response.json())
      .then(data => setFact(data.fact))
    
  }, [])


  //Obtiene imagen según las 3 primeras palabras del hecho
  useEffect(() => {

    if(!fact) return;

    const firstWordFromFact = fact.split(' ', 3).join('');
    const IMAGE_URL = CAT_ENDPOINT_RANDOM_FACT_IMAGES.replace('[REPLACE]', firstWordFromFact);
      
    fetch(IMAGE_URL)
      .then(response => {
        const { url } = response;
        setImageURL(url);
      })
    
  }, [fact])
  
  return (
    <main>
      <h2>App de gatitos</h2>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Get image using three first word to the sentence: ${fact}`} />}
      
    </main>
  )
}

export default App
