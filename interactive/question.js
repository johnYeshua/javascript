
class Question {
    constructor(text, options, corAnsIdx) {
      this.text = text;
      this.options = options;
      this.corAnsIdx = corAnsIdx;
    }
  }

class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.curQueIdx = 0;
      this.score = 0;
    }

    getQuestionIntoQuiz() {
      //current question index starts from zero
      const curQ = this.questions[this.curQueIdx];
      document.getElementById('question').innerHTML = curQ.text;

      const elements = document.getElementById('elements');
      elements.innerHTML = '';
      //iterating over the cuurent question options using for-each loop
      curQ.options.forEach((option, i) => {
        const eleChoices = document.createElement('input');
        eleChoices.type = 'radio';
        eleChoices.name = 'choices';
        const label = document.createElement('label')
        label.style = 'margin-left : 3px';
        label.innerHTML = option;
        const newLine = document.createElement('br');
        //a click event listener with radioclicked callback function
        eleChoices.addEventListener('click', () => this.radioClicked(i));
        elements.appendChild(eleChoices);
        elements.appendChild(label);
        elements.appendChild(newLine);
      });

      document.getElementById('score').innerHTML = `${this.score}`;
      document.getElementById('feedback').innerHTML = '';
    }

    checker(index){
      const elem = document.getElementsByName('choices');
      for(i = 0; i < elem.length; i++) {
         if(elem[i].checked)
            elem[index].checked = true;
            break;
      }
    }

    radioClicked(index) {
      //the current question from the collection of questions
      const ele = this.questions[this.curQueIdx];

      if (index === ele.corAnsIdx) {
        ++this.score;
        document.getElementById('score').innerHTML = `${this.score}`;
        (this.curQueIdx < this.questions.length-1)? document.getElementById('feedback').innerHTML = 'Keep on going!'
          : document.getElementById('feedback').innerHTML = 'It is Ok!';
      } 
      else {
          this.score == 0?
          document.getElementById('feedback').innerHTML = 'You will get opportunity!':
          document.getElementById('feedback').innerHTML = 'You have done well!';
        
      }

      this.curQueIdx++;

      if (this.curQueIdx < this.questions.length) {
        this.checker();
        this.getQuestionIntoQuiz();
      } 
      else {
        document.getElementById('question').innerHTML = 'Congratulations you have finished!';
        document.getElementById('elements').innerHTML = '';
        document.getElementById('next').style.display = 'none';
      }
    }
  }

  const questions = [
    new Question('What batch of SVNA you are in?', ['2023', '2024', '2019'], 2),
    new Question('Are you open to relocation?', ['May be', 'May be not', 'Not at all'], 1),
    new Question('Do you enjoy working remotely?', ['Yes', 'No', 'Hybrid'], 1)
  ];

  // quiz instance
  const quiz = new Quiz(questions);

  quiz.getQuestionIntoQuiz();

  // listen for the next question event
  document.getElementById('next').addEventListener('click', () => quiz.getQuestionIntoQuiz());





