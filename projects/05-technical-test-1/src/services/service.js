import { CAT_ENDPOINT_RANDOM_FACT, CAT_ENDPOINT_RANDOM_FACT_IMAGES } from "../constants";

export const getRandomFact = async () => {
    const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
    const data = await response.json();
    return data.fact;
}

export const getNewImageCat = async ( fact ) => {
    const firstWordFromFact = fact.split(' ', 3).join('');
    const IMAGE_URL = CAT_ENDPOINT_RANDOM_FACT_IMAGES.replace('[REPLACE]', firstWordFromFact);
    const response = await fetch(IMAGE_URL);
    const { url } = response;
    return url;
}