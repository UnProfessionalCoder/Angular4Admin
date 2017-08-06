import {
  Directive, ElementRef, Input, OnInit, HostBinding, OnChanges, OnDestroy
} from '@angular/core';

import {Subject, Subscription} from 'rxjs';

import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import EChartOption = echarts.EChartOption;
import {Http} from '@angular/http';


@Directive({
  selector: '[appOptions]',
})
export class EchartsDirective implements OnChanges, OnInit, OnDestroy {
  private chart: ECharts;
  private sizeCheckInterval = null;
  private reSize$ = new Subject<string>();
  private onResize: Subscription;
  @Input() appOptions: EChartOption;

  @HostBinding('style.height.px')
  elHeight: number;

  constructor(private el: ElementRef, private http: Http) {
    this.chart = echarts.init(this.el.nativeElement, 'vintage');
    http.get('/assets/china.json')
      .subscribe(function (data) {
          echarts.registerMap('china', data.json());
        }
      )
    ;
  }


  ngOnChanges(changes) {
    if (this.appOptions) {
      this.chart.setOption(this.appOptions);
    }
  }

  ngOnInit() {
    this.sizeCheckInterval = setInterval(() => {
      this.reSize$.next(`${this.el.nativeElement.offsetWidth}:${this.el.nativeElement.offsetHeight}`);
    }, 100);
    this.onResize = this.reSize$
      .distinctUntilChanged()
      .subscribe((_) => this.chart.resize());

    this.elHeight = this.el.nativeElement.offsetHeight;
    if (this.elHeight < 300) {
      this.elHeight = 300;
    }
  }


  ngOnDestroy() {
    if (this.sizeCheckInterval) {
      clearInterval(this.sizeCheckInterval);
    }
    this.reSize$.complete();
    if (this.onResize) {
      this.onResize.unsubscribe();
    }
  }
}
