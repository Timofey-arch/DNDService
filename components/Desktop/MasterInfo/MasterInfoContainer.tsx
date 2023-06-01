export default function MasterInfoContainer(){
    return(
        <div className="api_info_container">
            <h1>ИНФОРМАЦИЯ ДЛЯ МАСТЕРА</h1>
            <p>
                В данном разделе вы можете ознакомиться с советами для мастера
            </p>

            <p className="warning">Важно! Данные советы составлены автором сайта, вы не должны учитывать их как правило.</p>


            <h2>1. Будь готов к импровизации</h2>
            <p>
                Игроки могут сделать неожиданный выбор, и тебе нужно быть готовым изменить сюжет на лету.
            </p>
            <div className="code">
                <div className="request_method">Хорошо</div>
                <ul className= {""}>
                    <li>Игрок 1: Я сломаю водонапорную башню!!!</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Бросай кубики!</li>
                </ul>
            </div>
            <div>ㅤ</div>
            <div className="code">
                <div className="request_method">Плохо</div>
                <ul className= {""}>
                    <li>Игрок 1: Я сломаю водонапорную башню!!!</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Нельзя!!!</li>
                </ul>
            </div>


            <h2>2. Веди учет взаимодействия с персонажами игроков.</h2>
            <p>
                Убедись, что каждый персонаж игрока имеет возможность взаимодействовать с их элементами сюжета и друг с другом.
            </p>
            <div className="code">
                <div className="request_method">Хорошо</div>
                <ul className= {""}>
                    <li>Игрок 1: Я возьму у тебя кинжал</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Игрок 2: Конечно, держи!</li>
                </ul>
            </div>
            <div>ㅤ</div>
            <div className="code">
                <div className="request_method">Плохо</div>
                <ul className= {""}>
                    <li>Игрок 1: Я возьму у тебя кинжал</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Ты не можешь взять у него кинжал!</li>
                </ul>
            </div>


            <h2>3. Создай привлекательный и интересный мир для игры.</h2>
            <p>
                Сюжет и окружение должны рассказывать историю и привлекать игроков.
            </p>
            <div className="code">
                <div className="request_method">Хорошо</div>
                Мастер: Вы находитесь в тайнственной библиотеке, наполненной старинными книгами!!!
            </div>
            <div>ㅤ</div>
            <div className="code">
                <div className="request_method">Плохо</div>
                Мастер: Ну это, вы сейчас тут!!!
            </div>


            <h2>4.  Не забывай про баланс.</h2>
            <p>
                Сохраняй баланс между сражениями, исследованием и разговорами, чтобы игроки не скучали и не
                подпадали под влияние одного из этих аспектов.
            </p>
            <div className="code">
                <div className="request_method">Хорошо</div>
                <ul className= {""}>
                    <li>Игрок 1: Ухх, какой долгий бой</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: После долго сражения вы увидели таинственные руины, будете ли вы их изучать?</li>
                </ul>
            </div>
            <div>ㅤ</div>
            <div className="code">
                <div className="request_method">Плохо</div>
                <ul className= {""}>
                    <li>Игрок 1: Ухх, какой долгий бой</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Бросай кубики, вас ждут еще больше кровавых боев!</li>
                </ul>
            </div>


            <h2>5. Убедись, что каждый персонаж игрока имеет свой уникальный опыт.</h2>
            <p>
                Настрой свою игру таким образом, чтобы каждые персонажи имели равные возможности принимать участие в истории.
            </p>
            <div className="code">
                <div className="request_method">Хорошо</div>
                <ul className= {""}>
                    <li>Игрок 1: Ух ты, я могу построить вам мост, чтобы перейти через реку</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Игрок 2: А я могу добыть материалы для этого</li>
                </ul>
            </div>
            <div>ㅤ</div>
            <div className="code">
                <div className="request_method">Плохо</div>
                <ul className= {""}>
                    <li>Игрок 1: Ух ты, я могу построить вам мост, чтобы перейти через реку</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Игрок 2: Я хилый и слабый, ничего не умею, просто посмотрю</li>
                </ul>
            </div>

            <h2>6. Не бойся давать возможность игрокам принимать рискованные решения.</h2>
            <p>
                Это может привести к неожиданным поворотам сюжета и новым возможностям для персонажей.
            </p>
            <div className="code">
                <div className="request_method">Хорошо</div>
                <ul className= {""}>
                    <li>Игрок 1: Я сейчас буду прыгать через ров, полных кольев</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Бросай кубики!!!</li>
                </ul>
            </div>
            <div>ㅤ</div>
            <div className="code">
                <div className="request_method">Плохо</div>
                <ul className= {""}>
                    <li>Игрок 1: Я сейчас буду прыгать через ров, полных кольев</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Вы не можете совершить такое действие</li>
                </ul>
            </div>

            <h2>7. Выбери правильный баланс сложности для игры.</h2>
            <p>
                Не забывай, что нужно подстраиваться под игроков и их способности, чтобы сложность не была лишней.
            </p>
            <div className="code">
                <div className="request_method">Хорошо</div>
                <ul className= {""}>
                    <li>Игрок 1: Я имею силу 17</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Босс имеет 26 ед.жизни</li>
                </ul>
            </div>
            <div>ㅤ</div>
            <div className="code">
                <div className="request_method">Плохо</div>
                <ul className= {""}>
                    <li>Игрок 1: Я имею силу 17</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Печально, обычный гоблин имеет урон в 10000000000 ед.</li>
                </ul>
            </div>

            <h2>8. Не забывай про врагов и их мотивы.</h2>
            <p>
                В рамках своей истории убедись, что у врагов тоже есть своя история и мотивы.
            </p>
            <div className="code">
                <div className="request_method">Хорошо</div>
                <ul className= {""}>
                    <li>Игрок 1: Интересно, есть что-то у убитого мной колдуна</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Обыскивая труп, вы нашли свиток с картинкой и письма</li>
                </ul>
            </div>
            <div>ㅤ</div>
            <div className="code">
                <div className="request_method">Плохо</div>
                <ul className= {""}>
                    <li>Игрок 1: Интересно, есть что-то у убитого мной колдуна</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Нет, это просто npc</li>
                </ul>
            </div>

            <h2>9. Разнообразь способы коммуникации в игре.</h2>
            <p>
                Необходимо подстраиваться к игрокам, которые любят драки, торговлю или сильные эмоциональные реакции.
            </p>
            <div className="code">
                <div className="request_method">Хорошо</div>
                <ul className= {""}>
                    <li>Игрок 1: Мы будем драться!!!</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Игрок 2: Давай я попробую договориться</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Бросай кубики</li>
                </ul>
            </div>
            <div>ㅤ</div>
            <div className="code">
                <div className="request_method">Плохо</div>
                <ul className= {""}>
                    <li>Игрок 1: Мы будем драться!!!</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Игрок 2: Давай я попробую договориться</li>
                    <li style={{listStyle: "none"}}>ㅤ</li>
                    <li>Мастер: Конечно, нет, мы без переговоров играем</li>
                </ul>
            </div>

            <h2>10. Убедись, что игроки получают удовольствие от игры.</h2>
            <p>
                Игра должна быть веселой и приятной для всех людей, играющих в нее.
                Если игроки не получают удовольствие от игры, возможно придется изменить направление или сюжет игры.
            </p>
        </div>
    );
}