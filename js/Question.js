class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("Enter Correct Option No....")



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement("h3");
    this.option1  = createElement("h4");
    this.option2  = createElement("h4");
    this.option3  = createElement("h4");
    this.option4  = createElement("h4");

    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.input2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();


  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question:- What starts and ends with the letter 'E' , but has only one letter?");
    this.question.position(100,75);

    this.option1.html("1.Everyone");
    this.option1.position(100,100);

    this.option2.html("2.Envelope");
    this.option2.position(100,125);

    this.option3.html("3.Estimate");
    this.option3.position(100,150);

    this.option4.html("4.Example");
    this.option4.position(100,175);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.title.position(300,100);
      this.question.hide();
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
      this.option1.hide();
      this.option3.hide();
      this.option2.hide();
      this.option4.hide();
      var message = `Hello ${this.input1.value()},
      </br> Your Answer has been submitted,
      </br> Thank You`
      this.message.html(message);
      this.message.position(200,280);


    })


  }
}
