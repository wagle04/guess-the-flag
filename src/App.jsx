import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <div className="h-[100px]" />
      <Main />
    </div>
  );
}

export default App;
