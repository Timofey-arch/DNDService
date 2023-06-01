export default function BackgroundInfoContainer({ background }){
    return(
        <div className="background_info_container">
            <h1>{background.name}</h1>
            <img src={"http://127.0.0.1:8090/api/files/backgrounds/"+ background.id+"/" + background.field}></img>
            <div><b>Описание: </b> {background.description}</div>
            <div><b>Способность: </b> {background.ability}</div>
        </div>
    )
}