import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuizService } from './quiz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  public question: string = ''
  public options: Array<string> = []
  public answer: string = ''
  public answerGiven: boolean = false
  public optionColor: string = ''
  public answerColor: string = ''
  public score: number = 0
  
  constructor(private fb: FormBuilder, private quizService: QuizService){}

  quizForm = this.fb.group({
    questionInput: ['Python']
  })

  ngOnInit(): void {
    this.onSubmit()
  }
  
  onSubmit(){
    // console.log(this.quizForm.value.questionInput);
    let topic = this.quizForm.value.questionInput as string
    this.quizService.getQuizQuestion(topic).subscribe((res: any)=>{
      console.log(res);
      this.answerGiven = false
      if(res){
        this.question = res.key.question
        this.options = res.key.options
        this.answer = res.key.answer
        console.log(this.options)
      }    
    })
  }

  selectOption(option: string){
    console.log(this.answer, option);
    if(option){
      this.answerGiven = true
      if(option === this.answer){
        this.answerColor = 'green'
        this.score+=4
      }else{
        this.answerColor = 'red'
        this.score-=2
      }
    }
  }

  resetGame(){
    this.quizForm.reset()
    this.score = 0
    this.answerGiven = false
    this.question = ''
  }
}
