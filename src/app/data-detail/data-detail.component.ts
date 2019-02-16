import { Component, OnInit, Input } from '@angular/core';
import { Raj } from '../raj';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css']
})
export class DataDetailComponent implements OnInit {
  @Input() rap: Raj;
  constructor() { }

  ngOnInit() {
  }

}
