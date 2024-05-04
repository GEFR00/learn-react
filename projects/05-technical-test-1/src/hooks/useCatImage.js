import { useEffect, useState } from 'react'
import { getNewImageCat } from '../services/service';

export const useCatImage = ({ fact }) => {
    const [imageURL, setImageURL] = useState(null);
  
    //Obtiene imagen según las 3 primeras palabras del hecho
    
    useEffect(() => {

        if(!fact) return;

        getNewImageCat(fact).then(newImage => setImageURL(newImage));
        
    }, [fact])
    
    return { imageURL }
}
