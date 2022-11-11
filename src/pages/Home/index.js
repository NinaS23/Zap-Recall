import { useState } from "react";
import CardClosed from "../../components/ClosedCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import data from "../../data/test";
import Answer from "../answer";
import { Content, ClosedCards, } from "./style";

export default function Home({ newType }) {
    let typeData = newType.toLowerCase()
    let usedData = [];
    if (typeData === 'nodejs') usedData = data.nodejs;
    if (typeData === 'typescript') usedData = data.typescript
    const [newData, setNewData] = useState(usedData);
    const [showAnser, setShowAnswer] = useState(false);
    const [card, setCard] = useState(null);


    const handleSelect = (selectedIndex) => {
        let dataModificated = [];
        let mapData = [];
        if (typeData === 'nodejs') mapData = data.nodejs;
        if (typeData === 'typescript') mapData = data.typescript;
        mapData.map((e, index) => {
            if (selectedIndex === index) {
                setCard(index);
                let newDataValue = {
                    ...e,
                    picked: true,
                };
                dataModificated.push(newDataValue)
            } else {
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
                            <Answer
                                newData={newData}
                                card={card}
                                setShowAnswer={setShowAnswer}
                                index={index}
                                showAnser={showAnser}
                                question={e.react}
                                answer={e.resp}
                            />
                        }

                    </ClosedCards>
                )
            })}
            <Footer />
        </Content>
    )
}