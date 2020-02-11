import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AdvertisementComponent } from './advertisement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ICICI';
  modalRef: BsModalRef;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    //   const dialogRef = this.dialog.open(SigninModalComponent, {
    //   disableClose: true,
    // });

    const dialogRef = this.dialog.open(AdvertisementComponent, {
      disableClose: true,
    });
  }
}
