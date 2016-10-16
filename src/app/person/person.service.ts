import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Person } from './person';

function mapPersons(response:Response) : Person[]{
    // The response of the API has a results
    // property with the actual results
    // console.log('list to parse:', response.json()); 
    return response.json().map(mappingPerson);
  }

function mappingPerson(r:any) : Person{
    // console.log('person to map:', r);
    let person = new Person(r.id, r.login, r.html_url, r.avatar_url);
    // console.log('Parsed person:', person);
    return person;
  }

@Injectable()
export class PersonService {

  private baseUrl: string = 'https://api.github.com/orgs/Angular';
  
  constructor(private http : Http){
  }

  getAll(): Observable<Person[]>{
    
    let people$ = this.http.get(
        this.baseUrl+'/public_members', 
        {headers: this.getHeaders()}
      )
      .map(mapPersons);
      console.log('Person Loaded', people$);
      return people$;
  }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    return headers;
  }

  

}
