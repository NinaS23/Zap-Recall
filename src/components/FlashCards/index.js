import React from 'react';
import { CardsOpen, ClosedCards, OpenAnswer } from '../../pages/Home/style';
import OpenQuestionCard from '../OpenQuestion';
import CardClosed from '../ClosedCard';
import OpenCard from '../OpenCard';


//Card Desvirado
function Card ({ index, tapCard, status }) {

    return (
        <ClosedCards>
        <CardClosed 
        status={status}
        tapCard={tapCard}
        index={index}
        />
      </ClosedCards>
    )
}

//Pergunta e Resposta
function CardQuestion ({ question, answer, zap, index }) {

    const [flipped, setFlipped] = React.useState(false);

    return (
        <>
            {!flipped ? (
                <CardsOpen >
                <OpenQuestionCard 
                 question={question}
                 index={index}
                 setFlipped={setFlipped}
                
                />
              </CardsOpen>
            ) : (
                <CardsOpen>
                <OpenAnswer>
                   <OpenCard 
                    index={index}
                    answer={answer}
                     zap={zap}

                   />
                </OpenAnswer>
            </CardsOpen>
            )}
        
        </>
        
    )
}

export default function FlashCards ({
    title,
    tap,
    index,
    tapCard,
    question,
    answer,
    status,
    zap,
}) {


    return (
        <>
            { !tap ? (
                <Card
                    key={index}
                    title={title}
                    index={index}
                    tapCard={tapCard}
                    status={status}
                    />) : (
                    <CardQuestion
                        question={question}
                        answer={answer}
                        zap={zap}
                        index={index}
                    />)}

        </>
    )
}