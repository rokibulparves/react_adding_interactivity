/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import ItemList from "./ItemList";

let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function Map() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  const handleList = (nextId, nextSeen) => {
    setMyList(
      myList.map((list) => {
        if (list.id === nextId) {
          return { ...list, seen: nextSeen };
        } else {
          return list;
        }
      })
    );
  };

  const handleYourList = (nextId, nextSeen) => {
    setYourList(
      yourList.map((list) => {
        if (list.id === nextId) {
          return { ...list, seen: nextSeen };
        } else {
          return list;
        }
      })
    );
  };

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList list={myList} onToggle={handleList} />
      <h2>Your list of art to see:</h2>
      <ItemList list={yourList} onToggle={handleYourList} />
    </>
  );
}
