export default function ComboBox(props: any){

    function setInformation(event: any){
        props.setName(event.target.value);
        for(let i = 0; i < event.target.length; i++){
            if(event.target[i].value == event.target.value) 
                props.setDescription(event.target[i].dataset.description);
        }
    }

    return( 
        <section className="form_field">
            <label htmlFor={props.name}>{props.label}</label>

            <select name={props.name} onChange={event => setInformation(event)}>
                {props.optionList.map(
                    (option: any) => {
                        return <option value={option.name} data-description={option.description}>{option.name}</option>
                })}
            </select>
        </section>
    );
}