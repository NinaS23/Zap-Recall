import { ClosedCard } from "./style"

export default function CardClosed({ index, picked, tapCard,status }) {
    console.log(status)

    return (
        <ClosedCard className={`flashcard ${status}`}>
            <h3>pergunta {index + 1}</h3>
            <ion-icon 
            className="arrow" 
            name="play-outline" 
            onClick={() => tapCard(index)}
            ></ion-icon>
        </ClosedCard>
    )
}

