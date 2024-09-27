import { css } from "@codemirror/lang-css";
import { html } from "@codemirror/lang-html";
import { javascript } from "@codemirror/lang-javascript";
import ReactCodeMirror from "@uiw/react-codemirror";
// import readOnlyRangesExtension from "codemirror-readonly-ranges";
import FileMenu from "./FileMenu";


export default function CodeEditor({ code, setCodeObj, activeFile, setActiveFile }) {
    const extensions = {
        html: [html()],
        css: [css()],
        js: [javascript()]
    }

    return (
        <>
            <div className="main--container">
                <FileMenu activeFile={activeFile} setActiveFile={setActiveFile} />
                <div className="container--codemirror-iframe">
                    <ReactCodeMirror
                        value={code}
                        onChange={(value) => setCodeObj((prev) => ({ ...prev, [activeFile]: value }))}
                        theme="dark"
                        extensions={extensions[activeFile]}
                        height="80vh"
                        autoFocus
                        basicSetup={{
                            lineNumbers: true,
                            foldGutter: false,
                            highlightActiveLineGutter: false,
                            highlightSelectionMatches: true,
                            closeBrackets: true,
                            keyMap: "sublime",
                            tabSize: 4,
                        }}
                        style={{
                            border: "1px solid #000"
                        }}
                    />
                </div>
            </div>
        </>
    )
}
