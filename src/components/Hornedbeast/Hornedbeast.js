import { useState } from "react";
import "./Hornedbeast.css";

export default function Hornedbeast({ title, imageUrl, description }) {
  const [vote, setVote] = useState(0);

  const clickVote = () => {
    setVote(vote + 1);
  };

  return (
    <section>
      <h2>{title}</h2>
      <div className="photo">
        <img onClick={clickVote} title={title} alt={title} src={imageUrl} />
      </div>
      <div className="box">
        <p>{description}</p>
        <span>{vote}❤️</span>
      </div>
    </section>
  );
}
