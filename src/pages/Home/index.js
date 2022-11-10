import { useState } from "react";
import logo from "../../assets/imgs/logo.png"
import { StartButton, Content, Start, StartLogo } from "../Entry/style";
import { SelectType, Option } from "./style";


export default function Home() {
    const [questionType, setQuestionType] = useState('escolha um tema para zapear...');
    const list = [
        { id: 0, name: 'escolha um tema para zapear...' },
        { id: 1, name: 'Typescript' },
        { id: 2, name: 'NodeJs' },
        { id: 3, name: 'PostgresSQL' },
        { id: 4, name: 'MongoDB' }
    ];
    console.log(questionType);
    function startGame(questionType) {
        if (questionType === 'escolha um tema para zapear...') {
            alert("escolha uma modalidade de perguntas!");
        }
    }

    return (
        <Content>
            <StartLogo>
                <img src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </StartLogo>
            <SelectType
                name="select"
                className="inputText" 
                colorInput={questionType === 'escolha um tema para zapear...' ? '#808080' : '#D70900'}
                onChange={e => setQuestionType(e.target.value)}
                >
                {list.map((item, index) => (
                    <Option value={item.name}>{item.name}</Option>
                ))}
            </SelectType>
            <StartButton borderColor={questionType === 'escolha um tema para zapear...' ? '#E8E8E8' : '#D70900'} onClick={() => startGame(questionType)} >
                <Start startColor={questionType === 'escolha um tema para zapear...' ? "#C0C0C0" : '#D70900'}>Iniciar Recall!!</Start>
            </StartButton>
        </Content>
    );
}