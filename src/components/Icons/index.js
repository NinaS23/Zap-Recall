import error from "../../assets/imgs/error.svg";
import correct from "../../assets/imgs/correct.svg";
import almost from "../../assets/imgs/almost.svg";


export default function Icons({ status, tapCard, index, type, dataAnswer }) {

    if (status === "not_answer" && type === "cardClosed") {
        return <ion-icon className="arrow" name="play-outline" onClick={() => tapCard(index)}></ion-icon>
    } else if (status === "correct") {
        return < img src={correct} alt="correct" />
    } else if (status === "error") {
        return < img src={error} alt="error" />
    } else {
        return < img src={almost} alt="almost" />
    }
}