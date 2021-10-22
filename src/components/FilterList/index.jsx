import React from "react";

import "./style.scss";

function FilterList({ name, items, selected, setSelected }) {
  return (
    <div className="filterList">
      <h5>{name}</h5>
      {items.map((item) => (
        <div key={item}>
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={(e) => {
              if (e.target.checked && !selected.includes(item)) {
                setSelected([...selected, item]);
              }

              if (!e.target.checked && selected.includes(item)) {
                const index = selected.indexOf(item);
                selected.splice(index, 1);
                console.log("case", selected);
                setSelected([...selected]);
              }
            }}
          />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

export default FilterList;
