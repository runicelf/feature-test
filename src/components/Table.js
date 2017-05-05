import React, { Component } from 'react';
import Row from './Row'; 
import './css/Table.css';

export default class Table extends Component{
    render() {
        return (
            <table className='table'>
                <thead className='table__thead'>
                    <tr>
                        <th className='table__th'>№</th>
                        <th className='table__th'>Дата</th>
                        <th className='table__th'>Сумма переплат</th>
                        <th className='table__th'>Остаток задолженности</th>
                        <th className='table__th'>Основной долг</th>
                        <th className='table__th'>Начисленные проценты</th>
                        <th className='table__th'>Платеж</th>
                        <th className='table__th'></th>
                    </tr>
                </thead>
                <tbody className='table__data'>
                  {
                  this.props.data.map( e => <Row data={e} removePayment={this.props.removePayment} 
                    prePayments={this.props.prePayments} 
                    addPopUp={this.props.addPopUp} />)
                  }
                </tbody>
          </table>
        );
    }
}