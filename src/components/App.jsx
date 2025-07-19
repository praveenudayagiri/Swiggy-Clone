// src/components/App.jsx
import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
    </div>
  );
};

export default App;
