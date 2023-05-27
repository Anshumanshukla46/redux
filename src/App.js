import './App.css';

// accessing the component from "container" only (CHECK README.md)

import HeaderContainer from "./containers/HeaderContainer";
import HomeContainer from "./containers/HomeContainer";

function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <HomeContainer />
    </div>
  );
}

export default App;
