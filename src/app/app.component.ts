import { Component } from '@angular/core';
import {Question, questions} from "./flow";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  questions = questions;
  title = 'energy';
  index = 0;

  upgradeQuestion(event: boolean) {
    if (event) {
      this.index ++;
    } else {
      this.index --;
    }

  }

  getNextQuestion(): Question {
    return questions[this.index]
  }
}
