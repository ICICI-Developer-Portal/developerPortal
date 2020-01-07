import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToasterService, Toast } from 'angular2-toaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isusername: boolean = false;
  issetpwd: boolean = false;
  is_res_error: any = '';
  constructor(
    private router: Router,
    private adm: LoginService,
    private toasterService: ToasterService,
    private spinnerService: Ng4LoadingSpinnerService,
  ) {}

  ngOnInit() {
    //alert('sdcs');
  }

  adminLogin(username, password) {
    this.isusername = false;
    this.issetpwd = false;
    this.is_res_error = '';
    if (username == '') {
      this.isusername = true;
      return;
    } else if (password == '') {
      this.isusername = false;
      this.issetpwd = true;
      return;
    }
    //call Api then route depends on response
    if (username !== '' && password !== '') {
      this.router.navigate(['admin/home']);
    }
  }

  //   toastrmsg(type ,title) {
  //     var toast: Toast = {
  //       type: type,
  //       title:title,
  //       showCloseButton: true
  //     };
  //     this.toasterService.pop(toast);
  //   }

  //   sessionSet(key, value, expirationInMin = 20) {
  //     let expirationDate = new Date(new Date().getTime() + (60000 * expirationInMin))
  //       let newValue = {
  //       value: value,
  //       expirationDate: expirationDate.toISOString()
  //     }
  //     window.sessionStorage.setItem(key, JSON.stringify(newValue))
  //   }

  //    // Login function
  //  Login_admin(username:any,password:any) {
  //   localStorage.setItem('username',username);
  //   localStorage.setItem('password',password);
  //   this.isusername = false;
  //   this.issetpwd = false;
  //   this.is_res_error ="";
  //   if(username==''){
  //     this.isusername = true;
  //     return;
  //    }
  //    else if(password==''){
  //     this.isusername = false;
  //     this.issetpwd=true;
  //     return;
  //    }
  //     var json = {"username":username,"password":password};
  //     this.spinnerService.show();
  //     this.adm.Login(json)
  //     .subscribe(
  //       (data:any) => {
  //         var response= data._body;
  //         var obj=JSON.parse(response);
  //         if(obj.status==true )
  //         {
  //           this.admin_acccess(obj.data.username)
  //           this.sessionSet("username",obj.data.username);
  //           localStorage.setItem('id', obj.data.id);
  //           localStorage.setItem('email', obj.data.email);
  //           this.adm.sendUserId(obj.data.id);
  //           this.spinnerService.hide();
  //         }
  //         else
  //         {
  //           this.spinnerService.hide();
  //           this.isusername = false;
  //           this.issetpwd = false;
  //           this.is_res_error =obj.message;
  //         }
  //       }
  //    );

  //    }

  //    admin_acccess(username){
  //     this.adm.Admin_access(username)
  //     .subscribe(
  //       (data:any) => {
  //         var response= data._body;
  //         var obj=JSON.parse(response);
  //         if(obj.message=='Success')
  //         {
  //           this.toastrmsg('success', "Successfully Login");
  //           this.router.navigate(['/admin/request']);
  //         }
  //         else
  //         {
  //           this.toastrmsg('error', "Unauthorized");
  //           this.router.navigate(['/admin/login']);
  //         }
  //       }
  //    );
  //    }
}
