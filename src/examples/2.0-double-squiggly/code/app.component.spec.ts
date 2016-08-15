/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AppComponent } from './index';

describe('App: ChapterTemplate', () => {
  beforeEach(() => {
    addProviders([AppComponent]);
  });

  it('should create the app',
    inject([AppComponent], (app: AppComponent) => {
      expect(app).toBeTruthy();
    }));

  it('should have as title a string with length',
    inject([AppComponent], (app: AppComponent) => {
      expect(app.hello.length > 0).toBe(true);
    }));
});
