import Image from "next/image";

export default function Login() {
    return (
    <main className="bg-gray-950 h-screen flex items-center justify-center">
        <div>
            <h1 className="text-4xl font-bold text-white">Login</h1>
            <form className="mt-4">
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    </main>
    );
}