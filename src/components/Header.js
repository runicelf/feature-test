import React, { Component } from 'react';
import './css/Header.css';

export default class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__content'>
                    <div className='header__logo'>Ипотечный калькулятор</div>
                    <nav className='header__nav'>
                        <div className='header__nav__elem header__nav__main'><a className='header__nav__a' href='#'>Главная</a></div>
                        <div className='header__nav__elem header__nav__faq'><a className='header__nav__a' href='#'>Вопрос-ответ</a></div>
                        <div className='header__nav__elem header__nav__profile'><a className='header__nav__a' href='#'>{this.props.user} </a></div>
                    </nav>
                </div>
               
            </header>    
        );
    }
}