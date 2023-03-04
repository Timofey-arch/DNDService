import { useState } from "react";
import ComboBox from "./ComboBox";
import Description from "./Description";
import InputField from "./InputField";
import Stat from "./Stat";

export default function CharacterForm(props: any){
    const [race, setRace] = useState("Гном");
    const [playerClass, setPlayerClass] = useState("Бард");
    const [manualFieldVisibility, setManualFieldVisibility] = useState("none");
    const [randomFieldVisibility, setRandomFieldVisibility] = useState("none");
    const [pointCount, setPoinCount] = useState(30);

    const races: Array<object> = [
        {name:"Гном", description: "1"}, {name:"Дварф", description: "2"}, 
        {name:"Драконорожденный", description: "3"}, {name:"Полуорк", description: "4"}, 
        {name:"Полурослик", description: "5"}, {name:"Полуэльф", description: "6"}, {name:"Тифлинг", description: "7"}, 
        {name:"Человек", description: "8"}, {name:"Эльф", description: "9"}, 
    ];

    const statsNames: Array<String> = ["Сила", "Ловкость", "Выносливость", "Интеллект", "Мудрость", "Харизма"];

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

    function setManualFieldState(event: React.MouseEvent<HTMLElement>){
        event.preventDefault();
        setManualFieldVisibility(manualFieldVisibility == "none" ? "flex" : "none");
    }

    function setRandomFieldState(event: React.MouseEvent<HTMLElement>){
        event.preventDefault();
        setRandomFieldVisibility(randomFieldVisibility == "none" ? "flex" : "none");
    }

    return(
        <form className="character_form">
            <h2>Создать персонажа</h2>

            <InputField name={"name"} label={"Имя"}></InputField>
            
            <ComboBox optionList={classes} setClass={setPlayerClass} label={"Класс"} name={"class"}></ComboBox>
            <Description currentValue={playerClass}></Description>

            <ComboBox optionList={races} setClass={setRace} label={"Раса"} name={"race"}></ComboBox>
            <Description currentValue={race}></Description>

            <ComboBox optionList={races} setClass={setRace} label={"Происхождение"} name={"amoma"}></ComboBox>
            <Description currentValue={"Amoma"}></Description>

            <h3>Выберите способ распределения навыков</h3>

            
            {/* Вынести в отдельный компонент со своим состоянием "открытости", убрать хуки из формы соответственно */}
            <button className="open_field_button" onClick={setManualFieldState}>Вручную - {pointCount}</button>
            <section className="stats_field" style={{display: manualFieldVisibility}}>
                {statsNames.map((statName) => {
                    return <Stat statName={statName} pointCount={pointCount} setPointCount={setPoinCount}></Stat>
                })}
            </section>

            <button className="open_field_button" onClick={setRandomFieldState}>Рандомно</button>
            
            <h3>Снаряжение</h3>
            <section className="equipment_field">
                Здесь будет выбор снаряжения
            </section>

        </form>
    );
}