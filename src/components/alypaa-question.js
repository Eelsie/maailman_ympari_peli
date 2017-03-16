import React, {Component} from 'react';

var secCounter = 25;
var width = 0;
var score = 0;
var timer;

class AlypaaQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    this.newQuestion = this.newQuestion.bind(this);
  }


  // componentWillMount() { // shuffles the questions
  //   for (let i = 25; i; i--) {
  //     let j = Math.floor(Math.random() * i);
  //     [this.props.questions[i - 1], this.props.questions[j]] = [this.props.questions[j], this.props.questions[i - 1]];
  //   }
  // }

  componentDidMount() {
    secCounter = 25;
    width = 0;
    clearInterval(timer);
    document.querySelector('.btn__qline').classList.remove('btn--green');
    document.querySelector('.btn__qline').classList.remove('btn--red');

    var bar = document.querySelector(".progress");
    timer = setInterval(function() {
        secCounter--;
        if(secCounter < 0) {
          return;
        } else {
          document.querySelector('.seconds').textContent = secCounter; // decrease the seconds counter
          width += 4;
          bar.style.width = width + '%'; // increase the width of the progress bar
        }
    }, 1000);
  }


  componentDidUpdate() {
    document.querySelector('.btn--green').classList.remove('btn--green');
    secCounter = 26;
    width = -4;
    var counter = this.state.count.toString();
    document.getElementById(counter).classList.add('btn--green');
  }





  newQuestion(trueOrFalse, event) {
    event.preventDefault();
    width -= 4;
    if (trueOrFalse === true) {
      event.target.classList.add('btn--green');
      score += secCounter * 4;
      document.querySelector('.score').textContent = score;
      setTimeout(function() {
        this.setState({ count: this.state.count + 1 });
      }.bind(this), 1000);
      } else {
        clearInterval(timer);
        event.target.classList.add('btn--red');
        setTimeout(function() {
          this.props.gameLost();
        }.bind(this), 1000);
      }
  }

  render() {
    return (
      <div className="box xs-p-30">
        <div className="bar xs-mt-30">
          <div className="progress-container"><div className="progress-bar"><div className="progress"></div></div></div>
          <div className="score">{score}</div>
          <div className="seconds">25</div>
        </div>
        <div className="question">
          <div className="xs-mt-30"><h4>{this.props.questions[this.state.count].question}</h4></div>
          <button className="btn__qline xs-mt-30" onClick={(event) => this.newQuestion(this.props.questions[this.state.count].answers[0][1], event)} >{this.props.questions[this.state.count].answers[0][0]}</button>
          <button className="btn__qline xs-mt-15" onClick={(event) => this.newQuestion(this.props.questions[this.state.count].answers[1][1], event)} >{this.props.questions[this.state.count].answers[1][0]}</button>
          <button className="btn__qline xs-mt-15" onClick={(event) => this.newQuestion(this.props.questions[this.state.count].answers[2][1], event)} >{this.props.questions[this.state.count].answers[2][0]}</button>
          <button className="btn__qline xs-mt-15" onClick={(event) => this.newQuestion(this.props.questions[this.state.count].answers[3][1], event)} >{this.props.questions[this.state.count].answers[3][0]}</button>
        </div>
        <div className="xs-mt-40">
          <div className="circle" id="1"></div>
          <div className="circle" id="2"></div>
          <div className="circle" id="3"></div>
          <div className="circle" id="4"></div>
          <div className="circle" id="5"></div>

          <div className="circle" id="6"></div>
          <div className="circle" id="7"></div>
          <div className="circle" id="8"></div>
          <div className="circle" id="9"></div>
          <div className="circle" id="10"></div>

          <div className="circle" id="11"></div>
          <div className="circle" id="12"></div>
          <div className="circle" id="13"></div>
          <div className="circle" id="14"></div>
          <div className="circle" id="15"></div>

          <div className="circle" id="16"></div>
          <div className="circle" id="17"></div>
          <div className="circle" id="18"></div>
          <div className="circle" id="19"></div>
          <div className="circle" id="20"></div>

          <div className="circle" id="21"></div>
          <div className="circle" id="22"></div>
          <div className="circle" id="23"></div>
          <div className="circle" id="24"></div>
          <div className="circle" id="25"></div>
        </div>
      </div>
    );
  }
}




export default AlypaaQuestion;
