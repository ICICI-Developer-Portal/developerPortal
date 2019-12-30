import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { ToasterService, Toast } from 'angular2-toaster';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { LoginService } from 'src/app/services';
import { PasswordValidation } from '../../layout/header/password.validator';
import { VariablesService } from 'src/app/services/Variables.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Password1Validation } from 'src/app/services/password1.validator';


@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  //styleUrls: ['./index.component.css']
})
export class ResetComponent implements OnInit {
  ChangepasswForm:FormGroup;
  token: any;
 constructor(private route:Router,private activeRoute:ActivatedRoute,private formbuilder:FormBuilder,private spinnerService: Ng4LoadingSpinnerService, private router:Router, private adm:LoginService, private toasterService: ToasterService ) { 
this.activeRoute.queryParams.subscribe(params => {
  this.token=params.token;  
})

 }

 ngOnInit() {
 
  this.ChangepasswForm=this.formbuilder.group({
    password:["",[Validators.required]],
    confirmPassword:["",[Validators.required]],
  },
  {
    validator: Password1Validation.MatchPassword // your validation method
  }
  );
}


toastrmsg(type ,title) {
  var toast: Toast = {
    type: type,
    title:title,
    showCloseButton: true 
  }; 
  this.toasterService.pop(toast);
}

 get password() { return this.ChangepasswForm.get('password'); }
 get confirmPassword() { return this.ChangepasswForm.get('confirmPassword'); }


 // Change Password
 save(){
  try{
  this.ChangepasswForm.value.token=this.token;
  this.adm.resetPassw(this.ChangepasswForm.value)
  .subscribe(
    (data:any) => {
      var response= data._body; 
      var obj=JSON.parse(response);
      if(obj.status==true)
      {   
          this.toastrmsg('success', "Password Change Successfully");
          this.ChangepasswForm.reset();
      }
      else
      {
          this.toastrmsg('error', obj.message);
      } 
    }
  );  
  
  }
  catch{}
}
// End region

}
