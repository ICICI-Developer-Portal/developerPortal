import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AppathonService } from 'src/app/services/appathon.service';
import { Router } from '@angular/router';
import { ToasterService, Toast } from 'angular2-toaster';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-appathon-dashboard',
  templateUrl: './appathon-dashboard.component.html',
  styleUrls: ['./appathon-dashboard.component.css']
})


export class AppathonDashboardComponent implements OnInit {

  //initialize form group
  readonly formGroup = new FormGroup({
    emailFormControl1 : new FormControl('', [
      // Validators.required,
      Validators.email,
    ]),
    emailFormControl2 : new FormControl('', [
      // Validators.required,
      Validators.email,
    ]),
    emailFormControl3 : new FormControl('', [
      // Validators.required,
      Validators.email,
    ]),
    emailFormControl4 : new FormControl('', [
      // Validators.required,
      Validators.email,
    ]),
    emailFormControl5 : new FormControl('', [
      // Validators.required,
      Validators.email,
    ]),
    teamName : new FormControl('', [
      Validators.required,
    ]),
    company : new FormControl('', [
      Validators.required,
    ]),
    location : new FormControl('', [
      Validators.required,
    ]),
    name1 : new FormControl('', [
      // Validators.required,
    ]),
    name2 : new FormControl('', [
      // Validators.required,
    ]),
    name3 : new FormControl('', [
      // Validators.required,
    ]),
    name4 : new FormControl('', [
      // Validators.required,
    ]),
    name5 : new FormControl('', [
      // Validators.required,
    ]),
    mobile1 : new FormControl('', [
      // Validators.required,
      Validators.pattern("[0-9]{10}")
    ]),
    mobile2 : new FormControl('', [
      // Validators.required,
      Validators.pattern("[0-9]{10}")
    ]),
    mobile3 : new FormControl('', [
      // Validators.required,
      Validators.pattern("[0-9]{10}")
    ]),
    mobile4 : new FormControl('', [
      // Validators.required,
      Validators.pattern("[0-9]{10}")
    ]),
    mobile5 : new FormControl('', [
      // Validators.required,
      Validators.pattern("[0-9]{10}")
    ]),
  })
  
  //form controls
  get emailFormControl1() { return this.formGroup.get('emailFormControl1') }
  get emailFormControl2() { return this.formGroup.get('emailFormControl2') }
  get emailFormControl3() { return this.formGroup.get('emailFormControl3') }
  get emailFormControl4() { return this.formGroup.get('emailFormControl4') }
  get emailFormControl5() { return this.formGroup.get('emailFormControl5') }
  get mobile1() { return this.formGroup.get('mobile1') }
  get mobile2() { return this.formGroup.get('mobile2') }
  get mobile3() { return this.formGroup.get('mobile3') }
  get mobile4() { return this.formGroup.get('mobile4') }
  get mobile5() { return this.formGroup.get('mobile5') }
  get name1() { return this.formGroup.get('name1') }
  get name2() { return this.formGroup.get('name2') }
  get name3() { return this.formGroup.get('name3') }
  get name4() { return this.formGroup.get('name4') }
  get name5() { return this.formGroup.get('name5') }
  get teamName() { return this.formGroup.get('teamName') }
  get company() { return this.formGroup.get('company') }
  get location() { return this.formGroup.get('location') }




  matcher = new MyErrorStateMatcher();

  //initialize form data
formData = {
  username : '',
  team_name: '',
  team_size: '',
  company_name: '',
  location: '',
  
  team_captain_name: '',
  team_captain_email: '',
    team_captain_mobile: '',
    team_members_name: '',
    team_members_mobile: '',
    team_members_email: '',
    ideaLink: '',
    finalSubmissionLink: ''

}
team_members_name = [];
    team_members_mobile = [];
    team_members_email = [];
  constructor(
    private appathonService: AppathonService,
    private router: Router,
    private toasterService: ToasterService,
    private spinnerService: Ng4LoadingSpinnerService,
  ) { }

