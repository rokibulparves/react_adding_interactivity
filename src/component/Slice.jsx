import { useState } from "react";

let nextId = 3;
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

export default function Slice() {
  const [name, setName] = useState(""); //Takes user input
  const [artist, setArtist] = useState(initialArtists); //saves artist list

  const handleItem = () => {
    const pos = 1; //hardcoded position setup (can be any number of the list)
    const newArtist = [
      ...artist.slice(0, pos), //slice array from position 0 to pos (here pos=1) but rest of the array deleted in this stage
      { id: nextId++, name: name }, //added new item in the array
      ...artist.slice(pos), //this stage adds the rest of the array whitch are sliced or deleted in the early stage. Hence a new item is added
    ];

    setArtist(newArtist); // set the deep copy to artist
    setName(""); //set null string so the input box gets empty
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleItem}>Join</button>
      <ul>
        {artist.map((ar) => (
          <li key={ar.id}>{ar.name}</li>
        ))}
      </ul>
    </>
  );
}
