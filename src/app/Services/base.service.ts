import { Injectable } from "@angular/core";
import { of, Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient, HttpParams, HttpHeaders } from "@angular/common/http";
import { CommonEndPoints } from 'src/app/Commons/Enums';
@Injectable({
  providedIn: "root"
})
export class BaseService<T> {
  apiBaseUrl = "localhost:8000/api/";

  constructor(private http: HttpClient, private tablename: string) {
    this.apiBaseUrl += tablename;
  }

  AddOrUpdate(entity: T): Observable<T> {
    const Url = this.apiBaseUrl + this.tablename + CommonEndPoints.AddOrUpdate.toString();

    return this.http.post<T>(Url, entity);
  }
  AddOrUpdateList(entity: Array<T>): Observable<T> {
    const Url = this.apiBaseUrl + this.tablename + CommonEndPoints.AddOrUpdateList.toString();
    return this.http.post<T>(Url, JSON.stringify(entity));
  }
  Get(id: number): Observable<T> {
    const Url = this.apiBaseUrl + this.tablename + CommonEndPoints.Get.toString();

    const param = new HttpParams().set("id", id.toString());
    const options = { params: param };

    return this.http.get<T>(Url, options);
  }
  GetAll(): Observable<Array<T>> {
    const Url = this.apiBaseUrl + this.tablename + CommonEndPoints.GetAll.toString();
    return this.http.get<Array<T>>(Url);
  }
  GetList(ids: Array<number>): Observable<Array<T>> {
    const Url = this.apiBaseUrl + this.tablename + CommonEndPoints.GetList.toString();
    const idsJson = JSON.stringify({ ids });
    const param = new HttpParams().set("ids", idsJson);
    const options = { params: param };

    return this.http.get<Array<T>>(Url, options);
  }
  Delete(id: number): Observable<any> {
    const Url = this.apiBaseUrl + this.tablename + CommonEndPoints.Delete.toString();
    const param = new HttpParams().set("id", id.toString());
    const options = { params: param };
    return this.http.delete(Url, options);
  }
}
