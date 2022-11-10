import ReactDOM from "react-dom";
import App from "./app/app"
import "./assets/css/reset.css"
import "./assets/css/style.css"

const Content = <App />
const Local = document.querySelector(".root");

ReactDOM.render(Content, Local);