import CharacterForm from "components/Desktop/CharacterForm/CharacterForm";
import NavPanel from "components/Desktop/MainPage/NavPanel";
import React, { useEffect } from "react";
import axios from "axios";

export default function CharacterList({ classes, races, backgrounds }){

    useEffect(
        () => {
          document.title = 'List';
        }
    );

    return(
        <>
            <NavPanel></NavPanel>
            <CharacterForm races={races} classes={classes} backgrounds = {backgrounds}></CharacterForm>
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