import React, {Component} from 'react';

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
    if (trueOrFalse === true) {
      event.persist(event.target.classList.add('btn--green'));
      setTimeout(function() {
        this.setState({ count: this.state.count + 1 });
        var counter = this.state.count.toString();
        console.log(counter);
        document.getElementById(counter).classList.add('btn--green');
        event.persist(event.target.classList.remove('btn--green'));
      }.bind(this), 1500);
    } else {
      console.log("lost!");
    }
  }

  render() {
    return (
      <div>
        <div>
          <p>Tervetuloa pelaamaan Maailman ympäri Älypää-peliä! Pelissa on 5 tasoa, joista jokaisessa on 5 kysymystä. Onnea peliin!</p>
          <button className="btn btn--orange xs-p-10 xs-mt-20">Aloita peli</button>
        </div>
        <div className="bar xs-mt-30">
          <div className="progress-container"><div className="progress-bar"><div className="progress"></div></div></div>
          <div className="score">0</div>
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
