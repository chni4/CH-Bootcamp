interface Schuler {
  vorName: string;
  nachname: string;
  alter: number;
  Sportnoten: (number | "A" | "B" | "C" | "D" | "E" | "F" | undefined)[];
  Kunstnoten: (number | "A" | "B" | "C" | "D" | "E" | "F" | undefined)[];
  Mathenoten: (number | "A" | "B" | "C" | "D" | "E" | "F" | undefined)[];

}

const schulerDaten1: Schuler = {
  vorName: "Kuan",
  nachname: "Lothe",
  alter: 12,
  Sportnoten: ["F", 1, undefined, 2, 4, 4, 5],
  Kunstnoten: ["A", 1, undefined, 3, 2, 2, 5],
  Mathenoten: ["D", 1, undefined, 2, 2, 4, 3],
};

const schulerDaten2: Schuler = {
  vorName: "nonnoonnono",
  nachname: "nooo",
  alter: 4578,
  Sportnoten: ["F", 1, undefined, 3, 4, 4, 5],
  Kunstnoten: ["E", 1, undefined, 2, 2, 2, 4],
  Mathenoten: ["A", 1, undefined, 3, 3, 4, 5],
};

const schulerDaten3: Schuler = {
  vorName: "Boter",
  nachname: "Lothe",
  alter: 17,
  Sportnoten: ["A", 1, undefined, 1, 2, 4, 5],
  Kunstnoten: ["E", 1, undefined, 3, 2, 4, 1],
  Mathenoten: ["D", 1, undefined, 3, 2, 2, 5],
};

const schulerListe: Schuler[] = [schulerDaten1, schulerDaten2, schulerDaten3];

function druckeSchulerListe(schulerListe: Schuler[]) {
  schulerListe.forEach(schuler => {
    console.log(`${schuler.vorName} ${schuler.nachname} (${schuler.alter})`);
    console.log("=".repeat(30));
    console.log("Noten:")
    console.log(`Sport: ${schuler.Sportnoten.map(note => note === undefined ? "*" : note).join(",")}`)
    console.log(`Kunst: ${schuler.Mathenoten.map(note => note === undefined ? "*" : note).join(",")}`);
    console.log(`mathe: ${schuler.Kunstnoten.map(note => note === undefined ? "*" : note).join(",")}`);


  });
}

druckeSchulerListe(schulerListe);

