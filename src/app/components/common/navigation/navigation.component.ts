import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

declare var jQuery: any;

@Component({
    selector: 'app-navigation',
    templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements OnInit {

    constructor(private router: Router) {}

  ngOnInit(): void {
        jQuery('#side-menu').metisMenu();
    }

    activeRoute(routename: string): boolean{
        return this.router.url.indexOf(routename) > -1;
    }


}
