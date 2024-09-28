import IconLink from "./icons/IconLink";
import IconOpen from "./icons/IconOpen";
import IconDownload from "./icons/IconDownload";
import { downloadFile, previewInNewTab } from "../util/util";
import { useNavigate } from "react-router-dom";

export default function Actions({ codeObj }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="section--headers">
                <button onClick={() => navigate("/auth")} className="btn btn-share section--headers-commons">
                    <IconLink />
                    <span>Share</span>
                </button>
                <button onClick={() => previewInNewTab(codeObj)} className="btn-circle" title="Preview in New Tab">
                    <IconOpen />
                </button>
                <button onClick={() => downloadFile(codeObj)} className="btn-circle" title="Download">
                    <IconDownload />
                </button>
            </div>
        </>
    )
}
