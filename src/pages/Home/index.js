import { useState } from "react";
import CardClosed from "../../components/ClosedCard";
import OpenQuestionCard from "../../components/OpenQuestion";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OpenCard from "../../components/OpenCard";
import data from "../../data/test";
import { Content, ClosedCards, OpenAnswer, CardsOpen } from "./style";


export default function Home({ newType }) {
    let typeData = newType.toLowerCase();
    let usedData = [];
    if (typeData === 'nodejs') usedData = data.nodejs;
    if (typeData === 'typescript') usedData = data.typescript;
    const [newData, setNewData] = useState(usedData);

    function handleSelect(selectedIndex, type) {
        let dataModificated = [];
        let mapData = [];
        if (typeData === 'nodejs') mapData = data.nodejs;
        if (typeData === 'typescript') mapData = data.typescript;
        mapData.map((e, index) => {
            if (selectedIndex === index && type === "question") {
                let newDataValue = {
                    ...e,
                    picked: 'showQuestion',
                };
                dataModificated.push(newDataValue);
            } else if (selectedIndex === index && type === 'answer') {
                let newDataValue = {
                    ...e,
                    picked: "getAnswer",
                };
                dataModificated.push(newDataValue);
            } else if (selectedIndex === index && type === 'final') {
                let newDataValue = {
                    ...e,
                    picked: "final",
                };
                dataModificated.push(newDataValue);
            } else {
                let newDataValue = {
                    ...e
                };
                dataModificated.push(newDataValue);
            }
        });
        setNewData(dataModificated);

    };

    return (
        <Content>
            <Header />
            {newData.map((e, index) => {
                if (e.picked === "notPicked") {
                    return (
                        <ClosedCards >
                          <CardClosed 
                          handleSelect={handleSelect}
                          index={index}
                          />
                        </ClosedCards>
                    )
                }
                else if (e.picked === "showQuestion") {
                    return (
                        <CardsOpen >
                          <OpenQuestionCard 
                           question={e.react}
                           index={index}
                           handleSelect={handleSelect}
                          />
                        </CardsOpen>
                    )
                }
                else if (e.picked === "getAnswer") {
                    return (
                        <CardsOpen>
                            <OpenAnswer>
                               <OpenCard 
                                index={index}
                                answer={e.resp}
                                handleSelect={handleSelect}

                               />
                            </OpenAnswer>
                        </CardsOpen>
                    )
                }
                else if (e.picked === "final") {
                    return (
                        <CardsOpen>
                            <h1>oi</h1>

                        </CardsOpen>
                    )
                }

            })}
            <Footer />
        </Content>
    )

}

/* dividir por etapas */