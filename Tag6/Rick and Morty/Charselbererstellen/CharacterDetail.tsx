import {Character} from "./data.ts";
import {useParams} from "react-router-dom";
import ChildCharacter from "./ChildCharacter.tsx";


type CharacterDetailCardProps ={
    characters: Character[];
}


export default function CharacterDetailCard({characters}: CharacterDetailCardProps){

    const localCharacters = characters;
    const params = useParams();
    const id = params.id;
    const result = localCharacters.filter((d) => d.id.toString() === id)


    return <div>
        {result.map((d) => {
            return <ChildCharacter key={d.id} id={d.id} name={d.name} img={d.image}/>})}
    </div>
}

