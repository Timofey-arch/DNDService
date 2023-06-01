import Stat from "./Stat";
import {useState} from "react";
import Inventory from "./Inventory";

export default function StatWindow(props: any) {
    const [pointCount, setPoinCount] = useState(30);
    const userClassSaveThrows = props.userData.playerClasses.find((elem) => elem.name == props.userData.userPlayerClass).saveThrows?.getSavesThrows
    const items = props.userData.backgrounds.find((elem: any) => elem.name == props.userData.userBackground).equipment.getEquipment;

    return (
        <div className="character_form"
            style={{display: props.currentWindowNumber == props.windowNumber ? "flex" : "none"}}>

            <h3>Выберите способ распределения навыков</h3>

            <p>Осталось очков навыков - {pointCount}</p>

            <section className="stats_field">
                {["Сила", "Ловкость", "Выносливость", "Интеллект", "Мудрость", "Харизма"].map((statName) => {
                    return <Stat statName={statName}
                                 pointCount={pointCount}
                                 setPointCount={setPoinCount}
                                 userData={props.userData}
                                 startStats={props.userData.startStats}></Stat>
                })}
            </section>

            <section className="info_container">
                <div className="skills_container">
                    <p>Навыки</p>

                    <div className="skill">Акробатика {Math.round((props.userData.characteristics.dexterity - 10) / 2)}</div>
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

                    <div className="savethrow">Сила
                        - {(props.userData.characteristics.strength + (userClassSaveThrows?.includes("Сила") ? 2 : 0))}</div>
                    <div className="savethrow">Ловкость
                        - {(props.userData.characteristics.dexterity + (userClassSaveThrows?.includes("Ловкость") ? 2 : 0))}</div>
                    <div className="savethrow">Выносливость
                        - {(props.userData.characteristics.physique + (userClassSaveThrows?.includes("Телосложение") ? 2 : 0))}</div>
                    <div className="savethrow">Интеллект
                        - {(props.userData.characteristics.intelligence + (userClassSaveThrows?.includes("Интеллект") ? 2 : 0))}</div>
                    <div className="savethrow">Мудрость
                        - {(props.userData.characteristics.wisdom + (userClassSaveThrows?.includes("Мудрость") ? 2 : 0))}</div>
                    <div className="savethrow">Харизма
                        - {(props.userData.characteristics.charisma + (userClassSaveThrows?.includes("Харизма") ? 2 : 0))}
                    </div>

                    <div className="inventory">
                        <p>Инвентарь</p>

                        {items?.map((elem, index) => <div key={index} className="item">{elem}</div>)}
                    </div>
                </div>
            </section>
        </div>
    );
}