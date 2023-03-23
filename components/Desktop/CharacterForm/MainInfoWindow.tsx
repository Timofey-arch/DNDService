import InputField from "./InputField";
import ComboBox from "./ComboBox";
import Description from "./Description";
import { useState } from "react";

export default function MainInfoWindow(props: any){
    const [race, setRace] = useState("Гном");
    const [raceDescription, setRaceDescription] = useState(props.races.items[0].description);
    const [playerClass, setPlayerClass] = useState("Волшебник");
    const [classDescription, setClassDescription] = useState(props.classes.items[0].description);

    const races: Array<object> = [
        {name:"Гном", description: "1"}, {name:"Дварф", description: "2"}, 
        {name:"Драконорожденный", description: "3"}, {name:"Полуорк", description: "4"}, 
        {name:"Полурослик", description: "5"}, {name:"Полуэльф", description: "6"}, {name:"Тифлинг", description: "7"}, 
        {name:"Человек", description: "8"}, {name:"Эльф", description: "9"}, 
    ];

    return(
        <div className="character_form" 
        style={{display: props.currentWindowNumber == props.windowNumber ? "flex" : "none"}}>

            <h3>Выбрать персонажа</h3>

            <InputField name={"name"} label={"Имя"}></InputField>

            <ComboBox optionList={props.classes.items} setName={setPlayerClass} setDescription={setClassDescription}
                label={"Класс"} name={"class"}></ComboBox>
            <Description currentValue={playerClass} description={classDescription}></Description>

            <ComboBox optionList={props.races.items} setName={setRace} setDescription={setRaceDescription}
                label={"Раса"} name={"race"}></ComboBox>
            <Description currentValue={race} description={raceDescription}></Description>

            <ComboBox optionList={races} setFunction={setRace} label={"Происхождение"} name={"amoma"}></ComboBox>
            <Description currentValue={"Amoma"}></Description>
        </div>
    );
}