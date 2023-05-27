import Stat from "./Stat";
import { useState } from "react";

export default function StatWindow(props: any){
    const [pointCount, setPoinCount] = useState(30);

    return(
        <div className="character_form" 
            style={{display: props.currentWindowNumber == props.windowNumber ? "flex" : "none"}}>
    
            <h3>Выберите способ распределения навыков</h3>
            
            <p>Осталось очков навыков - {pointCount}</p>

            <section className="stats_field">
                {["Сила", "Ловкость", "Выносливость", "Интеллект", "Мудрость", "Харизма"].map((statName) => {
                    return <Stat statName={statName} pointCount={pointCount} setPointCount={setPoinCount}></Stat>
                })}
            </section>

            <section className="skills_and_savethrows_container">
                <div className="skills_container">
                    <p>Навыки</p>

                    <div className="skill">Акробатика</div>
                    <div className="skill">Атлетика</div>
                    <div className="skill">Внимание</div>
                    <div className="skill">Выживание</div>
                    <div className="skill">Дрессировка</div>
                    <div className="skill">Запугивание</div>
                    <div className="skill">Исполнение</div>
                    <div className="skill">История</div>
                    <div className="skill">Ловкость рук</div>
                    <div className="skill">Магия</div>
                    <div className="skill">Медицина</div>
                    <div className="skill">Обман</div>
                    <div className="skill">Природа</div>
                    <div className="skill">Проницательность</div>
                    <div className="skill">Расследование</div>
                    <div className="skill">Религия</div>
                    <div className="skill">Скрытность</div>
                    <div className="skill">Убеждение</div>
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