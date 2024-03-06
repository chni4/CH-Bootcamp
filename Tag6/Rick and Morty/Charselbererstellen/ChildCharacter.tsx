type ChildCharacterProps = {
    "id": number;
    "name": string;
    "img"?: string;
}

export default function ChildCharacter(p: ChildCharacterProps){
    return <><p>{p.id} {p.name} </p>
    <img src={p.img}/>
    </>
}