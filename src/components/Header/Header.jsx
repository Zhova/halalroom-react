import React from 'react'

import './Header.sass'

const Header = () => {
    return (
        <header class="header-wrap wrap">
            <div class="header container"><a class="header-logo" href="/halalroom-layout"><img class="header-logo__img" src="./img/logo.png" alt="" role="presentation" /><span class="header-logo__text">Halal Room</span></a>
                <nav class="nav-menu">
                    <ul class="nav-menu__list">
                        <li class="nav-menu__item"> <a href="/halalroom-layout/arhive-category-page.html">Категорії</a>
                        </li>
                        <li class="nav-menu__item"> <a href="/halalroom-layout/arhive-podcasts.html">Відео та подкасти</a>
                        </li>
                        <li class="nav-menu__item"> <a href="/halalroom-layout/contacts-page.html">Контакти</a>
                        </li>
                    </ul>
                </nav>
                <div class="burger-lang">
                    <ul class="lang-block">
                        <li class="lang-block__item">UA
                        </li>
                    </ul>
                    <div class="menu cross menu--2">
                        <label>
                            <input type="checkbox" />
                            <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="50" cy="50" r="30"></circle>
                                <path class="line--1" d="M0 70l28-28c2-2 2-2 7-2h64"></path>
                                <path class="line--2" d="M0 50h99"></path>
                                <path class="line--3" d="M0 30l28 28c2 2 2 2 7 2h64"></path>
                            </svg>
                        </label>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header