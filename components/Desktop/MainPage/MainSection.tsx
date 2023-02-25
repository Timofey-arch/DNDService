import Link from "next/link";

export default function MainSection(props: any){
    return(
        <main className="main_section">
            <h1>Добро пожаловать!</h1>
            <section>
                {/* Изменить заголовок */}
                <h2>Инструменты для игры</h2>
                <div className="icon_container">
                    <Link className="icon" href="/character_list">
                        <div className="picture"></div>
                        <h3>Интерактивный лист персонажа</h3>
                        <p>Создайте своего уникального персонажа</p>
                    </Link>

                    <Link className="icon" href="/">
                        <div className="picture"></div>
                        <h3>Мастерская</h3>
                        <p>Следить за игрой стало намного удобнее. Избавьте себя от рутинных действий!</p>
                    </Link>

                    <Link className="icon" href="/">
                        <div className="picture"></div>
                        <h3>Справочный материал</h3>
                        <p>Ознакомьтесь  с правилами игры</p>
                    </Link>
                    
                    <Link className="icon" href="/">
                        <div className="picture"></div>
                        <h3>Для разработчиков</h3>
                        <p>Недостаточно функций на сайте? Сделай собственную!</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}