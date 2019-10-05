import React from "react";

export default function ModelDetails(props) {
  const pcs = props;
  return (
    <div>
      <h2>{pcs}</h2>

      <p>
        <i>{pcs}</i>
      </p>
      {/* 
    <ul>
      { pc.ingredients.map(ingredient =>
        <li key={ingredient}>{ ingredient }</li>
      ) }
    </ul> */}
    </div>
  );
}
