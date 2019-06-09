import {Injectable} from '@angular/core';
import {Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { tap } from 'rxjs/operators';
@Injectable()
export class dataApiService{
    constructor(private httpclient:HttpClient){

    }
getdata():Observable<any>

{
//return this.httpclient.get('https://jsonplaceholder.typicode.com/posts/1/comments');
return this.httpclient.get('https://jsonplaceholder.typicode.com/todos');


}
postData(val):Observable<any>
{
    console.log(val);
    const httpOptions={
        headers: new HttpHeaders({'Content-Type':'application/json'})
    };
   return this.httpclient.put('https://jsonplaceholder.typicode.com/posts?userId=${val}',val,httpOptions).pipe(
       tap(postData=>console.log('updated id=${JSON.stringify(postData)}')),
   );
   
}

}