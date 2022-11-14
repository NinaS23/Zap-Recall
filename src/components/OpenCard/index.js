import { BoxValidation, AnswerDiv, Red, Orange, Green } from "./style"

export default function OpenCard({ answer, zap, index }) {
  

    return (
        <>
            <AnswerDiv>
                <h2>{answer}</h2>
                <div>
                    <BoxValidation>
                        <Red id='red'onClick={() => zap(index, 'error')}><h3>Não lembrei</h3></Red>
                        <Orange id='orage' onClick={() => zap(index, 'almost')}><h3>Quase não lembrei</h3></Orange>
                        <Green id='green' onClick={() => zap(index, 'correct')}><h3>Zap!</h3></Green>
                    </BoxValidation>
                </div>
            </AnswerDiv>
        </>
    )

}