import { Quiz } from './quiz.js';

const quiz = new Quiz([]);

quiz.processQueDataOfAPI().then(() => { 
    document.getElementById('restart').style.display = 'none';
    quiz.getQuestionIntoQuiz();
});

document.getElementById('next').addEventListener('click', () => quiz.getQuestionIntoQuiz());
document.getElementById('restart').addEventListener('click', () => quiz.restartGame());

