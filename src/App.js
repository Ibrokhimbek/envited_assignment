import { Route, Routes } from "react-router-dom";
import { routes } from "./utils/routes";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
              element={route.component}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
