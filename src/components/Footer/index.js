import { FooterDiv } from "./style";
import Icons from "../Icons";
import { useContext } from "react";
import MetaContext from "../../context/metaContext";

export default function Footer({ answer, dataAnswer, }) {
    const { metaPoint } = useContext(MetaContext);
    function showResult() {
        let sum = 0;
        for (let i = 0; i < dataAnswer.length; i++) {
            const status = dataAnswer[i]
            if (status === "correct" || status === "almost") sum = sum + 1
        }
        if (sum === metaPoint || sum > metaPoint){ 
            return true
        } else {
             return false
        }

    }
    console.log(showResult())

    if (answer !== 7) {
        return (
            <FooterDiv>
                {answer}/7 CONCLUÍDOS
                <div>
                    {dataAnswer.map((e) => {
                        if (e === "correct") {
                            return <Icons status={"correct"} />
                        } else if (e === "error") {
                            return <Icons status={"error"} />
                        } else {
                            return <Icons status={"almost"} />
                        }
                    })}
                </div>
            </FooterDiv>
        )
    }
    if (answer === 7) {
        return (
            <FooterDiv>
                {showResult() === true ?
                    <h1>oi</h1>
                    :
                    <h1>tchau</h1>
                }
            </FooterDiv>
        )
    }
}