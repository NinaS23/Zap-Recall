import { BoxValidation, IconDiv, AnswerDiv, Red, Orange, Green } from "./style"


export default function OpenCard({ word, picked, setShowAnswer, card, index }) {
  
    if (picked === false) {
        return (
            <>
                <div>
                    <h2>{word}</h2>
                    <IconDiv onClick={() => setShowAnswer(true)}>
                        <ion-icon name="reload-outline"></ion-icon>
                    </IconDiv>
                </div>
            </>
        )
    }
    if (picked === true) {
        return (
            <>
                <AnswerDiv>
                    <h2>{word}</h2>
                    <div>
                        <BoxValidation onClick={() => console.log(card)}>
                            <Red><h3>Não lembrei</h3></Red>
                            <Orange><h3>Quase não lembrei</h3></Orange>
                            <Green><h3>Zap!</h3></Green>
                        </BoxValidation>
                    </div>
                </AnswerDiv>
            </>
        )
    }
}