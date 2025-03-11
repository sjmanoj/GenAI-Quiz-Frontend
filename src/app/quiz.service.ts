import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  public url = 'http://localhost:5050/topic'

  constructor(private http: HttpClient) { }

  getQuizQuestion(topic: string){
    // return this.http.post(`https://genai-quiz-backend.onrender.com/topic`, {topic: topic})
    return this.http.post(`https://gen-ai-nb5d.onrender.com/topic`, {topic: topic})
  }
}
