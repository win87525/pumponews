import { PiInstagramLogoFill, PiYoutubeLogoFill } from "react-icons/pi";
import { FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { IconType } from 'react-icons';

export default function Icon() {
    interface LinkItem {
        icon: IconType;
        href: string;
    }
    
    const links: LinkItem[] = [
        { icon: FaTelegramPlane, href: "/" },
        { icon: PiInstagramLogoFill, href: "/" },
        { icon: PiYoutubeLogoFill, href: "/" },
    ];
    return (
        <>
            {links.map((link: LinkItem, index: number) => (
                <Link key={index} href={link.href}>
                    <link.icon />
                </Link>
            ))}
        </>
    );
}
