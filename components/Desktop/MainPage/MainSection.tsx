import Link from "next/link";
import React from "react";

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
                        <p>Создайте своего уникального персонажа и идите навстречу приключениям!</p>
                    </Link>

                    <Link className="icon" href="/">
                        <div className="picture"></div>
                        <h3>Мастерская</h3>
                        <p>Следить за игрой стало намного удобнее. Избавьте себя от рутинных действий!</p>
                    </Link>

                    <Link className="icon" href="/">
                        <div className="picture"></div>
                        <h3>Справочный материал</h3>
                        <p>Ознакомьтесь  с правилами игры, ведь их так много!</p>
                    </Link>
                    
                    <Link className="icon" href="/">
                        <div className="picture"></div>
                        <h3>Для разработчиков</h3>
                        <p>Недостаточно функций на сайте? Наше API даст вам возможность создать что-то свое!</p>
                    </Link>
                </div>
            </section>
        </main>
    );
}
