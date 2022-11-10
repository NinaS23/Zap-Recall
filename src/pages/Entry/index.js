import logo from "../../assets/imgs/logo.png";
import { Content, InputMeta} from "./style";

export default function Entry() {
    return (
        <Content>
            <div>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
            <InputMeta type="text" id="meta" name="input-meta" placeholder="Digite sua meta de zaps..."></InputMeta>
            <button>Iniciar Recall!</button>
        </Content>
    );
}