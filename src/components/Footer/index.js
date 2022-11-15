import { FooterDiv } from "./style";
import Icons from "../Icons";
export default function Footer({ answer, dataAnswer, }) {

    return (
        <FooterDiv>
            {answer}/7 CONCLUÍDOS
            <div>
              { dataAnswer.map((e) =>{
                    if( e === "correct" ){
                        return <Icons status={"correct"}/>
                    } else if (e === "error"){
                        return <Icons status={"error"}/>
                    } else {
                        return <Icons status={"almost"}/>
                    } 
              })}
            </div>
        </FooterDiv>
    )
}