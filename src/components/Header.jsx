import IconCode from "./icons/IconCode";
import IconGithub from "./icons/IconGithub";

export default function Header() {
    return (
        <>
            <div className="flex bg-[#5D8AA8] h-10 items-center justify-between px-8">
                <div className="flex items-center gap-2 select-none cursor-pointer">
                    <IconCode />
                    <span className="font-serif text-white font-bold">
                        CodeRender.app
                    </span>
                </div>
                <div>
                    <a href=""><IconGithub /></a>
                </div>
            </div>
        </>
    )
}