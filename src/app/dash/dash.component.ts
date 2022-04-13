import { Component, OnInit } from '@angular/core';
import { myArray } from 'src/assets/array';
import { HandleDataService } from '../handle-data.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss'],
})
export class DashComponent implements OnInit {
  arr!: myArray[];
  title: string = '';
  segmentArr!: myArray[];
  i: number = 4;
  page: number = 1;
  hasNextPage: boolean = false;

  constructor(private dataSrv: HandleDataService) {}

  ngOnInit(): void {
    this.dataSrv.getData('anime', this.page).subscribe((data) => {
      this.arr = data.data.slice();
      this.hasNextPage = data.pagination.has_next_page;
      console.log(data.data[0]);
    });
  }

  loadMore(): void {
    this.i += 3;
  }

  next(step: number): void {
    window.scrollTo(0, 0);
    this.page += step;
    this.i = 4;
    this.ngOnInit();
  }
}
