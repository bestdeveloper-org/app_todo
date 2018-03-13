import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CounterComponent } from './ui/counter/counter.component';
import { CounterWithServiceComponent } from './ui/counter-with-service/counter-with-service.component';
import { CounterService } from './services/counter/counter.service';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { ValidationExampleComponent } from './ui/user/validation-example/validation-example.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterWithServiceComponent,
    HeaderComponent,
    FooterComponent,
    ValidationExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
