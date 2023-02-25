export default function CharacterForm(props: any){
    return(
        <form className="character_form">
            <h2>Создать персонажа</h2>

            <section className="form_field">
                <label htmlFor="name">Имя</label>
                <input type={"text"} name="name"></input>
            </section>

            <section className="form_field">
                <label htmlFor="class">Класс</label>

                <select name="class">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </section>
            <div className="description"></div>
               
            <section className="form_field">
                <label htmlFor="race">Раса</label>
                
                <select name="race">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
            </section>
            <div className="description"></div>
        </form>
    );
}