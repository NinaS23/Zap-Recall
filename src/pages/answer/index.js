import OpenCard from "../../components/OpenCard";
import { IconDiv } from "../../components/OpenCard/style";
import { CardsOpen, OpenAnswer, OpenQuestion } from "../Home/style";


export default function Answer({ question,answer, showAnser,setShowAnswer, card, index }) {
   
    function getAnswer() {
        if(index === card){
            setShowAnswer(true)
        }
    }
    return (
        <CardsOpen>
            {showAnser === false  ?
                <OpenQuestion>
                    <div>
                        <h2>{question}</h2>
                        <IconDiv onClick={() => getAnswer() }>
                            <ion-icon name="reload-outline"></ion-icon>
                        </IconDiv>
                    </div>
                </OpenQuestion>
                :
                <OpenAnswer>
                    <OpenCard word={answer} picked={true} card={card} index={index}/>
                </OpenAnswer>
            }
             </CardsOpen>
             
    )
}