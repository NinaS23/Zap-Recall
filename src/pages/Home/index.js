import { useState } from "react";
import CardClosed from "../../components/ClosedCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OpenCard from "../../components/OpenCard";
import data from "../../data/test";
import { Content, ClosedCards, OpenQuestion, CardsOpen, OpenAnswer } from "./style";

export default function Home({ newType }) {
    let typeData = newType.toLowerCase()
    let usedData = [];
    if (typeData === 'nodejs') usedData = data.nodejs;
    if (typeData === 'typescript') usedData = data.typescript
    const [newData, setNewData] = useState(usedData);
    const [showAnser, setShowAnswer] = useState(false);
   


    const handleSelect = (selectedIndex) => {
        let dataModificated = [];
        let mapData = [];
        if (typeData === 'nodejs') mapData = data.nodejs;
        if (typeData === 'typescript') mapData = data.typescript;
        mapData.map((e, index) => {
            if (selectedIndex === index) {
                let newDataValue = {
                    ...e,
                    picked: true,
                };
                dataModificated.push(newDataValue)
            } else if (selectedIndex !== index) {
                let newDataValue = {
                    ...e
                }
                dataModificated.push(newDataValue);
            }
        })
        setNewData(dataModificated);
    };


    return (
        <Content>
            <Header />
            {newData.map((e, index) => {
                return (
     
                    <ClosedCards onClick={() => handleSelect(index)}>
                        {e.picked === false ?
                            <CardClosed
                                index={index}
                            />
                            :
                            <CardsOpen onClick={() => setShowAnswer(true)}>
                                {showAnser === false && e.picked === true ?
                                    <OpenQuestion>
                                        <OpenCard word={e.react} picked={false}/>
                                    </OpenQuestion>
                                    :
                                    <OpenAnswer>
                                        <OpenCard  word={e.resp} picked={true} setShowAnswer={setShowAnswer}/>
                                    </OpenAnswer>
                                }

                            </CardsOpen>
                        }

                    </ClosedCards>
                )
            })}
            <Footer />
        </Content>
    )
}