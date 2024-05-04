import { API_URL } from "../constants"

export const getMovieByName = async (movie) => {

    const response = await fetch(`${API_URL}s=${movie}`);
    const data = await response.json();
    return data.Search;

}