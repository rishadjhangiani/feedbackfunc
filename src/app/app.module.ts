import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidebarModule } from 'ng-sidebar';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedbackPopComponent } from './feedback-pop/feedback-pop.component';

import { EmailService } from './email.service';
import { HttpClientModule } from '@angular/common/http';
import { NewpageComponent } from './newpage/newpage.component';
import { HomeComponent } from './home/home.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { OptionPipe } from './option.pipe';
import { FeedbackComponent } from './feedback/feedback.component';




@NgModule({
  declarations: [AppComponent, NewpageComponent, HomeComponent, OptionPipe, FeedbackPopComponent, FeedbackComponent],
  imports: [
    DragDropModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSidenavModule,
    SidebarModule.forRoot(),
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
