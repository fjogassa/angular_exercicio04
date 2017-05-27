import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../components/app.component';
import { ContactService } from '../services/contact.service';
import { ContactEditComponent } from '../components/contact.edit.component';
import { ContactListComponent } from '../components/contact.list.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, ContactEditComponent, ContactListComponent],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
