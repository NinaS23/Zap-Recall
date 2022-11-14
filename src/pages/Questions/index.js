import { useState } from 'react';
import data from '../../data/index';
import FlashCard from '../flashcard/FlashCard';
import Footer from '../footer/Footer';
import Header from '../../components/Header';


let questionsData = data.map(value => {
    return {
        ...value,
        tap: false,
        status: 'not_answer'
    }
})
questionsData = questionsData.sort(() => Math.random() - 0.5)

export default function Questions () {
    const [questions, setQuestions] = useState(questionsData);
    const [answer, setAnswer] = useState(0);
    const [newData, setnewData] = useState([]);

    function tapCard (cardIndex) {
        let newQuestions = questions.map((value, index) => {
            if (index === cardIndex) {
                return {
                    ...value,
                    tap: true,
                }
            } else {
                return {
                    ...value,
                    tap: false,
                }
            }
        })

        setQuestions([...newQuestions]);
    }

    function zap (cardIndex, status) {
        let newQuestions = questions.map((value, index) => {
            if (index === cardIndex) {
                return {
                    ...value,
                    tap: false,
                    status: status,
                }
            } else {
                return {
                    ...value,
                    tap: false,
                }
            }
        })

        setQuestions([...newQuestions]);
        setAnswer(answer + 1);
        setnewData([...newData, status])
    }


    return (
        <>
        <Header />
            <div>
                { questions.map((e, index) => (
                    <FlashCard 
                        key={index}
                        tap={e.tap}
                        index={index}
                        tapCard={tapCard}
                        question={e.react}
                        answer={e.resp}
                        status={e.status}
                        zap={zap}
                        />
                ))}
            </div>
          <Footer />
        </>
    )
}