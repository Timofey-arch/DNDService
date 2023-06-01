import NavPanel from "components/Desktop/MainPage/NavPanel";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import HandbookNavigation from "components/Desktop/Handbook/HandbookNavigation";

export default function Item({ collectionNameList }){
    const router = useRouter();
    const { category } = router.query;
    let component;

    if(category == 'classes'){
        component = <section className="info_section">
                        <h2>Классы</h2>
                        <div className="list_of_items">{collectionNameList.map(
                            (p_class: any) => {
                                return (
                                    <Link 
                                        className="item" href={`/handbook/classes/${p_class.name}?id=${p_class.id}`}
                                    >
                                        <img className={"logo"} src={"http://127.0.0.1:8090/api/files/classes/"+p_class.id+"/" + p_class.field}></img>
                                        {p_class.name}
                                    </Link>
                                )
                            }
                        )}</div>
                    </section>
    }

    if(category == 'races'){
        component = <section className="info_section">
                        <h2>Расы</h2>

                        <div className="list_of_items">{collectionNameList.map(
                        (race: any) => {
                            return (<Link 
                                        className="item" href={`/handbook/races/${race.name}?id=${race.id}`}
                                    >
                                    <img className={"logo"} src={"http://127.0.0.1:8090/api/files/races/"+race.id+"/" + race.field}></img>
                                        {race.name}
                                    </Link>
                            )
                        }
                        )}
                        </div>
                    </section>
    }

    if(category == 'backgrounds'){
        component = <section className="info_section">
                        <h2>Происхождения</h2>

                        <div className="list_of_items">{collectionNameList.map(
                            (background: any) => {
                                return (<Link 
                                            className="item" href={`/handbook/backgrounds/${background.name}?id=${background.id}`}
                                        >
                                        <img className={"logo"} src={"http://127.0.0.1:8090/api/files/backgrounds/"+background.id+"/" + background.field}></img>
                                            {background.name}
                                        </Link>
                                )
                            }
                        )}
                        </div>
                    </section>;
    }

    return(
        <>
            <NavPanel></NavPanel>
            <div className="handbook_main_container">
                <HandbookNavigation></HandbookNavigation>
                {component}
            </div>
        </>
    )
}

export async function getServerSideProps(req, res){
    const collectionNameList = await axios.get(`http://127.0.0.1:8090/api/collections/${req.query.category}/records`);

    return{
        props:{
            collectionNameList: JSON.parse(JSON.stringify(collectionNameList.data.items))
        }
    }
}