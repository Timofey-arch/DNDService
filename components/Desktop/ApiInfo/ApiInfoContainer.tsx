export default function ApiInfoContainer(){
    return(
        <div className="api_info_container">
            <h1>ИНФОРМАЦИЯ</h1>
            <p>
                В данном разделе вы можете ознакомиться с программным интерфейсом нашего сайта, благодаря которому
                вы можете получить доступ к базе данных D&D.
            </p>

            <p className="warning">Важно! Все данные приходят в формате JSON. Учитывайте это при использовании API.</p>

            <p>
                Этот запрос позволит вам получить любую коллекцию данных из базы, к которым у вас есть доступ. 
                К примеру, имя коллекции classes даст вам все играбельные классы, имя races даст вам список всех играбельных рас и 
                так далее.
            </p>
            <div className="code">
                <div className="request_method">GET</div>
                http://localhost:3000/api/[insert here collection name]
            </div>

            <p>
                Этот запрос позволит вам получить конкретный элемент из коллекции, которую вы выберете. Вам лишь необходимо знать id элемента.
            </p>
            <div className="code">
                <div className="request_method">GET</div>
                http://localhost:3000/api/[insert here collection name]/[insert here id of item]
            </div>
        </div>
    );
}