import React from "react";
import "./Header.css";

export default function Header({ handleFilter }) {
  return (
    <header>
      <h1>Horned Beasts</h1>
      <form>
        <select name="hornFilter" onChange={handleFilter}>
          <option value="">All</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="100">100</option>
        </select>
      </form>
    </header>
  );
}
