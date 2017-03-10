import React, {Component} from 'react';
import AlypaaQuestion from './alypaa-question';
import AlypaaIntro from './alypaa-intro';

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
  }
];


class Alypaa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: questions,
      showIntro: true
    };

    this.handleIntro = this.handleIntro.bind(this);

  }

  handleIntro() {
    this.setState({ showIntro: false});
    console.log('hgkjvfdbgktg');
  }

  render() {
    if(this.state.showIntro) {
      return (
          <AlypaaIntro handleIntro={this.handleIntro}/>
      );
    } else {
      return (
        <div>
          <AlypaaQuestion questions={this.state.questions}/>
        </div>
      );
    }
  }


}





export default Alypaa;