  ngOnInit() {
    if(localStorage.getItem('role') != 'Appathon' || !localStorage.getItem('appathonusername')){
      this.router.navigate(['/index']);
    }
    this.spinnerService.show();
    this.getAppathonDetails();
  }

  toastrmsg(type ,title) {
    var toast: Toast = {
      type: type,
      title:title,
      showCloseButton: true 
    }; 
    this.toasterService.pop(toast);
  }

  //get appathon data
  getAppathonDetails() {
    let userName = localStorage.getItem('appathonusername');
    this.appathonService.fetchAppathonDetails(userName).subscribe((data: any) => {
      let response = JSON.parse(data._body);
      if(response.status){        
        this.formData.username = response.data.Username
        this.formData.team_name = response.data.TeamName
        this.formData.team_size = response.data.TeamSize
        this.formData.company_name = response.data.CompanyName
        this.formData.location = response.data.Location
        this.formData.team_captain_name = response.data.TeamCaptainName;
        this.formData.team_captain_mobile = response.data.TeamCaptainMobile
        this.formData.team_captain_email = response.data.TeamCaptainEmail
        this.team_members_email = JSON.parse(response.data.TeamMembersEmail);
        this.team_members_name = JSON.parse(response.data.TeamMembersName);
        this.team_members_mobile = JSON.parse(response.data.TeamMembersMobile);
        this.formData.ideaLink = response.data.IdeaLink
        this.formData.finalSubmissionLink = response.data.FinalSubmissionLink
        this.spinnerService.hide();
      }
      else {
        this.spinnerService.hide();
        this.toastrmsg('error', response.message);
        this.router.navigate(['/index']);
      }
    },
    (err) =>{
      this.spinnerService.hide();
      this.toastrmsg('error', "Something went wrong!");
      this.router.navigate(['/index']);
    });
  }

  


  //reset form
  reset = () => {
    this.spinnerService.show();

    this.formGroup.reset();
    this.getAppathonDetails();
  }

  //submit form data
  submit = () => {
    this.spinnerService.show();

    if(!this.formGroup.valid){
      return;
    }
    let count  = 0;
    let tempName = [];
    let tempMobile = [];
    let tempEmail = [];
    this.team_members_name.forEach((each, index) =>{
      
      if(each && this.team_members_email[index] && this.team_members_mobile[index]){
        tempName.push(each);
        tempEmail.push(this.team_members_email[index]);
        tempMobile.push(this.team_members_mobile[index]);
      }
      else count++; 
    });
    this.formData.team_members_email = JSON.stringify(tempEmail);
    this.formData.team_members_mobile = JSON.stringify(tempMobile);
    this.formData.team_members_name = JSON.stringify(tempName);
    this.formData.team_size = count.toString();
    
    this.appathonService.update_appathon_details(JSON.parse(JSON.stringify(this.formData))).subscribe((data: any) => {
      let response = JSON.parse(data._body);
      if(response.status){
        this.toastrmsg('success', 'Successfully Updated');
        this.reset();
        
      }
      else {
        this.spinnerService.hide();
        this.toastrmsg('error', response.message);
        this.router.navigate(['/index']);
      }
    },
    (err) =>{
      this.spinnerService.hide();
      this.toastrmsg('error', "Something went wrong!");
    });
  }


  //file upload handle
  public handleFileInput(files: FileList) {

    let fileToUpload = files.item(0);
    let temp = fileToUpload.name.split(".");
    let fileType = temp[temp.length-1];
    const ALLOWED_TYPES =  [
      'pdf',
      'ppt',
      'pptx'
    ];
    
    if(ALLOWED_TYPES.indexOf(fileType.toLowerCase()) >= 0 ){

      console.log(files[0])
    }
    else{
      this.toastrmsg('error', "Invalid file type!");
    }
  }

  comingSoon(){
    this.toastrmsg('info', "Coming Soon!");
  }

}
