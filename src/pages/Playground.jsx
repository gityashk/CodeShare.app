import { useContext, useEffect, useState } from "react";
import CodeEditor from "../components/CodeEditor";
import Preview from "../components/Preview";
import { CodesContext } from "../contexts/CodesContext";
import ShareLinkDisplay from "../components/ShareLinkDisplay";
import { useNavigate, useParams } from "react-router-dom";
import db from "../appwrite/databases";
import Header from "../components/Header";

export default function Playground() {

    const navigate = useNavigate();

    const { id } = useParams();

    const { codeObj, setCodeObj } = useContext(CodesContext);
    const [activeFile, setActiveFile] = useState("html");

    useEffect(() => {
        init();
    }, []);

    async function init() {
        if (id) {
            const idRegex = /^[a-z0-9]{20}/;
            if (!idRegex.test(id)) {
                navigate("/");
                return;
            }
            const response = await db.share.get(id);
            if (!response) {
                navigate("/");
                return;
            }
            setCodeObj(response);
        }
    }

    return (
        <>
            <div>
                <Header />
            </div>
            <div className="m-5">
                <ShareLinkDisplay />
            </div>
            <div className="playground--container">
                <CodeEditor
                    code={codeObj[activeFile]}
                    setCodeObj={setCodeObj}
                    activeFile={activeFile}
                    setActiveFile={setActiveFile}
                />
                <div className="divider"></div>
                <Preview />
            </div>
        </>
    )
}
