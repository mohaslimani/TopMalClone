import { Component, OnInit } from '@angular/core';
import { myArray } from 'src/assets/array';
import { HandleDataService } from '../handle-data.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  arr! : myArray[];
  title: string = '';

  constructor(private dataSrv: HandleDataService) {
  }

  ngOnInit(): void {
    this.dataSrv.getData('manga').subscribe(data => {this.title = data.data[0].title; this.arr = data.data.slice(); console.log(data.data[0])});
  }
}

