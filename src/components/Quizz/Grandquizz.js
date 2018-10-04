import React, { Component } from 'react';
import update from 'react-addons-update';
import api from "../../api.js";
import Quiz from './quizz.js';
import Result from './result.js';

class Grandquizz extends Component {

    constructor(props) {
        super(props);

        this.state = {
            questionsArray: [],
            counter: 0,
            questionId: 1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount: 0,
            result: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }
    componentDidMount() {
        api
            .get("/quizz")
            .then(response => {
                console.log("here:", this.state)
                console.log("Questions-réponses:", response.data);

                const shuffledAnswerOptions = response.data.map((question) => this.shuffleArray(question.answers));
                this.setState({
                    question: response.data[0].question,
                    answerOptions: shuffledAnswerOptions[0],
                    questionsArray: response.data,
                });
            })
            .catch(err => {
                console.log("------------------", err);
                alert("Oups, something went wrong");
            });
    }

    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    handleAnswerSelected(event) {
       // console.log("handleAnswerSelected event", event.currentTarget.value)
        this.setUserAnswer(event.currentTarget.value);

        if (this.state.questionId < this.state.questionsArray.length) {
           setTimeout(() => this.setNextQuestion(), 300);
             //this.setNextQuestion()
        } else {
            setTimeout(() => this.setResults(this.state.answersCount), 300);
        }
    }

    setUserAnswer(answer) {
        console.log(this.state.answersCount)
        const updatedAnswersCount = parseInt(this.state.answersCount) + parseInt(answer);

        this.setState({
            answersCount: updatedAnswersCount,
            answer: answer
        });
    }

    setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;

        this.setState({
            counter: counter,
            questionId: questionId,
            question: this.state.questionsArray[counter].question,
            answerOptions: this.state.questionsArray[counter].answers,
            answer: ''
        });
    }

    // getResults() {
    //     const answersCount = this.state.answersCount;
    //     const answersCountKeys = Object.keys(answersCount);
    //     const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    //     const maxAnswerCount = Math.max.apply(null, answersCountValues);

    //     return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
    // }

    setResults(result) {
        if (result >= 8) {
            this.setState({ result: "Vous avez gagné"});
        } else {
            this.setState({ result: 'Vous avez perdu' });
        }
    }

    renderQuiz() {
        return (
            <Quiz
                answer={this.state.answer}
                answerOptions={this.state.answerOptions}
                questionId={this.state.questionId}
                question={this.state.question}
                questionTotal={this.state.questionsArray.length}
                onAnswerSelected={this.handleAnswerSelected}
            />
        );
    }

    renderResult() {
        return (
            <Result quizResult={this.state.result} />
        );
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" /> 
          <img src={got} className="App-img" alt="img" />
           */}
                </div>
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
        );

    }

}

export default Grandquizz;