import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mian1view',
  templateUrl: 'main1-view.template.html'
})
export class Main1ViewComponent implements OnInit {

  options: any = {
    title: {text: 'ECharts入门示例'},
    tooltip: {},
    legend: {data: ['销量']},
    xAxis: {data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']},
    yAxis: {},
    series: [{name: '销量', type: 'bar', data: [5, 20, 36, 10, 10, 20]}]
  };


  someArrayOfThings = [1, 2, 3, 3, 3, 3, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12, 13, 14, 15];
  p = 1;
  collection: any[] = this.someArrayOfThings;
  constructor() {

  }

  ngOnInit() {
    // const draw = SVG('drawing');
    // draw.rect(100, 100).move(100, 50).fill('#f06');
  }
}
