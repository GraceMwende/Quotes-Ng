import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "Tech Quote1", "coding is the future", "NelsonMandela","Grace"),
    new Quote(2, "Tech Quote2", "coding is the future", "NelsonMandela","Grace"),
    new Quote(3, "Tech Quote3", "coding is the future", "NelsonMandela","Grace"),
    new Quote(4, "Tech Quote4", "coding is the future", "NelsonMandela","Grace"),
    new Quote(5, "Tech Quote5", "coding is the future", "NelsonMandela","Grace"),
    new Quote(6, "Tech Quote6", "coding is the future", "NelsonMandela","Grace"),

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
