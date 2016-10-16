import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonService } from './person/person.service';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './shared/header/header.component';
import { ListComponent } from './article/list/list.component'

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    ArticleComponent,
    HeaderComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'PersonOfAngular',
        component: PersonComponent
      },
      {
        path: 'Article',
        component: ArticleComponent
      },
      {
        path: '',
        redirectTo: '/Article',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
