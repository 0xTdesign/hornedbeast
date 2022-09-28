import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import beastData from "./data.json";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";
import { useState } from "react";

function App() {
  const [modalShow, setmodalShow] = useState(false);
  const [activeBeast, setactiveBeast] = useState({});

  const imageLarge = (beast) => {
    setmodalShow(!modalShow);
    setactiveBeast(beast);
  };

  return (
    <div className="App">
      <Header />
      <Main beastData={beastData} imageLarge={imageLarge} />
      {modalShow && (
        <SelectedBeast activeBeast={activeBeast} imageLarge={imageLarge} />
      )}
      <Footer />
    </div>
  );
}

export default App;
