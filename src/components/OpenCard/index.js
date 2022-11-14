import { useState } from "react";
import { BoxValidation, AnswerDiv, Red, Orange, Green } from "./style"


export default function OpenCard({ answer, handleSelect, index }) {
  

    return (
        <>
            <AnswerDiv>
                <h2>{answer}</h2>
                <div>
                    <BoxValidation  onClick={() => handleSelect(index, 'final')}>
                        <Red id='red'><h3>Não lembrei</h3></Red>
                        <Orange id='orage'><h3>Quase não lembrei</h3></Orange>
                        <Green id='green'><h3>Zap!</h3></Green>
                    </BoxValidation>
                </div>
            </AnswerDiv>
        </>
    )

}