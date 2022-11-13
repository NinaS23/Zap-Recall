import { useState } from "react/cjs/react.production.min";
import data from "../../data/test";
import { BoxValidation, IconDiv, AnswerDiv, Red, Orange, Green } from "./style"


export default function OpenCard({ word, picked, setShowAnswer,card, index }) {
    console.log(card);
    function markCard(){
        console.log(card)
    }

return (
    <>
        <AnswerDiv>
            <h2>{word}</h2>
            <div>
                <BoxValidation onClick={() => markCard()}>
                    <Red id='red'><h3>Não lembrei</h3></Red>
                    <Orange id='orage'><h3>Quase não lembrei</h3></Orange>
                    <Green id='green'><h3>Zap!</h3></Green>
                </BoxValidation>
            </div>
        </AnswerDiv>
    </>
)
    
}