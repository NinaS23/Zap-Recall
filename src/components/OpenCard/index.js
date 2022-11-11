import { IconDiv } from "./style"


export default function OpenCard({ question }) {
    return (
        <>
            <div>
                <h2>{question}</h2>
                <IconDiv>
                    <ion-icon name="reload-outline"></ion-icon>
                </IconDiv>
            </div>
        </>
    )
}