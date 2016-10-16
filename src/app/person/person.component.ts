import 'rxjs/add/operator/map'
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Person } from './person';
import { PersonService } from './person.service'

@Component({
  selector: 'app-person',
  host: {
    class: 'row'
  },
  inputs: ['article'],
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
 
  people: Person[];
  
  constructor(private _personService: PersonService) {
  }
  
  voteUp(index): boolean {
    this.people[index].voteUp();
    return false;
  }

  voteDown(index): boolean {
    this.people[index].voteDown();
    return false;
  }

  getPerson(){
    this._personService.getAll()
    .subscribe( people => this.people = people ); //Bind to view
    
  }
  ngOnInit() {
    this.getPerson();
  }

}
