export default function ComboBox(props: any){
    return(
        <section className="form_field">
            <label htmlFor={props.name}>{props.label}</label>

            <select name={props.name} onChange={event => (props.setClass(event.target.value))}>
                {props.optionList.map((pclass: any) => {
                    return <option value={pclass.name}>{pclass.name}</option>
                })}
            </select>
        </section>
    );
}