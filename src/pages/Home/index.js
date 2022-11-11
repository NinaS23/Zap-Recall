import { useState } from "react";
import CardClosed from "../../components/ClosedCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import data from "../../data/test";
import { Content, ClosedCards } from "./style";

export default function Home() {
    const [ newData , setNewData] = useState(data)
    const handleSelect = (selectedIndex) => {
        let dataModificated = [];
        console.log(`you have clicked at element with question number: ${selectedIndex + 1}`)
        data.map ((e,index) => {
            if(selectedIndex === index) {
             console.log(e)
             let newDataValue = {
                 ...e, 
                 picked: true
             };
             dataModificated.push(newDataValue)
            }else{
                let newDataValue = {
                    ...e
                }
                dataModificated.push(newDataValue);
            }
        })
        setNewData(dataModificated);
      };
console.log(newData);
    return (
        <Content>
            <Header />           
                {newData.map((perg, index) => {
                    return (
                        <ClosedCards onClick={() => handleSelect(index)}>
                            <CardClosed
                                index={index}
                            />
                        </ClosedCards>
                    )
                })}
               <Footer />
        </Content>
    )
}