export default function InputField(props: any){
    return(
        <section className="form_field">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" name={props.name}></input>
        </section>
    );
}