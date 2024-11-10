
import Link from "next/link";

export default function Header() {
    return (
        <div className="container h-full min-w-full text-gray-800 px-4 md:px-8">
            <div className="flex justify-between items-center h-16">
                <div className="text-black font-mono text-[30px] md:text-[40px]">
                    
                </div>
                <ul className="flex gap-4 md:gap-20 mr-4 md:mr-16">
                    <li className="font-semibold hover:scale-110 hover:text-[#4C8C89]">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="font-semibold hover:scale-110 hover:text-[#4C8C89]">
                        <Link href="/About">About</Link>
                    </li>
                    <li className="font-semibold hover:scale-110 hover:text-[#4C8C89]">
                        <Link href="/Skills">Skills</Link>
                    </li>
                    <li className="bg-[#002147] w-20 md:w-28 text-center text-white rounded hover:scale-110 font-mono">
                        <Link href="/Contactus">Contact us</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

