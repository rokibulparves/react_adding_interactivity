/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import ItemList from "./ItemList";

// let nextId = 3;
const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function Map() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  //we reveive item id and seen state from ItemList.jsx with this top level function
  const handleList = (nextId, nextSeen) => {
    setMyList(
      myList.map((list) => {
        //comparing each list id with the id came from ItemList.jsx
        if (list.id === nextId) {
          return { ...list, seen: nextSeen };
        } else {
          return list;
        }
      })
    );
  };

  //we reveive item id and seen state from ItemList.jsx with this top level function
  const handleYourList = (nextId, nextSeen) => {
    setYourList(
      yourList.map((list) => {
        //comparing each list id with the id came from ItemList.jsx
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
      {/* Here we passing a state and a function to achieve top level data passing */}
      <ItemList list={myList} onToggle={handleList} />
      <h2>Your list of art to see:</h2>
      {/* Here we passing a state and a function to achieve top level data passing */}
      <ItemList list={yourList} onToggle={handleYourList} />
    </>
  );
}
