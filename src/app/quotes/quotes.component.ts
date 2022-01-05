import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      1,
      'Tech Quote1',
      'coding is the future1coding is the future1coding is the future1coding is the future1coding is the future1coding is the future1coding is the future1coding is the future1coding is the future1coding is the future1coding is the future1',
      'NelsonMandela',
      'Grace',
      new Date(2021, 11, 30),
      0,
      0
    ),
    new Quote(
      2,
      'Tech Quote2',
      'coding is the future2',
      'NelsonMandela',
      'Grace',
      new Date(2022, 0, 1),
      0,
      0
    ),
    new Quote(
      3,
      'Tech Quote3',
      'coding is the future3',
      'NelsonMandela',
      'Grace',
      new Date(),
      0,
      0
    ),
    new Quote(
      4,
      'Tech Quote4',
      'coding is the future4',
      'NelsonMandela',
      'Grace',
      new Date(),
      0,
      0
    ),
    new Quote(
      5,
      'Tech Quote5',
      'coding is the future5',
      'NelsonMandela',
      'Grace',
      new Date(),
      0,
      0
    ),
    new Quote(
      6,
      'Tech Quote6',
      'coding is the future6',
      'NelsonMandela',
      'Grace',
      new Date(),
      0,
      0
    ),
  ];

  showMore(index: any) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuotes(isComplete: any, index: number) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete ${this.quotes[index].name}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  constructor() {}

  ngOnInit(): void {}

  addNewQuote(quote: Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote);
  }

  upVote(index: any) {
    this.quotes[index].upVote++;
  }

  downVote(index: any) {
    this.quotes[index].downVote++;
  }
}
