import { BoxValidation, IconDiv, AnswerDiv, Red, Orange, Green } from "./style"


export default function OpenCard({ word, picked, setShowAnswer }) {
    if (picked === false) {
        return (
            <>
                <div>
                    <h2>{word}</h2>
                    <IconDiv>
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
                        <BoxValidation>
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