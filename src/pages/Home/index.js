import { useState } from "react";
import CardClosed from "../../components/ClosedCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import data from "../../data/test";
import { Content, ClosedCards } from "./style";

export default function Home({ newType }) {
    let typeData = newType.toLowerCase()
    let usedData = [];
    if (typeData === 'nodejs') usedData = data.nodejs;
    if (typeData === 'typescript') usedData = data.typescript
    const [newData, setNewData] = useState(usedData);


    const handleSelect = (selectedIndex) => {
        let dataModificated = [];
        let mapData = [];
        if (typeData === 'nodejs') mapData = data.nodejs;
        if (typeData === 'typescript') mapData = data.typescript;
        console.log(`you have clicked at element with question number: ${selectedIndex + 1}`)
        mapData.map((e, index) => {
            if (selectedIndex === index) {
                let newDataValue = {
                    ...e,
                    picked: true,
                };
                console.log(newDataValue)
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
                            <h1>oi</h1>
                        }
                    </ClosedCards>
                )
            })}
            <Footer />
        </Content>
    )
}