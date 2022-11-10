import { useState } from "react";
import logo from "../../assets/imgs/logo.png";
import { Content, InputMeta, StartButton,Start } from "./style";

export default function Entry() {
    const [ meta, setMeta ] = useState('');
    return (
        <Content>
            <div>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </div>
            <InputMeta
                type="text"
                id="meta"
                name="input-meta"
                onChange={e => setMeta(e.target.value)}
                placeholder="Digite sua meta de zaps...">
            </InputMeta>
            <StartButton borderColor={meta === '' ? '#E8E8E8' : '#D70900'}>
                <Start startColor={meta === '' ? "#C0C0C0" : '#D70900'}>Iniciar Recall!</Start>
            </StartButton>
        </Content>
    );
}