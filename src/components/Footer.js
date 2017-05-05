import React, {Component} from 'react';
import './css/Footer.css';

export default class Footer extends Component{
    render() {
        return (
            <footer className='footer'>
                <div className='footer__content'>
                    <div className='footer__copy'>&copy;2016 Ипотечный калькулятор. Любое копирование информации запрещено. 
                        <a className='footer__copy__a' href='#'>Privacy.</a>
                    </div>
                    <div className='footer__social-network-logos'>
                        <a href='#' className='footer__social-network-logos__vk'></a>
                        <a href='#' className='footer__social-network-logos__fb'></a>
                    </div>
                </div>
            </footer>    
        );
    }
}