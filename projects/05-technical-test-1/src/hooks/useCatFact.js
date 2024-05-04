import { useEffect, useState } from "react";
import { getRandomFact } from "../services/service";

export const useCatFact = () => {
    const [fact, setFact] = useState(null);

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact));
    }

    //Obtiene un hecho aleatorio de gatos
    useEffect(refreshFact, [])

    return { fact, refreshFact }

}
