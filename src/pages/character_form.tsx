import CharacterForm from "components/Desktop/CharacterForm/CharacterForm";
import NavPanel from "components/Desktop/MainPage/NavPanel";
import React, { useEffect } from "react";
import PocketBase from "pocketbase";

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
    const pb = new PocketBase(' http://127.0.0.1:8090');
    await pb.admins.authWithPassword('timofejbakurov@gmail.com', 'aboba12345');
    //await pb.admins.authWithPassword('s.laptev2017@yandex.ru', 'aboba12345')

    const classes = await pb.collection('classes').getList(1, 50, {
        sort: 'created',
    });

    const races = await pb.collection('races').getList(1, 50, {
        sort: 'created',
    });

    const backgrounds = await pb.collection('backgrounds').getList(1, 50, {
        sort: 'created',
    });


    return{
        props: {
            classes: JSON.parse(JSON.stringify(classes)),
            races: JSON.parse(JSON.stringify(races)),
            backgrounds: JSON.parse(JSON.stringify(backgrounds)),
        }
    };
}