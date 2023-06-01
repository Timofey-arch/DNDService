import ApiInfoContainer from "components/Desktop/ApiInfo/ApiInfoContainer";
import NavPanel from "components/Desktop/MainPage/NavPanel";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function ApiInfo(){
    const router = useRouter();
    const { name, p_class, race, background } = router.query;

    useEffect(
        () => {
          document.title = 'CharacterList';
        }
    );

    return(
        <>
            <NavPanel></NavPanel>
            <div style={{position: 'relative', top: '20vh'}}>
                {p_class}
            </div>
        </>
    );
}