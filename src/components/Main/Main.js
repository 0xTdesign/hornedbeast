import Hornedbeast from "../Hornedbeast/Hornedbeast";
import "./Main.css";

export default function Main({ beastData, handleModal }) {
  return (
    <main>
      {beastData.map((beast, index) => {
        return (
          <div key={index} className="main-container">
            <Hornedbeast
              beast={beast}
              title={beast.title}
              imageUrl={beast.image_url}
              description={beast.description}
              handleModal={handleModal}
            />
          </div>
        );
      })}
    </main>
  );
}
