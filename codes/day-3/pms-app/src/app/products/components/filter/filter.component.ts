import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filterText = ''
  @Output() filterTextChanged = new EventEmitter<string>()

  constructor() { }

  updateFilterText(updatedFilterText: string) {
    this.filterText = updatedFilterText
    this.filterTextChanged.emit(this.filterText)
  }
  ngOnInit(): void {
  }

}
