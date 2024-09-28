import { createContext, useState } from "react";
import sample from "../assets/sample.json";

export const CodesContext = createContext();

function CodesProvider({ children }) {

    const [codeObj, setCodeObj] = useState({ html: sample.html, css: sample.css, js: sample.js });
    const [link, setLink] = useState("");

    const contextData = { codeObj, setCodeObj, link, setLink }
    return (
        <CodesContext.Provider value={contextData}>
            {children}
        </CodesContext.Provider>
    )
}

export default CodesProvider;