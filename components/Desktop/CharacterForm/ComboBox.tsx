export default function ComboBox(props: any){
    return(
        <section className="form_field">
            <label htmlFor={props.name}>{props.label}</label>

            <select name={props.name} onChange={event => (props.setFunction(event.target.value))}>
                {props.optionList.map(
                    (option: any) => {
                        return <option value={option.name}>{option.name}</option>
                })}
            </select>
        </section>
    );
}