import "./App.css";
import Header from "./components/header/Header.jsx";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Main from "./components/main/Main.jsx";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
  );
}

export default App;
