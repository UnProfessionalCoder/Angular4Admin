import {Component, OnDestroy, OnInit} from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'app-blank',
    templateUrl: 'blank.template.html'
})
export class BlankComponent implements OnInit , OnDestroy {
    ngOnInit(): void {
      jQuery('body').addClass('gray-bg');
    }
    ngOnDestroy() {
        jQuery('body').removeClass('gray-bg');
    }
}
