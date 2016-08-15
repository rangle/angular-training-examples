/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { HelloFromAnotherWorldComponent } from './hello-from-another-world.component';

describe('Component: HelloFromAnotherWorld', () => {
  it('should create an instance', () => {
    let component = new HelloFromAnotherWorldComponent();
    expect(component).toBeTruthy();
  });
});
