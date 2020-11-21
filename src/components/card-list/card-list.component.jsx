import React from "react";
import "./card-list.css";
import { Card } from "../card/card.component";

export const CardList = (prop) => (
  <div className="card-list">
    {prop.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
