import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges, OnInit {

  width: number = 100
  @Input() rating?: number;
  @Output() ratingChanged = new EventEmitter<number>()

  constructor() {
    console.log('start created')
  }
  updateRating() {
    const newRating = Number(prompt('enter new rating: ', this.rating?.toString()))
    //this.rating = newRating
    this.ratingChanged.emit(newRating)
  }
  ngOnInit(): void {
    console.log('Init', this.rating)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes', this.rating)
    if (this.rating) {
      this.width = this.rating * 14.5
    }
  }
}
