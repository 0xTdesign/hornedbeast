import Hornedbeast from "../Hornedbeast/Hornedbeast";
import "./Main.css";

export default function Main({ beastData, imageLarge }) {
  return (
    <main>
      {beastData.map((beast) => {
        return (
          <div className="main-container">
            <Hornedbeast
              beast={beast}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              imageLarge={imageLarge}
            />
          </div>
        );
      })}
    </main>
  );
}
