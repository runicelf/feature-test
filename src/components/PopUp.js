import React, {Component} from 'react';
import './css/PopUp.css';

export default class PopUp extends Component {
    editNum(num) {
        if(!num) {
            return '';
        }
        const newNum = String(num).split('').reduceRight((acc, elem) => {
            if(acc[1] === 2) {
                return [` ${elem}${acc[0]}`, 0];
            }else {
                return [`${elem}${acc[0]}`, acc[1] + 1];
            }
        }, ['', 0])[0];
        return `${newNum} ${String.fromCharCode(8381)}`;
    }
    render() {
        return (
            <div className='pop-up__wrapper'>
                <div className='pop-up__with-close'>
                    <button className='pop-up__close __cross' onClick={() => this.props.closePopUp()}>
                        <div className='__cross__inside'/>
                    </button>
                    <div className='pop-up'>
                        <div className='pop-up__top'>Сумма платежа</div>
                        <input className='pop-up__input' type='text' value={this.editNum(this.props.data.value)} onChange={this.props.changePopUpValue}/>
                        <button className='pop-up__save' onClick={() => this.props.addPrePayment(this.props.data.n, this.props.data.value)}>Сохранить</button>
                    </div>
                </div>
                
            </div>    
        );
    }
}