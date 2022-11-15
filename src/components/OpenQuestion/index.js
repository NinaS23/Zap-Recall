import { OpenQuestion } from "../../pages/Home/style";
import { IconDiv, Question } from "./style";


export default function OpenQuestionCard({question,setFlipped}) {
    return (
        <OpenQuestion>
            <div>
                <Question>{question}</Question>
                <IconDiv >
                    <ion-icon
                        name="reload-outline"
                        onClick={() => setFlipped(true)}
                    ></ion-icon>
                </IconDiv>
            </div>
        </OpenQuestion>
    )
}