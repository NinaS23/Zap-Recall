import { useContext, useState } from "react";
import logo from "../../assets/imgs/logo.png";
import MetaContext from "../../context/metaContext";
import { Content, InputMeta, StartButton, Start, StartLogo } from "./style";
import { useNavigate } from "react-router-dom";

export default function Entry() {
    const [meta, setMeta] = useState("");
    const { setMetaPoint } = useContext(MetaContext);
    const navigate = useNavigate()

    function isMetaDone(meta) {
        let metaPointValue = Number(meta);
        if (meta === "" ) {
            alert("digite um valor para sua meta e prossiga!");
        } else if ( metaPointValue  > 8 || metaPointValue < 0 ){
            alert("digite um número entre 0-8");
        } else {
            setMetaPoint(metaPointValue);
            navigate("/select-type");
        }
    }

    return (
        <Content>
            <StartLogo>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </StartLogo>
                <InputMeta 
                    type="text"
                    id="meta"
                    name="input-meta"
                    onChange={e => setMeta(e.target.value)}
                    placeholder="Digite sua meta de zaps...">
                </InputMeta>
            <StartButton borderColor={meta === '' ? '#E8E8E8' : '#D70900'} onClick={() => isMetaDone(meta)} >
                <Start startColor={meta === '' ? "#C0C0C0" : '#D70900'}>Escolher Tema!</Start>
            </StartButton>
        </Content>
    );
}