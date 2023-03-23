import { use, useState } from "react";
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";
import MainInfoWindow from "./MainInfoWindow";
import StatWindow from "./StatWindow";

export default function CharacterForm(){
    const [currentWindow, setCurrentWindow] = useState(1);

    return(
        <div className="character_form_main_container">
            <form action="/api/create_character" method="POST">
                <MainInfoWindow currentWindowNumber={currentWindow} windowNumber={1}></MainInfoWindow>

                <StatWindow currentWindowNumber={currentWindow} windowNumber={2}></StatWindow>
            </form>

            <ButtonContainer>
                <Button title={"Назад"} 
                    onClick={() => setCurrentWindow(currentWindow > 1 ? currentWindow - 1 : currentWindow)}></Button>
                <Button title={"Вперед"} 
                    onClick={() => setCurrentWindow(currentWindow <= 3 ? currentWindow + 1 : currentWindow)}></Button>
            </ButtonContainer>
        </div>
    );
}