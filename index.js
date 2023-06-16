let formData= document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll('.error-message')
let emptyFieldMessages = document.querySelectorAll('.empty-field')
let firstName ,lastName, email, password; //for email loics and called by field switc ,case
let fnTarget, lnTarget, eTarget, passTarget;        //for checking the inserted value errors
let showPassButton=document.querySelector(".btn");                        //button to shwo pass
let field;

let fnFlag, lnFlag, emailFlag, passFlag;

let nameRegex =/^[a-z]+$/i;                                                          //for name
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;                      //for email 
let passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;         //for password


for(let errorMessage of errorMessages){  
    errorMessage.classList.add("d-none");                                  //error <always remove dot in classlits case>
}

for(let emptyFieldMessage of emptyFieldMessages){  
    emptyFieldMessage.classList.add("d-none");                            //empty field
}







formData.addEventListener("keyup",(event) =>{ 
event.preventDefault();
field = event.target.dataset.key;

switch(field){
case "firstName":
    firstName = event.target.value;
    fnTarget =event.target;
    break;
case "lastName":
    lastName = event.target.value;
    lnTarget =event.target;
    break;
case "email":
    email = event.target.value;
    eTarget = event.target;
    break;
case "password":
    password = event.target.value;
    passTarget = event.target;
    break;

    default:
    firstName = lastName = email = password ="";
    break;
    
}


})

submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log(firstName, lastName, email, password);




    if(firstName){               
        emptyFieldMessages[0].classList.add("d-none");                           //first name logic
        if(!nameRegex.test(firstName)){
            errorMessages[0].classList.remove("d-none");   //removes the done and shows html text
             fnTarget.classList.add("error");              //adds error from the css
            fnFlag=false;
             console.log("You must enter alpabets");
        }
        else{
            fnFlag=true;
            errorMessages[0].classList.add("d-none");      //if true,then dnone is added(nothing from html text)
        console.log("First Name is accepted");
        }           }

    else{
        emptyFieldMessages[0].classList.remove("d-none");   //empty shows to write the input by adding (innr html)
        console.log("Please fill First Name");
    }




    if(lastName){            
        emptyFieldMessages[1].classList.add("d-none");                                  //last name logic
        if(!nameRegex.test(lastName)){
           errorMessages[1].classList.remove("d-none");
           lnFlag=false;
            console.log("You must enter aplhabets");  }
        else{
        errorMessages[1].classList.add("d-none");
         lnFlag =true;
            console.log("Last Name is accepted");
        }}
        
        else{
            emptyFieldMessages[1].classList.remove("d-none");
            console.log('Please fill Last Name');}
    



      if(email){               
        emptyFieldMessages[2].classList.add("d-none");                                    //email logic
        if(!emailRegex.test(email)){
            emailFlag =false;
            errorMessages[2].classList.remove("d-none");
            console.log("You must enter valid E-mail")  }

        else{
            errorMessages[2].classList.add("d-none");
            emailFlag=true;
            console.log("E-mail is accepted")   }     }

        else{
        emptyFieldMessages[2].classList.remove("d-none");
        console.log("Please fill E-mail")   }
     



    if(password){                                                       //password logic
        emptyFieldMessages[3].classList.add("d-none");

        if(!passwordRegex.test(password)){
            errorMessages[3].classList.remove("d-none");
            passFlag=false;
            console.log("You must enter valid password")    }

        else{
            errorMessages[3].classList.add("d-none");
            passFlag =true;
            console.log("Password is accepted")    }     } 

    else{
        emptyFieldMessages[3].classList.remove("d-none");
        console.log("Please fill Password")   }

        if(fnFlag && lnFlag && emailFlag && passFlag){
            window.location.href= "/valid.html"
         }

    } );


   showPassButton.addEventListener("click",(event)=>{                   
   event.preventDefault();
   if(passTarget.getAttribute("type")==="text"){
    passTarget.setAttribute("type","password");
   }
   else{
    passTarget.setAttribute("type","text");
   }
    });

  
