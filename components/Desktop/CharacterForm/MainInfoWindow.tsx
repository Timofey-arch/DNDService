import InputField from "./InputField";
import ComboBox from "./ComboBox";
import Description from "./Description";
import { useState } from "react";

export default function MainInfoWindow(props: any){
    const [race, setRace] = useState("Гном");
    const [playerClass, setPlayerClass] = useState("Бард");

    const races: Array<object> = [
        {name:"Гном", description: "1"}, {name:"Дварф", description: "2"}, 
        {name:"Драконорожденный", description: "3"}, {name:"Полуорк", description: "4"}, 
        {name:"Полурослик", description: "5"}, {name:"Полуэльф", description: "6"}, {name:"Тифлинг", description: "7"}, 
        {name:"Человек", description: "8"}, {name:"Эльф", description: "9"}, 
    ];

    const classes: Array<object>= [
        {name: "Бард", description: "1"},
        {name: "Варвар", description: "2"},
        {name: "Воин", description: "3"},
        {name: "Волшебник", description: "4"},
        {name: "Друид", description: "5"},
        {name: "Жрец", description: "6"},
        {name: "Колдун", description: "7"},
        {name: "Монах", description: "8"},
        {name: "Палладин", description: "9"},
        {name: "Плут", description: "10"},
        {name: "Следопыт", description: "11"},
        {name: "Чародей", description: "12"},
    ];

    return(
        <div className="character_form" 
        style={{display: props.currentWindowNumber == props.windowNumber ? "flex" : "none"}}>

            <h3>Выбрать персонажа</h3>

            <InputField name={"name"} label={"Имя"}></InputField>

            <ComboBox optionList={classes} setFunction={setPlayerClass} label={"Класс"} name={"class"}></ComboBox>
            <Description currentValue={playerClass}></Description>

            <ComboBox optionList={races} setFunction={setRace} label={"Раса"} name={"race"}></ComboBox>
            <Description currentValue={race}></Description>

            <ComboBox optionList={races} setFunction={setRace} label={"Происхождение"} name={"amoma"}></ComboBox>
            <Description currentValue={"Amoma"}></Description>
        </div>
    );
}