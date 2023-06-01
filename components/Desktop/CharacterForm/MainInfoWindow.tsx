import InputField from "./InputField";
import ComboBox from "./ComboBox";
import Description from "./Description";
import { useState } from "react";
import {element} from "prop-types";

export default function MainInfoWindow(props: any){
    const [race, setRace] = useState(props.races[0].name);
    const [raceDescription, setRaceDescription] = useState(props.races[0].description);
    const [playerClass, setPlayerClass] = useState(props.classes[0].name);
    const [classDescription, setClassDescription] = useState(props.classes[0].description);
    const [background, setBackgrounds] = useState(props.backgrounds[0].name);
    const [backDescription, setBackDescription] = useState(props.backgrounds[0].description);
    props.userData.userPlayerClass = playerClass;
    props.userData.userRace = race;
    props.userData.userBackground = background;
    props.userData.characteristics = props.userData.races.find((elem: any) => elem.name == race).statsToIncrease;
    props.userData.startStats = structuredClone(props.userData.races.find((elem: any) => elem.name == race).statsToIncrease);

    return(
        <div className="character_form" 
            style={{display: props.currentWindowNumber == props.windowNumber ? "flex" : "none"}}>

            <h3>Выбрать персонажа</h3>

            <InputField name={"name"} label={"Имя"}></InputField>

            <ComboBox 
                optionList={props.classes} 
                setName={setPlayerClass} 
                setDescription={setClassDescription}
                label={"Класс"} 
                name={"class"}> 
            </ComboBox>
            <Description 
                currentValue={playerClass} 
                description={classDescription}>
            </Description>

            <ComboBox 
                optionList={props.races} 
                setName={setRace} 
                setDescription={setRaceDescription}
                label={"Раса"} 
                name={"race"}>
            </ComboBox>
            <Description 
                currentValue={race} 
                description={raceDescription}>
            </Description>

            <ComboBox 
                optionList={props.backgrounds} 
                setName={setBackgrounds} 
                setDescription={setBackDescription}
                label={"Происхождение"} 
                name={"background"}>
            </ComboBox>
            <Description 
                currentValue={background} 
                description={backDescription}>
            </Description>
        </div>
    );
}