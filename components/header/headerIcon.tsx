import { PiInstagramLogoFill, PiYoutubeLogoFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";

export default function Icon() {
    const links = [
        { icon: FaTelegramPlane, href: "/" },
        { icon: PiInstagramLogoFill, href: "/" },
        { icon: PiYoutubeLogoFill, href: "/" },
    ];
    return (
        <>
            {links.map((link, index) => (
                <Link key={index} href={link.href}>
                    <link.icon />
                </Link>
            ))}
        </>
    );
}