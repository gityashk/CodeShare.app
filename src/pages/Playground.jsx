import { useEffect, useState } from "react"
import sample from "../assets/sample.json"
import CodeEditor from "../components/CodeEditor"
import Preview from "../components/Preview"

export default function Playground() {

    const [codeObj, setCodeObj] = useState({ html: "", css: "", js: "" })
    const [activeFile, setActiveFile] = useState("html")

    useEffect(() => {
        setCodeObj({ html: sample.html, css: sample.css, js: sample.js })
    }, [])

    return (
        <>
            <div className="playground--container">
                <CodeEditor
                    code={codeObj[activeFile]}
                    setCodeObj={setCodeObj}
                    activeFile={activeFile}
                    setActiveFile={setActiveFile}
                />
                <div className="divider"></div>
                <Preview codeObj={codeObj} />
            </div>
        </>
    )
}
