import { useContext, useEffect, useState } from "react";
import Actions from "./Actions";
import { CodesContext } from "../contexts/CodesContext";

export default function Preview() {

    const { codeObj } = useContext(CodesContext);
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
        `;
        setDoc(newDoc);
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
