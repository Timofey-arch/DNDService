import CharacterForm from "components/Desktop/CharacterForm/CharacterForm";
import NavPanel from "components/Desktop/MainPage/NavPanel";
import React, { useEffect } from "react";

export default function CharacterList(props: any){

    useEffect(
        () => {
          document.title = 'List';
        }
    );

    return(
        <>
            <NavPanel></NavPanel>
            <CharacterForm></CharacterForm>
        </>
    );
}