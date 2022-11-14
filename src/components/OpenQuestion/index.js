import { OpenQuestion } from "../../pages/Home/style";
import { IconDiv } from "./style";


export default function OpenQuestionCard({question,setFlipped}) {
    return (
        <OpenQuestion>
            <div>
                <h2>{question}</h2>
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