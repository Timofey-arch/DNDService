import NavPanel from "components/Desktop/MainPage/NavPanel";
import React, { useEffect } from "react";
import axios from "axios";
import HandbookMainPage from "components/Desktop/Handbook/HandbookMainPage";
import HandbookNavigation from "components/Desktop/Handbook/HandbookNavigation";

export default function Handbook(props){

    useEffect(
        () => {
          document.title = 'Handbook';
        }
    );

    return(
        <>
            <NavPanel></NavPanel>
            <HandbookMainPage 
                classes={props.classes}
                races={props.races}
                backgrounds={props.backgrounds}
            >
                <HandbookNavigation></HandbookNavigation>
            </HandbookMainPage>
        </>
    );
}

export async function getServerSideProps(){
    let classes = await axios.get('http://127.0.0.1:8090/api/collections/classes/records');
    let races = await axios.get('http://127.0.0.1:8090/api/collections/races/records');
    let backgrounds = await axios.get('http://127.0.0.1:8090/api/collections/backgrounds/records');

    return {
        props: {
            classes: JSON.parse(JSON.stringify(classes.data.items)),
            races: JSON.parse(JSON.stringify(races.data.items)),
            backgrounds: JSON.parse(JSON.stringify(backgrounds.data.items)),
        }
    };
}