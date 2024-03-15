import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  getQuizQuestion(topic: string){
    return this.http.post(`http://localhost:5050/topic`, {topic: topic})
  }
}
