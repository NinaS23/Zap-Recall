import { ClosedCard } from "./style";
import Icons from "../Icons";

export default function CardClosed({ index, picked, tapCard, status }) {
    
    return (
        <ClosedCard className={`flashcard ${status}`}>
            <h3>pergunta {index + 1}</h3>
            <Icons status={status} tapCard={tapCard} index={index} type={"cardClosed"}/>
        </ClosedCard>
    )
}

