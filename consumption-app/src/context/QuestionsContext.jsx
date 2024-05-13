import React, { createContext, useState } from "react";

export const QuestionsContext = createContext({});

function QuestionsProvider({children}) {
    const [data, setData] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',
        question7: '',
        question8: '',
        question9: '',
        question10: ''
    })

    return (
        <QuestionsContext.Provider value={{data,setData}}>
            {children}
        </QuestionsContext.Provider>
    )
}

export default QuestionsProvider;