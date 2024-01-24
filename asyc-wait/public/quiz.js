import { Question } from "./questions.js";
export class Quiz {
    constructor(questions) {
      this.questions = questions;
      this.curQueIdx = 0;
      this.score = 0;
    }

    async getQuestionsFromExpAPI() {
        const endPointUri = 'http://localhost:3000/questions';
        try{
          const res = await fetch(endPointUri);
          if(!res.ok){
            throw new Error("Question dat not avaliable!");
          }
          const queData = await res.json();
          return queData;
        }
        catch(error)
        {
          console.error('Error getting data:', error);
        }
        return null;
    }

    async processQueDataOfAPI() {
      const queLoad  = await this.getQuestionsFromExpAPI();
      console.log(queLoad);
      this.questions = queLoad.map(obj => {
        console.log("***********************************");
        console.log(obj.text);
        console.log(obj.options);
        console.log(obj.corAnsIndex);
        console.log("***********************************");
        return new Question(obj.text, obj.options, obj.corAnsIndex);
      });
      console.log(this.questions);
    }

    restartGame(){
      location.reload();
    }

    getQuestionIntoQuiz() {
      document.getElementById('restart').style.display = 'none';
      //current question index starts from zero
      const curQ = this.questions[this.curQueIdx];
      document.getElementById('question').innerHTML = curQ.text;
      const fadeIn = 'fade-in';
      const elements = document.getElementById('elements');
      elements.classList.add(fadeIn);
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
      setTimeout(()=>{elements.classList.remove(fadeIn)}, 500);
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
        document.getElementById('restart').style.display = 'inline';
      }
    }
  }
  

  