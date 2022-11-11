import CardClosed from "../../components/ClosedCard";
import Header from "../../components/Header";
import data from "../../data/test";
import { Content, ClosedCards} from "./style";

export default function Home() {
    return (
        <Content>
           <Header />
           <ClosedCards>
           {data.map((perg, index) => {
                return (
                    <CardClosed
                        index={index}
                   />
                )
            })} 
           </ClosedCards>
        </Content>
    )
}