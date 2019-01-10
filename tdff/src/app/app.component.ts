import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template driven form';
  intrestedHasError = true;
  public topic = ['angular','react','vue'] ;
  isSubmited = false;
  errorMassage ='';
  userModel = new User('rahul','rahul@gmail.com',1234567,'dafault','morning',true);

  constructor(private enrollment : EnrollmentService){}

  validateTopic(value){
    if(value=="dafault"){
      this.intrestedHasError = true ;
    }else{
      this.intrestedHasError = false ;
    };
   }
   onSubmit(userForm){
        //alert('hii');
        //console.log('hiiiii',userForm);
        this.isSubmited = true ;
        this.enrollment.enroll(this.userModel)
        .subscribe(data=>console.log('success',data),
        error=> this.errorMassage =error.statusText) ; 
   }
}
