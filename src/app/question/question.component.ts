import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../flow";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit{
  @Input() question: Question | undefined
  @Input() maxCount: number = 0;
  @Output() clickFired: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
  }

  ngOnInit(): void {

  }

  SubmitQ(bool: boolean) {
    this.clickFired.next(bool);
  }
}
