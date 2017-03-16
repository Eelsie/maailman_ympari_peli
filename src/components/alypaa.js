import React, {Component} from 'react';
import AlypaaQuestion from './alypaa-question';
import AlypaaIntro from './alypaa-intro';
import AlypaaLost from './alypaa-lost';

const questions = [
  {
    question: 'Kysymys 1',
    answers: [['answer 1.1', true], ['answer 1.2', false], ['answer 1.3', false], ['answer 1.4', false]],
  },
  {
    question: 'Kysymys 2',
    answers: [['answer 2.1', false], ['answer 2.2', false], ['answer 2.3', true], ['answer 2.4', false]]
  },
  {
    question: 'Kysymys 3',
    answers: [['answer 3.1', false], ['answer 3.2', false], ['answer 3.3', false], ['answer 3.4', true]]
  },
  {
    question: 'Kysymys 4',
    answers: [['answer 4.1', false], ['answer 4.2', false], ['answer 4.3', false], ['answer 4.4', true]]
  },
  {
    question: 'Kysymys 5',
    answers: [['answer 5.1', false], ['answer 5.2', false], ['answer 5.3', false], ['answer 5.4', true]]
  }
];



class Alypaa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: questions,
      showIntro: true,
      gameLost: false
    };

    this.handleIntro = this.handleIntro.bind(this);
    this.gameLost = this.gameLost.bind(this);


  }

  handleIntro() {
    this.setState({ gameLost: false });
    this.setState({ showIntro: false });
  }

  gameLost() {
    this.setState({ gameLost: true });
  }

  render() {
    if(this.state.showIntro) {
      return (
          <AlypaaIntro handleIntro={this.handleIntro}/>
      );
    } else if (this.state.gameLost) {
      return (
        <AlypaaLost handleIntro={this.handleIntro}/>
      );
    } else {
      return (
        <div>
          <AlypaaQuestion questions={this.state.questions} gameLost={this.gameLost}/>
        </div>
      );
    }
  }


}





export default Alypaa;
