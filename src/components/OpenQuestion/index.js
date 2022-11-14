import { OpenQuestion } from "../../pages/Home/style";
import { IconDiv } from "../OpenCard/style";


export default function OpenQuestionCard({question,handleSelect,index}) {
    return (
        <OpenQuestion>
            <div>
                <h2>{question}</h2>
                <IconDiv >
                    <ion-icon
                        name="reload-outline"
                        onClick={() => handleSelect(index, 'answer')}
                    ></ion-icon>
                </IconDiv>
            </div>
        </OpenQuestion>
    )
}