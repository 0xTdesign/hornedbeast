import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import beastData from "./data.json";

function App() {
  return (
    <div className="App">
      <Header />
      <Main beastData={beastData} />
      <Footer />
    </div>
  );
}

export default App;
