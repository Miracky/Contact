import React, { useState } from "react";

function List({ contacts, onRemoveContact }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]?.toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <input
        className="filter"
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => {
          setFilterText(e.target.value);
        }}
      />

      <ul className="list">
        {filtered.map((contact) => (
          <li key={contact.id} className="listItem">
            <span> {contact.fullname} </span>
            <span>({contact.phoneNumber})</span>
            <button className="rembtn"
             onClick={()=>onRemoveContact(contact)}
             >Remove -</button>
          </li>
          
        ))}
        
      </ul>
      <p> Total contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
