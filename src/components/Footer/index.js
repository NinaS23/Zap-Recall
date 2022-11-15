import { FooterDiv, FooterDivResult, FlexDiv, RestartButton } from "./style";
import Icons from "../Icons";
import { useContext } from "react";
import party from "../../assets/imgs/party.png";
import sad from "../../assets/imgs/sad.png";
import MetaContext from "../../context/metaContext";
import { useNavigate } from "react-router-dom";

export default function Footer({ answer, dataAnswer, }) {
    const { metaPoint } = useContext(MetaContext);
    const navigate = useNavigate();
    if(metaPoint === null) navigate("/")

    function showResult() {
        let sum = 0;
        for (let i = 0; i < dataAnswer.length; i++) {
            const status = dataAnswer[i]
            if (status === "correct" || status === "almost") sum = sum + 1
        }
        if (sum === metaPoint || sum > metaPoint) {
            return true
        } else {
            return false
        }

    }

    if (answer !== 7) {
        return (
            <FooterDiv >
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
            <>
                {showResult() === true ?
                    <>
                        <FooterDivResult>
                            <FlexDiv>
                                <img src={party} alt="party emoji" />
                                <p>Parabéns!</p>
                            </FlexDiv>
                            <h2>Você conseguiu bater sua meta!!</h2>
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
                            <RestartButton onClick={() => navigate("/")}>Reiniciar</RestartButton>
                        </FooterDivResult>
                    </>
                    :
                    <FooterDivResult>
                    <FlexDiv>
                        <img src={sad} alt="sad emoji" />
                        <p>Putz...</p>
                    </FlexDiv>
                    <h2>Ainda faltam alguns... Mas não desanime!</h2>
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
                    <RestartButton onClick={() => navigate("/")}>Reiniciar</RestartButton>
                </FooterDivResult>
                }
            </>
        )
    }
}