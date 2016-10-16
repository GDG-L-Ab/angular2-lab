/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PersonComponent } from './person.component';
import { PersonService } from './person.service';

describe('Component: Article', () => {
  it('should create an instance', () => {
    let _personService: PersonService;
    let component = new PersonComponent(_personService);
    expect(component).toBeTruthy();
  });
});
