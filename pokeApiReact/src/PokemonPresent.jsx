function PokemonPresent(props) {
    return (
        <div>
            <h2> {props.name}</h2>
            <img src={props.image} alt="photo de pokemon" />
        </div>
    )
}

export default PokemonPresent