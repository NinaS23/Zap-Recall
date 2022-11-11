import smallLogo from "../../assets/imgs/smallLogo.png";
import { HeaderDiv } from "./style";

export default function Header() {
    return (
        <HeaderDiv>
            <img src={smallLogo} alt="small lightning" />
            <h1>ZapRecall</h1>
        </HeaderDiv>
    )
}