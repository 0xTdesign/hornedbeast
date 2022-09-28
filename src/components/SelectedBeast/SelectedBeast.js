import React from "react";
import "./SelectedBeast.css";

export default function SelectedBeast({ activeBeast, imageLarge }) {
  return (
    <div className="modal">
      <div className="modal__box">
        <img
          title={activeBeast.title}
          src={activeBeast.image_url}
          alt={activeBeast.title}
        />
        <div className="content">
          <h2>{activeBeast.title}</h2>
          <p>{activeBeast.description}</p>
          <button className="modal-btn" onClick={imageLarge}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}