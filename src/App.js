import { Route, Routes } from "react-router";
import { routesConfig } from "./routes/routesConfig";
import NavBar from "./components/NavBar";
import "./App.css"

export default function App() {
  return (
    <>
    <NavBar />

    <Routes>
    { routesConfig.map(route => <Route key={route.id} path={route.path} element={route.element} />) }
    </Routes>

    </>
  );
}

