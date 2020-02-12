import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { AppathonSignupComponent } from './appathon-signup/appathon-signup.component';

@Component({
  selector: 'app-appathon-landing',
  templateUrl: './appathon-landing.component.html',
  styleUrls: ['./appathon-landing.component.css'],
})
export class AppathonLandingComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  registerForAppathon() {
    const dialogRef = this.dialog.open(AppathonSignupComponent, {
      disableClose: true,
    });
    return false;
  }
}
