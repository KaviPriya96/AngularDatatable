import { Component,OnInit } from '@angular/core';
 import {dataApiService} from './services/dataService';
import { Subject } from 'rxjs';
//declare var $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 title = 'CompleteAngularMaterial';

data:  any=[];
editdata:  any;

dtOptions :DataTables.Settings={};
dtTrigger:Subject<any>=new Subject();
showEditTable :boolean=false;
EditRowID:any='';
saveRowID:any='';
deleteRowID:any='';

// // @ViewChild ('dataTable') table;
// dataTable:any;
// dtOptions:any;

  // constructor()
  // {

  // }
  constructor(private _dataApiService:dataApiService){

  }
  ngOnInit ():void
  {

    this.dtOptions={
    pagingType:'full_numbers',
    pageLength:10

    };

  this._dataApiService.getdata().subscribe(
    dataService=>
    {
this.data=dataService;
this.dtTrigger.next();
    }
  )

// this.dtOptions={
//   "ajax":{
//     url:'https://jsonplaceholder.typicode.com/posts/1/comments',
//     dataSrc:'',
//     type:'GET'

//   },

//   columns:[
//     {
//       //title:'Id',

//       data:'id'
//     },
//     {
//      // title:'Name',

//       data:'name'
//     },
//     {
//       //title:'Body',

//       data:'body'
//     }
   

//   ]
// };
//   this.dataTable=$(this.table.nativeElement);

//  this.dataTable.DataTable(this.dtOptions);
 //this.dataTable.DataTable(this.lstcomments);


}
selectedColor :string ='';
selectChangeHandler(event:any)
{
  this.selectedColor=event.target.value;
}

Edit(val)
{
  this.EditRowID=val;
}
saveTitle(values){
this.saveRowID=values;

this._dataApiService.postData(this.saveRowID).subscribe(
  dataService=>
  {
this.editdata=dataService;
console.log(this.editdata);
})
}


deleteTitle(val){
  console.log(val);
this.deleteRowID=this.data.indexOf(val);
this.data.splice(this.deleteRowID,1);
console.log(this.data);
}
  }

