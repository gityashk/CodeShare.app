import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div className="h-screen w-screen flex items-center justify-center">
                <div className="text-white text-center text-xl">
                    <h1 className="text-9xl font-bold">404</h1>
                    <p className="my-8">Oops: 📃 🫵 are 👀 for ❌ exist ❕❕</p>
                    <Link to={"/"} className="font-bold text-blue-500">Home</Link>
                </div>
            </div>
        </>
    )
}