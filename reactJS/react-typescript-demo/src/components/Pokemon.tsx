type PokemonProps = {
    name: string,
    color: string,
    id: string,
    moves: string[]
}

export const Pokemon = (props: PokemonProps) => {
    return (
        <div>
            <h2>
                The pokemon is {props.name}
            </h2>
        </div>
    )
}