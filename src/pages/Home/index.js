import CardClosed from "../../components/ClosedCard";
import Header from "../../components/Header";
import { Content, ClosedCards} from "./style";

export default function Home() {
    return (
        <Content>
           <Header />
           <ClosedCards>
             <CardClosed />
             <CardClosed />
           </ClosedCards>
        </Content>
    )
}