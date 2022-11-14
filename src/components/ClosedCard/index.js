import { ClosedCard } from "./style"

export default function CardClosed({ index, picked, handleSelect }) {

    return (
        <ClosedCard>
            <h3>pergunta {index + 1}</h3>
            <ion-icon 
            className="arrow" 
            name="play-outline" 
            onClick={() => handleSelect(index, "question")}
            ></ion-icon>
        </ClosedCard>
    )
}

