export default function RaceInfoContainer({ race }){
    return(
        <div className="race_info_container">
            <h1>{race.name}</h1>
            <img src={"http://127.0.0.1:8090/api/files/races/"+race.id+"/" + race.field}></img>
            <div><b>Описание: </b> {race.description}</div>
            <div><b>Базовая скорость: </b>{race.speed}</div>
            <div><b>Темнозрение: </b>{race.darkVision ? "Есть" : "Нет"}</div>
        </div>
    )
}