import ApiInfoContainer from "components/Desktop/ApiInfo/ApiInfoContainer";
import NavPanel from "components/Desktop/MainPage/NavPanel";
import React, { useEffect } from "react";

export default function ApiInfo(){
    useEffect(
        () => {
          document.title = 'ApiInfo';
        }
    );

    return(
        <>
            <NavPanel></NavPanel>
            <ApiInfoContainer></ApiInfoContainer>
        </>
    );
}