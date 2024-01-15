/* eslint-disable react/prop-types */
export default function ItemList({ list, onToggle }) {
  return (
    <>
      <ul>
        {list.map((list) => (
          <li key={list.id}>
            <label>
              <input
                type="checkbox"
                checked={list.seen}
                onChange={(e) => {
                  {
                    /* Here we sending each item id and check state by function came from top level*/
                  }
                  onToggle(list.id, e.target.checked);
                }}
              />
              {list.title}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
