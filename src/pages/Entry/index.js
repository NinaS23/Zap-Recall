import logo from "../../assets/imgs/logo.png";
import { Content } from "./style";

export default function Entry() {
    return (
        <Content>
            <div>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
        </Content>
    );
}