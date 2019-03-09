import {
  AfterViewInit,
  Component,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { path } from 'ramda';

import { LazyLoadingService } from './shared/lazy-loading.service';

const ExternalFeatureModule = import('external-feature')
  .then(
    path(['ExternalFeatureModule'])
  );

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('container', { read: ViewContainerRef}) container: ViewContainerRef;

  constructor(
    public lazyLoadingService: LazyLoadingService
  ) { }

  load(container: ViewContainerRef) {
    return this.lazyLoadingService.loadComponent(
      ExternalFeatureModule,
      container,
      'ExternalFeatureComponent'
    );
  }

  ngAfterViewInit() {
    this.load(this.container);
  }
}

