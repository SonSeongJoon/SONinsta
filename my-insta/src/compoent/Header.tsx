'use client';

import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
import {HomeIcon, HomeFillIcon, SearchFillIcon, SearchIcon, NewFillIcon, NewIcon} from "./ui/icons";
import {usePathname} from "next/navigation";
import ColorButton from "@/compoent/ui/ColorButton";

const menu = [
    {
        href: '/',
        icon: <HomeIcon/>,
        clickedIcon: <HomeFillIcon/>
    },
    {
        href: '/search',
        icon: <SearchIcon/>,
        clickedIcon: <SearchFillIcon/>
    },
    {
        href: '/new',
        icon: <NewIcon/>,
        clickedIcon: <NewFillIcon/>
    }
]
export default function Header() {
    const pathName = usePathname();
    const { data: session } = useSession()
    return (
        <header className='flex justify-between items-center px-6'>
            <Link href='/'>
                <h1 className='font-bold text-3xl'>Instagram</h1>
            </Link>
            <nav>
                <ul className='flex items-center gap-4 p-4'>
                    {menu.map((item) => (
                        <li key={item.href}>
                            <Link href={item.href}>
                                {pathName === item.href ? item.clickedIcon : item.icon}
                            </Link>
                        </li>
                    ))}
                    {session ? (<ColorButton text='Sign out' onClick={()=> signOut()}/>
                            ) : (
                                <ColorButton text='Sign in' onClick={()=> signIn()}/>
                            )}
                </ul>
            </nav>
        </header>
    )
}