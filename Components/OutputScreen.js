import React from 'react'



const OutputScreen = ({answer, question}) => {

   

    return (
        <div className="input">
            <div className="answer">
                <h1>{answer}</h1>
            </div>
            <div className="question">
                <h3>{question}</h3>
            </div>
        </div>
     
    )
}

export default OutputScreen

