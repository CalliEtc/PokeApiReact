import { useState, useEffect } from 'react'
import './App.css'
import PokemonPresent from './PokemonPresent'
import axios from 'axios'
import Pokemon from './Pokemon'

function App() {
  const [allPokemons, setAllPokemons] = useState([])
 
    const fetchPokemon = async () => {
    
        const response = await axios("https://pokeapi.co/api/v2/pokemon?limit=50");
        console.log(response.data.results); // Stockez les données des utilisateurs dans l'état
        setAllPokemons(response.data.results);
      console.log(Pokemon)
    }


 // Appelez la fonction fetchUsers pour charger les données des utilisateurs une fois le composant monté
 useEffect(() => {
  fetchPokemon();
  }, []); 

  return (
    
    <div>
      
      {allPokemons.map((element, id) => {
        
        return <PokemonPresent key={id} name={element.name} url={element.url}/>
        
      })}
    </div>
  )
}

export default App
