
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Footer (){
    return (
        <div className="">
            <div className="bg-white flex flex-row sm:flex-row justify-center h-14 min-w-full items-center gap-4 p-2 sm:p-0">
                <a href="mailto:larebnoor4@gmail.com"> <MdEmail className="size-7 text-red-700 text-xl sm:text-2xl"/> </a>
                <a href="https://www.facebook.com/NOor591" target="_blank" rel="noopener noreferrer"> <FaFacebook className="size-7 text-blue-700 text-xl sm:text-2xl" /> </a>
                <a href="https://www.instagram.com/annonymouss_____?igsh=YXFuNXpuaDdxM2Y%3D&utm_source=qr " target="_blank" rel="noopener noreferrer"> <FaInstagram className="size-7 text-pink-700 text-xl sm:text-2xl"/>  </a>
                <a href="https://www.linkedin.com/in/lareb-noor-9778a92b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer"> <FaLinkedin className="size-7 text-blue-700 text-xl sm:text-2xl"/> </a>
            </div>
            <p className="text-black flex justify-center font-semibold text-center text-sm sm:text-base p-2 sm:p-0"> 
                Copyright <FaRegCopyright className="ml-1 mr-1 mt-1" /> 2024 designed By Lareb Noor 
            </p>
        </div>
    )
}
