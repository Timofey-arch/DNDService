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
        </div>
    );
}