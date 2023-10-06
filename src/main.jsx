import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BiblioContext from "./Contexto/BiblioContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BiblioContext>
    <App />
  </BiblioContext>
);
