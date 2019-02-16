import { Component, OnInit } from '@angular/core';
import { Raj } from '../raj';
import { KamService } from '../kam.service';
@Component({
  selector: 'app-kamesh',
  templateUrl: './kamesh.component.html',
  styleUrls: ['./kamesh.component.css']
})


export class KameshComponent implements OnInit {



 testlist: Raj[];
  
 
selectedHero: Raj; 
onSelect(data: Raj): void {
  this.selectedHero = data;
}
 
getData(): void {
  this.testlist = this.kamService.getData();
}
 
  constructor(private kamService: KamService) { }
 
  ngOnInit() {
this.getData();

 }

}
