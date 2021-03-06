import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Choose correct answer';
	 questions: Object[] = [
{
	"id": "1",
	"content": "Could you tell me your surname?",
	"option": [
	            {
	            	"asw": "a", 
	            	"choose": "Would you like me to spell it?"
	            }, 
	            {
	            	"asw": "b", 
	            	"choose": "Do you like my family name?"
	            }, 
	            {
	            	"asw": "c", 
	            	"choose": "How do I say that?"
	            }
          	],
	"answer": "a"
	},
	{
	"id": "2",
	"content": "This plant looks dead.",
	"option": [
	            {
	            	"asw": "a", 
	            	"choose": "It's in the garden."
	            }, 
	            {
	            	"asw": "b", 
	            	"choose": "It only needs some water."
	            }, 
	            {
	            	"asw": "c", 
	            	"choose": "It's sleeping."
	            }
          	],
	"answer": "a"
	},
	{
	"id": "3",
	"content": " I hope it doesn't rain.",
	"option": [
	            {
	            	"asw": "a", 
	            	"choose": "Of course not."
	            }, 
	            {
	            	"asw": "b", 
	            	"choose": "Will it be wet?"
	            }, 
	            {
	            	"asw": "c", 
	            	"choose": "So do I."
	            }
          	],
	"answer": "c"
	},
	{
	"id": "4",
	"content": "Are you going to come inside soon?",
	"option": [
	            {
	            	"asw": "a", 
	            	"choose": "For ever."
	            }, 
	            {
	            	"asw": "b", 
	            	"choose": "Not long."
	            }, 
	            {
	            	"asw": "c", 
	            	"choose": "In a minute."
	            }
          	],
	"answer": "b"
	},
	{
	"id": "5",
	"content": " Who gave you this book, Lucy?",
	"option": [
	            {
	            	"asw": "a", 
	            	"choose": "I bought it."
	            }, 
	            {
	            	"asw": "b", 
	            	"choose": "For my birthday."
	            }, 
	            {
	            	"asw": "c", 
	            	"choose": "My uncle was."
	            }
          	],
	"answer": "b"
	},
	{
	"id": "6",
	"content": "Shall we go out for pizza tonight?",
	"option": [
	            {
	            	"asw": "a", 
	            	"choose": "I know that."
	            }, 
	            {
	            	"asw": "b", 
	            	"choose": "It's very good."
	            }, 
	            {
	            	"asw": "c", 
	            	"choose": "I'm too tired."
	            }
          	],
	"answer": "c"
	},
	{
	"id": "7",
	"content": "Do you mind if I come too??",
	"option": [
	            {
	            	"asw": "a", 
	            	"choose": "That's fine!"
	            }, 
	            {
	            	"asw": "b", 
	            	"choose": "I'd like to?"
	            }, 
	            {
	            	"asw": "c", 
	            	"choose": "I don't know if I can."
	            }
          	],
	"answer": "a"
	},
	{
	"id": "8",
	"content": "There's someone at the door.",
	"option": [
	            {
	            	"asw": "a", 
	            	"choose": "Can I help you?"
	            }, 
	            {
	            	"asw": "b", 
	            	"choose": "Well, go and answer it then."
	            }, 
	            {
	            	"asw": "c", 
	            	"choose": "He's busy at the moment."
	            }
          	],
	"answer": "c"
	},
	{
	"id": "9",
	"content": " How much butter do I need for this cake?",
	"option": [
	            {
	            	"asw": "a", 
	            	"choose": "I'd like one."
	            }, 
	            {
	            	"asw": "b", 
	            	"choose": "I'll use some."
	            }, 
	            {
	            	"asw": "c", 
	            	"choose": "I'm not sure."
	            }
          	],
	"answer": "c"
	},
	{
	"id": "10",
	"content": " How long are you here for?",
	"option": [
	            {
	            	"asw": "a", 
	            	"choose": "Since last week."
	            }, 
	            {
	            	"asw": "b", 
	            	"choose": "Ten days ago."
	            }, 
	            {
	            	"asw": "c", 
	            	"choose": "Till tomorrow."
	            }
          	],
	"answer": "b"
	}
];
	 correct: number;
   saveStatus(question: Object, choice:String) {
    question['choice'] = choice;
  }

  check() {
    this.correct = 0;
    for (let i = 0; i < this.questions.length; i ++){
      if(this.questions[i]['choice'] == this.questions[i]['answer']){
        this.correct++;
        this.questions[i]['status'] = "correct";
      }else{
        this.questions[i]['status'] = "incorrect";
      }
    }
  }
}
