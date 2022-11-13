import { useState } from "react";
import CardClosed from "../../components/ClosedCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OpenCard from "../../components/OpenCard";
import { IconDiv } from "../../components/OpenCard/style";
import data from "../../data/test";
import { Content, ClosedCards, OpenQuestion, OpenAnswer, CardsOpen, } from "./style";

export default function Home({ newType }) {
    let typeData = newType.toLowerCase();
    let usedData = [];
    if (typeData === 'nodejs') usedData = data.nodejs;
    if (typeData === 'typescript') usedData = data.typescript;
    const [newData, setNewData] = useState(usedData);
    const [card, setCard] = useState(null);

    const handleSelect = (selectedIndex, type) => {
        let dataModificated = [];
        let mapData = [];
        if (typeData === 'nodejs') mapData = data.nodejs;
        if (typeData === 'typescript') mapData = data.typescript;
        mapData.map((e, index) => {
            if (selectedIndex === index && type === "question") {
                setCard(selectedIndex);
                let newDataValue = {
                    ...e,
                    picked: 'showQuestion',
                };
                dataModificated.push(newDataValue);
            } else if (selectedIndex !== index && type === "question") {
                let newDataValue = {
                    ...e
                };
                dataModificated.push(newDataValue);
            } else if (selectedIndex === index && type === 'answer') {
                let newDataValue = {
                    ...e,
                    picked: "getAnswer",
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
                        <ClosedCards onClick={() => handleSelect(index, "question")}>
                            <CardClosed
                                index={index}
                            />
                        </ClosedCards>
                    )
                }
                else if (e.picked === "showQuestion") {
                    return (
                        <CardsOpen onClick={() => handleSelect(index, 'answer')}>
                            <OpenQuestion>
                                <div>
                                    <h2>{e.react}</h2>
                                    <IconDiv >
                                        <ion-icon name="reload-outline"></ion-icon>
                                    </IconDiv>
                                </div>
                            </OpenQuestion>
                        </CardsOpen>
                    )
                }
                else if (e.picked === "getAnswer") {
                    return (
                        <CardsOpen onClick={() => handleSelect(index, 'final')}>
                            <OpenAnswer>
                                <OpenCard word={e.resp} picked={true} card={card} index={index} />
                            </OpenAnswer>
                        </CardsOpen>
                    )
                }

            })}
            <Footer />
        </Content>
    )

}