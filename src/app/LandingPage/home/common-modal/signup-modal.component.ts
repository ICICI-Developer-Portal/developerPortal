import { Component, OnInit, TemplateRef, Inject } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { LoginService } from 'src/app/services';
import { SessionService } from 'src/app/services/session.service';
import { Router } from '@angular/router';
import { Toast, ToasterService } from 'angular2-toaster';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-common-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signin-modal.component.css'],
})
export class SignupModalComponent implements OnInit {
  modalRef3: BsModalRef;
  isusername: boolean = false;
  issetpwd: boolean = false;
  is_res_error: any = '';
  loginResponse: any;
  show: boolean = false;
  constructor(
    private spinnerService: Ng4LoadingSpinnerService,
    private adm: LoginService,
    private SessionService: SessionService,
    private toasterService: ToasterService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any, //public dialogRef: MatDialogRef<SigninModalComponent>,
  ) {}

  ngOnInit() {}

  toastrmsg(type, title) {
    var toast: Toast = {
      type: type,
      title: title,
      showCloseButton: true,
    };
    this.toasterService.pop(toast);
  }
  // forget Password function
  forgot(username: any) {
    if (username == '') {
      this.toastrmsg('error', 'Enter Username');
      return;
    }
    var json = { username: username };
    this.spinnerService.show();
    this.adm.forgetPassw(json).subscribe((data: any) => {
      var response = data._body;
      var obj = JSON.parse(response);
      if (obj.status == true) {
        this.toastrmsg('success', ' Please check your mail');
        this.router.navigate(['/index']);
        this.modalRef3.hide();
        this.spinnerService.hide();
      } else {
        this.toastrmsg('error', obj.message);
      }
    });
  }

  //   onConfirmClick(): void {
  //     this.dialogRef.close(true);
  //   }

  //   onCancelClick(): void {
  //     this.dialogRef.close(false);
  //   }
}
