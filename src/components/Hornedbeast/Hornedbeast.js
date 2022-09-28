import { useState } from "react";
import "./Hornedbeast.css";

export default function Hornedbeast({
  title,
  imageUrl,
  description,
  imageLarge,
  beast,
}) {
  const [vote, setVote] = useState(0);

  const voteClick = () => {
    setVote(vote + 1);
  };

  return (
    <section>
      <h2>{title}</h2>
      <div className="photo">
        <img
          onClick={() => {
            voteClick();
            imageLarge(beast);
          }}
          title={title}
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="box">
        <p>{description}</p>
        <span>{vote}❤️</span>
      </div>
    </section>
  );
}
