import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { Permission } from '../Entities/Permission';

@Injectable({
  providedIn: 'root'
})
export class PermissionService extends BaseService<Permission>{
  constructor(http:HttpClient) {
    super(http,"Permission");
  }
}

