interface Schuler {
  vorName: string;
  nachname: string;
  alter: number;
  noten: (number | "A" | "B" | "C" | "D" | "E" | "F" | undefined)[];
}

const schulerDaten1: Schuler = {
  vorName: "Kuan",
  nachname: "Lothe",
  alter: 12,
  noten: [1, 4, 3, 1, "A", undefined, 1, 2],
};

const schulerDaten2: Schuler = {
  vorName: "nonnoonnono",
  nachname: "nooo",
  alter: 4578,
  noten: ["A", undefined, 1],
};

const schulerDaten3: Schuler = {
  vorName: "Boter",
  nachname: "Lothe",
  alter: 17,
  noten: ["A", 1, undefined, 3, 2, 4, 5],
};

const schulerListe: Schuler[] = [schulerDaten1, schulerDaten2, schulerDaten3];

function druckeSchulerListe(schulerListe: Schuler[]) {
  schulerListe.forEach(schuler => {
    console.log(`${schuler.vorName} ${schuler.nachname} (${schuler.alter})`);
    console.log("=".repeat(30));
    console.log(`Noten: ${schuler.noten.map(note => note === undefined ? '*' : note).join(',')}`);
    console.log();
  });
}

druckeSchulerListe(schulerListe);
