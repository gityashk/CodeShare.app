import IconHTML from "./icons/IconHTML";
import IconCSS from "./icons/IconCSS";
import IconJS from "./icons/IconJS";

export default function FileMenu({ activeFile, setActiveFile }) {
    return (
        <>
            <div className="section--headers">
                <button
                    onClick={() => setActiveFile("html")}
                    className="btn section--headers-commons"
                    style={{ backgroundColor: activeFile == "html" ? "#fff" : "" }}
                >
                    <IconHTML />
                    <span>index.html</span>
                </button>
                <button
                    onClick={() => setActiveFile("css")}
                    className="btn section--headers-commons"
                    style={{ backgroundColor: activeFile == "css" ? "#fff" : "" }}
                >
                    <IconCSS />
                    <span>style.css</span>
                </button>
                <button
                    onClick={() => setActiveFile("js")}
                    className="btn section--headers-commons"
                    style={{ backgroundColor: activeFile == "js" ? "#fff" : "" }}
                >
                    <IconJS />
                    <span>script.js</span>
                </button>
            </div>
        </>
    )
}
