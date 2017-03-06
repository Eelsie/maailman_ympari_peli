import React, {Component} from 'react';
import circle from '../img/circle.svg';

// counter for questions array


// 25 seconds timer
// function startTimer() {
//   var counter = 25;
//   var width = 0;
//   var bar = document.querySelector(".progress");
//   setInterval(function() {
//     counter--;
//     if(counter < 0) {
//         clearInterval();
//     } else {
//         document.querySelector('.seconds').textContent = counter; // decrease the seconds counter
//         width += 4;
//         bar.style.width = width + '%'; // increase the width of the progress bar
//     }
// }, 1000);
// }



class AlypaaQuestion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.newQuestion = this.newQuestion.bind(this)

  }

  newQuestion(trueOrFalse, event) {
    event.preventDefault();
    console.log(event.target.parentNode);
    if (trueOrFalse === true) {
      event.persist(event.target.parentNode.classList.add('btn__qline--green'));
      setTimeout(function() {
        this.setState({ count: this.state.count + 1 });
        event.persist(event.target.parentNode.classList.remove('btn__qline--green'));
      }.bind(this), 1500);
    } else {
      console.log("lost!");
    }
  }

  render() {
    return (
      <div>
        <div className="bar">
          <div className="progress-container"><div className="progress-bar"><div className="progress"></div></div></div>
          <div className="score">0</div>
          <div className="seconds">25</div>
        </div>
        <div className="question">
          <div className="btn__qline xs-mt-20 xs-p-15 xs-mb-30"><h4>{this.props.questions[this.state.count].question}</h4></div>
          <button className="btn__qline xs-mt-20 xs-p-15" onClick={(event) => this.newQuestion(this.props.questions[this.state.count].answers[0][1], event)} ><p>{this.props.questions[this.state.count].answers[0][0]}</p></button>
          <button className="btn__qline xs-mt-20 xs-p-15" onClick={(event) => this.newQuestion(this.props.questions[this.state.count].answers[1][1], event)} ><p>{this.props.questions[this.state.count].answers[1][0]}</p></button>
          <button className="btn__qline xs-mt-20 xs-p-15" onClick={(event) => this.newQuestion(this.props.questions[this.state.count].answers[2][1], event)} ><p>{this.props.questions[this.state.count].answers[2][0]}</p></button>
          <button className="btn__qline xs-mt-20 xs-p-15" onClick={(event) => this.newQuestion(this.props.questions[this.state.count].answers[3][1], event)} ><p>{this.props.questions[this.state.count].answers[3][0]}</p></button>
        </div>
        <div className="xs-mt-40">
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>

          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>

          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>

          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>

          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
          <img className="circle" src={circle} role="presentation"/>
        </div>
      </div>
    );
  }
}




export default AlypaaQuestion;
