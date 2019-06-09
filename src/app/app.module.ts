import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule }          from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';
import {dataApiService} from './services/dataService';

// const routes :Routes=[
 
  
// //   {
// //       path: 'departments', component :DepartmentListComponent
// //   },
// //   {
// //       path: 'employees', component:EmployeeListComponent
// //   },
// //   {
// //     path: 'newFile', component:InlineListComponent
// // }



// ];

@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,   FormsModule, // add the feature module here

    DataTablesModule,
    HttpClientModule
  ],
  providers: [dataApiService],

  bootstrap: [AppComponent]
})
export class AppModule { }
