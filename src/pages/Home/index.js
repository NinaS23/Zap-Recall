import { useState } from "react";
import CardClosed from "../../components/ClosedCard";
import OpenQuestionCard from "../../components/OpenQuestion";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import OpenCard from "../../components/OpenCard";
import data from "../../data/test";
import { Content, ClosedCards, OpenAnswer, CardsOpen } from "./style";
import FlashCards from "../../components/FlashCards";


export default function Home({ newType }) {
    let typeData = newType.toLowerCase();
    let usedData = [];
    if (typeData === 'nodejs') usedData = data.nodejs;
    if (typeData === 'typescript') usedData = data.typescript;
    const [newData, setNewData] = useState(usedData);

    let dataSelectedByUser = newData.map(value => {
        return {
            ...value,
            tap: false,
            status: 'not_answer'
        }
    })
    dataSelectedByUser = dataSelectedByUser.sort(() => Math.random() - 0.5)
   
    const [dataNew, setdataNew] = useState(dataSelectedByUser);
    const [answer, setAnswer] = useState(0);
    const [dataAnswer, setdataAnswer] = useState([]);

    
    function tapCard (cardIndex) {
        let changeValueData = dataNew.map((value, index) => {
            if (index === cardIndex) {
                return {
                    ...value,
                    tap: true,
                }
            } else {
                return {
                    ...value,
                    tap: false,
                }
            }
        })

        setdataNew([...changeValueData]);
    }

    function zap (cardIndex, status) {
        let changeValueData = dataNew.map((value, index) => {
            if (index === cardIndex) {
                return {
                    ...value,
                    tap: false,
                    status: status,
                }
            } else {
                return {
                    ...value,
                    tap: false,
                }
            }
        })

        setdataNew([...changeValueData]);
        setAnswer(answer + 1);
       
        setdataAnswer([...dataAnswer, status])
    }

    return (
        <Content>
            <Header />
                { dataNew.map((e, index) => (    
                    <FlashCards 
                        key={index}
                        tap={e.tap}
                        index={index}
                        status={e.status}
                        tapCard={tapCard}
                        question={e.react}
                        answer={e.resp}
                        zap={zap}
                        />
                ))}
            <Footer />
        </Content>
    )

}

/* dividir por etapas */