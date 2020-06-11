import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { GameDetail } from './game-detail';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  formData: GameDetail

  constructor(private fb:FormBuilder, private http: HttpClient) { }

}
