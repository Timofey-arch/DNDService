import {use, useState} from "react";
import Button from "./Button";
import ButtonContainer from "./ButtonContainer";
import CharacterWindow from "./CharacterWindow";
import MainInfoWindow from "./MainInfoWindow";
import StatWindow from "./StatWindow";


export default function CharacterForm(props: any) {
    const [currentWindow, setCurrentWindow] = useState(1);
    let userDataInput = {
        userRace: '',
        userPlayerClass: '',
        userBackground: '',
        races: props.races,
        playerClasses: props.classes,
        backgrounds: props.backgrounds,
        ability: '',
        characteristics: {
            strength: 0,
            physique: 0,
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        },
        startStats: {
            strength: 0,
            physique: 0,
            dexterity: 0,
            intelligence: 0,
            wisdom: 0,
            charisma: 0
        }
    };

    return (
        <div className="character_form_main_container">
            <form action="/character_list">
                <MainInfoWindow
                    currentWindowNumber={currentWindow}
                    windowNumber={1}
                    classes={props.classes}
                    races={props.races}
                    backgrounds={props.backgrounds}
                    userData={userDataInput}
                >
                </MainInfoWindow>

                <StatWindow
                    currentWindowNumber={currentWindow}
                    windowNumber={2}
                    userData={userDataInput}
                    classes={props.classes}>
                </StatWindow>

                <CharacterWindow 
                    userData={userDataInput} 
                    currentWindowNumber={currentWindow}
                    windowNumber={3}>    
                </CharacterWindow>
            </form>

            <ButtonContainer>
                <Button
                    title={"Назад"}
                    onClick={() => setCurrentWindow(currentWindow > 1 ? currentWindow - 1 : currentWindow)}>
                </Button>

                <Button
                    title={"Вперед"}
                    onClick={() => setCurrentWindow(currentWindow <= 3 ? currentWindow + 1 : currentWindow)}>
                </Button>
            </ButtonContainer>
        </div>
    );
}