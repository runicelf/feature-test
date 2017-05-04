import React, { Component } from 'react';
import './components/css/reset.css';
import './components/css/App.css';
import Header from './components/Header';
import Table from './components/Table';
import Footer from './components/Footer';
import PopUp from './components/PopUp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        user: 'Станислав',
      },
      popup: {
        open: false,
        n: 0,
        value: '',
      },
      prePayments : {
        
      },
      data: [
      {
        num: 1,
        date: '05.16',
        sum: 30000,
        balance: 3450000,
        debt: 10000,
        percent: 30000,
        payment: 40000,
      },
      {
        num: 2,
        date: '05.16',
        sum: 30000,
        balance: 3450000,
        debt: 10000,
        percent: 30000,
        payment: 40000,
      },
      {
        num: 3,
        date: '05.16',
        sum: 30000,
        balance: 3450000,
        debt: 10000,
        percent: 30000,
        payment: 40000,
      },
      {
        num: 4,
        date: '05.16',
        sum: 30000,
        balance: 3450000,
        debt: 10000,
        percent: 30000,
        payment: 40000,
      },
      ],
    };
  }
  addPopUp(n) {
    this.setState({popup:{
      ...this.state.popup,
      open: true,
      n: n,
    }});
  }
  closePopUp() {
    this.setState({popup:{
      ...this.state.popup,
      value: '',
      open: false,
      n: 0,
    }});
  }
  addPrePayment(n, sum) {
    this.closePopUp();
    this.setState({prePayments : {...this.state.prePayments, [n]: sum}});
  }
  changePopUpValue(e) {
    const preValue = e.target.value.split('').filter(e => e !== '₽' && e !== ' ');
    if(preValue.length > 15) {
      return;
    }
    let value = parseInt(preValue.join(''));
    if(value === this.state.popup.value) {
      value = parseInt(preValue.slice(0, preValue.length - 1).join(''));
    }
    this.setState({popup: {
        ...this.state.popup,
        value: value,
    }});
  }
  removePayment(n){
    const prePK = Object.keys(this.state.prePayments);
    const newPrePayments = prePK.filter(e => e !== String(n)).map(e => this.state.prePayments[e]);
    this.setState({prePayments: newPrePayments});
  }
  save() {
    const prePK = Object.keys(this.state.prePayments);
    const newData = this.state.data.map(e => {
      if(prePK.indexOf(String(e.num)) !== -1) {
        e.payment = e.payment + this.state.prePayments[e.num];
      }
      return e;
    });
    this.setState({data: newData, prePayments: {}});
  }
  render() {
    return (
      <div className='wrapper'>
        <Header user={this.state.user.user}/>
        
        {this.state.popup.open ? <PopUp closePopUp={this.closePopUp.bind(this)} data={this.state.popup} addPrePayment={this.addPrePayment.bind(this)} changePopUpValue={this.changePopUpValue.bind(this)}/>: ''}
        <div className='main-wrapper'>
          <div className='title'>
                <span className='title__top'>Оптимизация кредита: по сумме</span>
                <h1 className='title__bottom'>Расчет платежей</h1>
          </div>
          <Table 
            removePayment={this.removePayment.bind(this)}
            data={this.state.data}
            addPopUp={this.addPopUp.bind(this)}
            prePayments={this.state.prePayments}
          />
          <div className='buttons'>
            <button onClick={this.save.bind(this)} className='buttons__save buttons__button'>Сохранить расчеты</button>
            <button className='buttons__print buttons__button'>Распечатать</button>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
