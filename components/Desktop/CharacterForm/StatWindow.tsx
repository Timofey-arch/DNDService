import Stat from "./Stat";
import { useState } from "react";

export default function StatWindow(props: any){
    const [pointCount, setPoinCount] = useState(30);

    return(
        <div className="character_form" 
            style={{display: props.currentWindowNumber == props.windowNumber ? "flex" : "none"}}>
    
            <h3>Выберите способ распределения навыков {props.userData.characteristics.strength}
                {props.userData.characteristics.physique}
                {props.userData.characteristics.dexterity}
                {props.userData.characteristics.intelligence}
                {props.userData.characteristics.wisdom}
                {props.userData.characteristics.charisma}
                </h3>
            
            <p>Осталось очков навыков - {pointCount}</p>

            <section className="stats_field">
                {["Сила", "Ловкость", "Выносливость", "Интеллект", "Мудрость", "Харизма"].map((statName) => {
                    return <Stat statName={statName}
                                 pointCount={pointCount}
                                 setPointCount={setPoinCount}
                                 userData ={props.userData}></Stat>
                })}
            </section>

            <section className="skills_and_savethrows_container">
                <div className="skills_container">
                    <p>Навыки</p>

                    <div className="skill">Акробатика {Math.round((props.userData.characteristics.dexterity - 10)/2)}</div>
                    <div className="skill">Атлетика {Math.round((props.userData.characteristics.strength - 10) / 2)}</div>
                    <div className="skill">Внимание {Math.round((props.userData.characteristics.wisdom - 10) / 2)}</div>
                    <div className="skill">Выживание {Math.round((props.userData.characteristics.wisdom - 10) / 2)}</div>
                    <div className="skill">Дрессировка {Math.round((props.userData.characteristics.wisdom - 10) / 2)}</div>
                    <div className="skill">Запугивание {Math.round((props.userData.characteristics.charisma - 10) / 2)}</div>
                    <div className="skill">Исполнение {Math.round((props.userData.characteristics.charisma - 10) / 2)}</div>
                    <div className="skill">История {Math.round((props.userData.characteristics.intelligence - 10) / 2)}</div>
                    <div className="skill">Ловкость рук {Math.round((props.userData.characteristics.dexterity - 10) / 2)}</div>
                    <div className="skill">Магия {Math.round((props.userData.characteristics.intelligence - 10) / 2)}</div>
                    <div className="skill">Медицина {Math.round((props.userData.characteristics.wisdom - 10) / 2)}</div>
                    <div className="skill">Обман {Math.round((props.userData.characteristics.charisma - 10) / 2)}</div>
                    <div className="skill">Природа {Math.round((props.userData.characteristics.intelligence - 10) / 2)}</div>
                    <div className="skill">Проницательность {Math.round((props.userData.characteristics.wisdom - 10) / 2)}</div>
                    <div className="skill">Расследование {Math.round((props.userData.characteristics.intelligence - 10) / 2)}</div>
                    <div className="skill">Религия {Math.round((props.userData.characteristics.intelligence - 10) / 2)}</div>
                    <div className="skill">Скрытность {Math.round((props.userData.characteristics.dexterity - 10) / 2)}</div>
                    <div className="skill">Убеждение {Math.round((props.userData.characteristics.charisma - 10) / 2)}</div>
                </div>

                <div className="savethrows_container">
                    <p>Спасброски</p>
                    
                    <div className="savethrow">Сила - +3</div>
                    <div className="savethrow">Ловкость - -2</div>
                    <div className="savethrow">Выносливость - +3</div>
                    <div className="savethrow">Интеллект - +2</div>
                    <div className="savethrow">Мудрость - -3</div>
                    <div className="savethrow">Харизма - +1</div>
                </div>
            </section>
        </div>
    );
}