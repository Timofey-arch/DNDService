export default function RaceInfoContainer({ race }){
    return(
        <div className="race_info_container">
            <h1>{race.name}</h1>
            <div><b>Описание: </b> {race.description}</div>
            <div><b>Базовая скорость: </b>{race.speed}</div>
            <div><b>Темнозрение: </b>{race.darkVision ? "Есть" : "Нет"}</div>
        </div>
    )
}