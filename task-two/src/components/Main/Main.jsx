import React from 'react';
import './main.css'

const Main = () => {
    return (
        <main className='main'>
            <div className="noise"></div>
            <div className="glass"></div>
            <div className="main__first">
                <div className="main__title">Зарабатывайте <br/> больше <br/><span className='title-grad'> с WELBEX</span> </div>
                <div className="under-title"> Развиваем и контролируем продажи за вас</div>
            </div>
            <div className="main__second">
                <div className="title-gift">Вместе с <span className='gift-grad'> БЕСПЛАТНОЙ <br/> КОНСУЛЬТАЦИЕЙ</span> мы дарим:</div>
                <div className="under-gift-mobile">
                    <ul className='list'>
                        <li className='under-gift__title'>SKYPE АУДИТ</li>
                        <li className='under-gift__title'>DASHBOARD</li>
                        <li className='under-gift__title'>30 ВИДЖЕТОВ</li>
                        <li className='under-gift__title'>МЕСЯЦ AMOCRM</li>
                    </ul>
                </div>
                <div className="under-gift">
                    <div>
                        <div className="widget">
                            <div className="under-gift__title">ВИДЖЕТЫ</div>
                            <div className="under-gift__text">30 готовых <br/> решений</div>
                        </div>
                        <div className="skype">
                            <div className="under-gift__title">SKYPE АУДИТ</div>
                            <div className="under-gift__text">отдел продаж <br/> и CRM системы</div>
                        </div>

                    </div>
                    <div>
                        <div className="dash">
                            <div className="under-gift__title">DASHBOARD</div>
                            <div className="under-gift__text">с показателями <br/> вашего бизнеса</div>
                        </div>
                        <div className="days">
                            <div className="under-gift__title">35 дней</div>
                            <div className="under-gift__text">использования <br/> CRM </div>
                        </div>
                    </div>
                </div>
                <button className='main-btn'> Получить консультацию </button>
            </div>
        </main>
    );
};

export default Main;