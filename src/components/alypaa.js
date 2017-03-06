import React, {Component} from 'react';
import AlypaaQuestion from './alypaa-question';

// function renderCircles() {
//   var circleList = document.querySelector('.circle-list');
//   for(var i = 0; i < 25; i++) {
//     circleList.document.write(<img className="circle" src="../img/circle.svg" role="presentation"/>);
//   }
// }

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
      questions: questions
    };
  }

  render() {
    return (
      <div className="box">
        <h3>Älypää</h3>

        <AlypaaQuestion questions={this.state.questions}/>

      </div>
    );
  }
}





export default Alypaa;
