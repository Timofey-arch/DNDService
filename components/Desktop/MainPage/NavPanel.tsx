import Image from "next/image";
import Link from "next/link";
import Logo from '../../../public/images/Logo2.png';

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
                    <div className="submenu" 
                        style={{ "left" : "calc(-5vw - 2.4vw)", "top": "10vh"}}>
                    </div>

                    <div className="pointer"></div>
                </Link>

                <Link href='/' className="nav_button">
                    Для игрока

                    <div className="submenu" 
                        style={{ "left" : "calc(-5vw - 2.4vw - 10vw)", "top": "10vh"}}>
                    </div>

                    <div className="pointer"></div>
                </Link>

                <Link href='/' className="nav_button">
                    Справочник

                    <div className="submenu" 
                        style={{ "left" : "calc(-5vw - 2.4vw - 20vw)", "top": "10vh"}}>
                    </div>

                    <div className="pointer"></div>
                </Link>
            </ul>
        </nav>
    );
}