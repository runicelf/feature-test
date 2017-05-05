import React, { Component } from 'react';
import './css/Row.css';

export default class Row extends Component {
    editNum(num) {
        const newNum = String(num).split('').reduceRight((acc, elem) => {
            if(acc[1] === 2) {
                return [` ${elem}${acc[0]}`, 0];
            }else {
                return [`${elem}${acc[0]}`, acc[1] + 1];
            }
        }, ['', 0])[0];
        return `${newNum} ${String.fromCharCode(8381)}`;
    }
    isButtonActive(num) {
        if(!!num) {
            return ( 
                <div className='table__cell-wrapper'>
                    <button className='table__close __cross' onClick={() => this.props.removePayment(this.props.data.num)}>
                        <div className='__cross__inside'/>
                    </button>
                    <div className='table__inf'>
                        <span className='table__price'>{this.editNum(num)}</span>
                        <span className='table__economy'>Экономия {this.editNum(num)}</span>
                    </div>
                </div>
            );
        }else {
            return (
                <button className='table__add-payment' onClick={() => this.props.addPopUp(this.props.data.num)}>Добавить платеж</button>  
            );
        }
    }
    render() {
        return(
          <tr className='table__tr'>
            <th className='table__th'>{this.props.data.num}</th>
            <th className='table__th'>{this.props.data.date}</th>
            <th className='table__th'>{this.editNum(this.props.data.sum)}</th>
            <th className='table__th'>{this.editNum(this.props.data.balance)}</th>
            <th className='table__th'>{this.editNum(this.props.data.debt)}</th>
            <th className='table__th'>{this.editNum(this.props.data.percent)}</th>
            <th className='table__th'>{this.editNum(this.props.data.payment)}</th>
            <th className='table__th table__button'>{this.isButtonActive(this.props.prePayments[this.props.data.num])}</th>
          </tr>  
        );
    }
}