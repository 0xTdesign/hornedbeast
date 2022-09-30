import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import beastJson from "./data.json";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";
import { useState } from "react";

function App() {
  const [modalShow, setmodalShow] = useState(false);
  const [activeBeast, setactiveBeast] = useState({});
  const [beastData, setBeastData] = useState(beastJson);

  const handleModal = (beast = {}) => {
    setmodalShow(!modalShow);
    setactiveBeast(beast);
  };

  const handleFilter = (event) => {
    const numHorns = parseInt(event.target.value); // ParseInt turns a STRING into a NUMBER
    const myFilteredBeasts = beastJson.filter((beast) => beast.horns === numHorns);

    // Make it show all again

    event.target.value === "" ? setBeastData(beastJson) : setBeastData(myFilteredBeasts);
    // setBeastData(myFilteredBeasts); //Then it will return a brand new array with the items that it returns.
  };

  return (
    <div className="App">
      <Header handleFilter={handleFilter} />
      <Main beastData={beastData} handleModal={handleModal} />
      {modalShow && <SelectedBeast activeBeast={activeBeast} handleModal={handleModal} />}
      <Footer />
    </div>
  );
}

export default App;
