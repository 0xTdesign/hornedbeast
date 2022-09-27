import Hornedbeast from "../Hornedbeast/Hornedbeast";
import "./Main.css";

export default function Main({ beastData }) {
  return (
    <main>
      {beastData.map((beast) => {
        return (
          <div className="main-container">
            <Hornedbeast
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
            />
          </div>
        );
      })}
    </main>
  );
}
