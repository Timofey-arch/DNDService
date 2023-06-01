import MasterInfoContainer from "components/Desktop/MasterInfo/MasterInfoContainer";
import NavPanel from "components/Desktop/MainPage/NavPanel";
import React, { useEffect } from "react";

export default function ApiInfo(){
    useEffect(
        () => {
            document.title = 'MasterInfo';
        }
    );

    return(
        <>
            <NavPanel></NavPanel>
            <MasterInfoContainer></MasterInfoContainer>
        </>
    );
}