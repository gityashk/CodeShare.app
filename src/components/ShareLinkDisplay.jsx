import { useContext, useEffect, useRef } from "react";
import IconCopy from "./icons/IconCopy";
import { CodesContext } from "../contexts/CodesContext";

export default function ShareLinkDisplay() {

    const { link, setLink } = useContext(CodesContext);
    const copyRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            setLink("");
        }, 10000);
    }, []);

    function copyLink() {
        navigator.clipboard.writeText(link);
        copyRef.current.select();
    }

    return (
        <>
            {link ? (
                <div className="share-link-div">
                    <h2 className="share-link-heading">
                        Sharable Link
                    </h2>
                    <div className="flex">
                        <input
                            ref={copyRef}
                            className="share-link-input"
                            type="text"
                            value={link}
                            readOnly />
                        <button
                            onClick={copyLink}
                            className="px-4 bg-slate-200">
                            <IconCopy />
                        </button>
                    </div>
                    <div className="animation-timeout"></div>
                </div>
            ) : null}
        </>
    )
}