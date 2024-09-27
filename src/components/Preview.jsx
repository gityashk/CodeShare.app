import { useEffect, useState } from "react"
import IconHome from "./icons/IconHome";
import Actions from "./Actions";

export default function Preview({ codeObj }) {

    const [doc, setDoc] = useState("");

    useEffect(() => {
        const newDoc = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Code Render</title>
                <style>
                    ${codeObj.css}
                </style>
            </head>
            <body>
                ${codeObj.html}
                <script>
                    ${codeObj.js}
                </script>
            </body>
            </html>
        `
        setDoc(newDoc)
    }, [codeObj])

    return (
        <>
            <div className="main--container">
                <div className="section--headers">
                    <Actions codeObj={codeObj} />
                </div>
                <div className="container--codemirror-iframe">
                    <iframe
                        className="iframe-tag"
                        srcDoc={doc}
                    />
                </div>
            </div>
        </>
    )
}
