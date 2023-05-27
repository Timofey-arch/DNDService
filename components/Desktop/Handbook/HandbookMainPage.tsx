import Logo from '../../../public/images/Logo2.png';
import Image from "next/image";
import Link from "next/link";

export default function HandbookMainPage(props){
    return(
        <div className="handbook_main_container">
            <section className="info_section">
                <h2>Классы</h2>
                <div className="list_of_items">{props.classes.map(
                    (p_class: any) => {
                        return (<Link 
                                    className="item" href={`/handbook/classes/${p_class.name}?id=${p_class.id}`}>
                                    <Image className="logo" alt="Icon" src={Logo}></Image>
                                    {p_class.name}
                                </Link>
                        )
                    }
                )}</div>
            </section>

            <section className="info_section">
                <h2>Расы</h2>

                <div className="list_of_items">{props.races.map(
                    (race: any) => {
                        return (<Link 
                                    className="item" href={`/handbook/races/${race.name}?id=${race.id}`}>
                                    <Image className="logo" alt="Icon" src={Logo}></Image>
                                    {race.name}
                                </Link>
                        )
                    }
                )}</div>
            </section>

            <section className="info_section">
                <h2>Происхождения</h2>

                <div className="list_of_items">{props.backgrounds.map(
                    (background: any) => {
                        return (<Link 
                                    className="item" href={`/handbook/backgrounds/${background.name}?id=${background.id}`}>
                                    <Image className="logo" alt="Icon" src={Logo}></Image>
                                    {background.name}
                                </Link>
                        )
                    }
                )}</div>
            </section>
        </div>
    );
}