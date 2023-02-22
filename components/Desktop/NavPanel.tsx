import Image from "next/image";
import Link from "next/link";
import Logo from '../../public/images/Logo.png';

export default function NavPanel(props: any){
    return(
        <nav className="nav_panel">
            <ul> 
                <Link className="logo_container" href='/'>
                    <Image className="logo" alt="Logo" src={Logo}></Image>
                    <div className="name">Tavern</div>
                </Link>

                <Link href='/' className="nav_button">
                    Для мастера
                    <div className="submenu" style={{ "left" : "-7vw", "top": "10vh"}}>
                        {/* <Link href="/" className="submenu_button">Aboba1</Link>
                        <Link href="/" className="submenu_button">Aboba2</Link>
                        <Link href="/" className="submenu_button">Aboba3</Link>
                        <Link href="/" className="submenu_button">Aboba4</Link> */}
                    </div>

                    <div className="pointer"></div>
                </Link>
                
                <Link href='/' className="nav_button">
                    Для игрока

                    <div className="submenu" style={{ "left" : "-17vw", "top": "10vh"}}>
                        {/* <Link href="/" className="submenu_button">Aboba1</Link>
                        <Link href="/" className="submenu_button">Aboba2</Link>
                        <Link href="/" className="submenu_button">Aboba3</Link>
                        <Link href="/" className="submenu_button">Aboba4</Link> */}
                    </div>

                    <div className="pointer"></div>
                </Link>

                <Link href='/' className="nav_button">
                    Справочник

                    <div className="submenu" style={{ "left" : "-27vw", "top": "10vh"}}>
                        {/* <Link href="/" className="submenu_button">Aboba1</Link>
                        <Link href="/" className="submenu_button">Aboba2</Link>
                        <Link href="/" className="submenu_button">Aboba3</Link>
                        <Link href="/" className="submenu_button">Aboba4</Link> */}
                    </div>

                    <div className="pointer"></div>
                </Link>
            </ul>
        </nav>
    );
}