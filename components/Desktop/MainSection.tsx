export default function MainSection(props: any){
    return(
        <main className="main_section">
            <h2>Добро пожаловать!</h2>
            <section>
                <div className="picture"></div>
                
                <div className="icon_container">
                    <div className="icon">
                        <div className="picture"></div>
                        <h2>Интерактивный лист персонажа</h2>
                        <p>Создайте своего уникального персонажа</p>
                    </div>

                    <div className="icon">
                        <div className="picture"></div>
                        <h2>Мастерская</h2>
                        <p>Следить за игрой стало намного удобнее. Избавьте себя от рутинных действий!</p>
                    </div>

                    <div className="icon">
                        <div className="picture"></div>
                        <h2>Справочный материал</h2>
                        <p>Ознакомьтесь  с правилами игры</p>
                    </div>
                    
                    <div className="icon">
                        <div className="picture"></div>
                        <h2>Для разработчиков</h2>
                        <p>Недостаточно функций на сайте? Сделай собственную!</p>
                    </div>
                </div>
            </section>
        </main>
    );
}