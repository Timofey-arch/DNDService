export default function Description(props: any){
    return(     
        <div className="description">
            <div>{props.currentValue}</div>
            <div>{props.description}</div>
        </div>
    );
}