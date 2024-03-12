import { useState, useEffect } from 'react'
import axios from 'axios'

function Pokemon({}){
    const [pokemon, setPokemon] = useState(null)

    const AccioPokemon = async () => {
        const response = await axios.get(url);
        setPokemon(response.data.url);
        console.log(response.data.url);
    }
    
    useEffect(() => {
        Pokemon();
        }, []); 
}

export default Pokemon