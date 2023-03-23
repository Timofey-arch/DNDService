export default function Button(props: any){
    return(
        <button className="choose_window_button" onClick={props.onClick}>
            <p>{props.title}</p>
        </button>
    );
}