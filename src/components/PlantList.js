import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantList }) {
  return (
    <ul className="cards">
      {plantList.map((plant) => (
        <PlantCard plant={plant} key={plant.id} />
      ))}
    </ul>
  );
}

export default PlantList;
