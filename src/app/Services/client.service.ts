import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Client } from '../Entities/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService<Client>{

  constructor(http:HttpClient) {
    super(http,"Client");
  }
}
