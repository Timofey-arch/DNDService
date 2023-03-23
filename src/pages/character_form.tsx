import CharacterForm from "components/Desktop/CharacterForm/CharacterForm";
import NavPanel from "components/Desktop/MainPage/NavPanel";
import React, { useEffect } from "react";
import PocketBase from "pocketbase";

export default function CharacterList({ classes, races }){

    useEffect(
        () => {
          document.title = 'List';
        }
    );

    return(
        <>
            <NavPanel></NavPanel>
            <CharacterForm races={races} classes={classes}></CharacterForm>
        </>
    );
}


export async function getServerSideProps(){
    const pb = new PocketBase(process.env.DATABASE_URL);
    await pb.admins.authWithPassword('timofejbakurov@gmail.com', 'aboba12345');

    const classes = await pb.collection('classes').getList(1, 50, {
        sort: 'created',
    });

    const races = await pb.collection('races').getList(1, 50, {
        sort: 'created',
    });

    return{
        props: {
            classes: JSON.parse(JSON.stringify(classes)),
            races: JSON.parse(JSON.stringify(races)),
        }
    };
}