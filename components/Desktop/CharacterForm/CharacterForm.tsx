import { useState } from "react";
import Stat from "./Stat";

export default function CharacterForm(props: any){
    const[race, setRace] = useState("Гном");
    const[playerClass, setPlayerClass] = useState("Бард");

    const races = [
        {name:"Гном", description: "1"}, {name:"Дварф", description: "2"}, 
        {name:"Драконорожденный", description: "3"}, {name:"Полуорк", description: "4"}, 
        {name:"Полурослик", description: "5"}, {name:"Полуэльф", description: "6"}, {name:"Тифлинг", description: "7"}, 
        {name:"Человек", description: "8"}, {name:"Эльф", description: "9"}, 
    ];
    
    const classes = [
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
        <form className="character_form">
            <h2>Создать персонажа</h2>

            {/* Вынести в компоненты диалоговые элементы по типу списков, полей ввода текста и т.д.*/}
            <section className="form_field">
                <label htmlFor="name">Имя</label>
                <input type={"text"} name="name"></input>
            </section>

            
            <section className="form_field">
                <label htmlFor="class">Класс</label>

                <select name="class" onChange={event => (setPlayerClass(event.target.value))}>
                    {classes.map((pclass) => {
                        return <option value={pclass.name}>{pclass.name}</option>
                    })}
                </select>
            </section>
            <div className="description">
                <div>{playerClass}</div>
                <div>Это описание класса. Здесь будет всякая фигня, которая кратко описывает класс, его фишки и стартовый набор</div>
            </div>
            
            <section className="form_field">
                <label htmlFor="race">Раса</label>
                
                <select name="race" onChange={event => setRace(event.target.value)}>
                    {races.map((race) => {
                        return <option value={race.name}>{race.name}</option>
                    })}
                </select>
            </section>
            <div className="description">
                <div>{race}</div>
                <div>Это описание расы. Здесь так же будет краткая информация и преимущества расы.</div>
            </div>

            <h3>Выберите стартовые параметры</h3>
            <section className="stats_field">
                <Stat stat_name={"Сила"}></Stat>
                <Stat stat_name={"Ловкость"}></Stat>
                <Stat stat_name={"Выносливость"}></Stat>
                <Stat stat_name={"Интеллект"}></Stat>
                <Stat stat_name={"Мудрость"}></Stat>
                <Stat stat_name={"Харизма"}></Stat>
            </section>

            <h3>Снаряжение</h3>
            <section className="equipment_field">
                Здесь будет выбор снаряжения
            </section>

        </form>
    );
}