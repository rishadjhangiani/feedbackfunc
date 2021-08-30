import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NewpageComponent } from './newpage/newpage.component';


const routes: Routes = [
  { path: "", redirectTo: "/app", pathMatch: "full" },
  { path: "page", component: NewpageComponent },
  { path: "*", component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
