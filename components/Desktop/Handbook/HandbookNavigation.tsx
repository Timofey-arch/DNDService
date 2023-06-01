import Link from "next/link";

export default function HandbookNavigation(){
    return(
        <div className="nav_section">
            <Link href={"/handbook"} className="nav_element">Все</Link>
            <Link href={"/handbook/classes"} className="nav_element">Классы</Link>
            <Link href={"/handbook/races"} className="nav_element">Расы</Link>
            <Link href={"/handbook/backgrounds"} className="nav_element">Происхождения</Link>
        </div>
    );
}