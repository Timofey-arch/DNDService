export default function Description(props: any){
    return(     
        <div className="description">
            <div>{props.currentValue}</div>
            <div>Это описание чего-нибудь.</div>
        </div>
    );
}