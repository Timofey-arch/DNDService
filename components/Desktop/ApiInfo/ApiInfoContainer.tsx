export default function ApiInfoContainer(){
    return(
        <div className="api_info_container">
            <h1>ИНФОРМАЦИЯ</h1>
            <p>
                В данном разделе вы можете ознакомиться с программным интерфейсом нашего сайта, благодаря которому
                вы можете получить доступ к базе данных D&D.
            </p>
            <div className="code">
                <div className="request_method">GET</div>
                http://localhost:3000/api/[insert here collection name ]
            </div>
        </div>
    );
}