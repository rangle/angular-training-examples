import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  template: `Hello {{ name }} - Language: {{ lang }}`,
})
export class UsersComponent implements OnInit, OnDestroy {
  name: string;
  lang: string;
  paramsSub: Subscription;
  querySub: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe(params => {
      this.name = params['id'];
    });
    this.querySub = this.route.queryParams.subscribe(queryParams => {
      this.lang = queryParams['language'];
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
    this.querySub.unsubscribe();
  }
}
