import { Injectable } from '@angular/core';
import {
  Http,
  Headers,
  RequestOptions,
  Response,
  RequestMethod,
} from '@angular/http';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Config } from '../config/config';
import { Alert } from 'selenium-webdriver';

import { Observable, fromEvent, merge, of, Subject, Subscription } from 'rxjs';
import { timeout, catchError, map, mapTo } from 'rxjs/operators';

@Injectable()
export class LoginService {
  apiUrl: string;
  private user_id = new Subject<any>();
  private user_name = new Subject<any>();

  constructor(
    private http: Http,
    private config: Config,
    private HttpClient: HttpClient,
    private router: Router,
  ) {
    this.apiUrl = config.apiUrl;
  }

  sendUserId(id: string) {
    this.user_id.next(id);
    this.user_name.next(localStorage.getItem('username'));
  }
  check_user_log() {
    if (localStorage.getItem('id') == '' || !localStorage.getItem('id')) {
      this.sendUserId('');
      this.LogoutPortal().subscribe(
        res => {
          this.router.navigate(['/index']);
        },
        err => {
          this.router.navigate(['/index']);
        },
      );
    }
  }
  clearUserId() {
    this.user_id.next();
  }

  getUserId(): Observable<any> {
    this.user_name.next(localStorage.getItem('username'));
    return this.user_id.asObservable();
  }

  sendUserName(id: string) {
    this.user_name.next(id);
  }

  clearUserName() {
    this.user_name.next();
  }

  getUserName(): Observable<any> {
    return this.user_name.asObservable();
  }

  //#region Login Api
  Login(data) {
    var key;
    var query = '';
    for (key in data) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'login', query, options);
  }

  LoginPortal(json) {
    let options = {
      withCredentials: true,
    };
    const formData = new FormData();
    formData.append('dev-auth', 'true');
    formData.append('username', json['username']);
    formData.append('password', json['password']);
    formData.append('reset-username', '');
    return this.HttpClient.post<any>(
      'https://sandbox.icicibank.com/login',
      formData,
      options,
    );
  }

  LogoutPortal() {
    let options = {
      withCredentials: true,
    };
    return this.HttpClient.get<any>(
      'https://sandbox.icicibank.com/logout',
      options,
    );
  }

  check_log() {
    return localStorage.getItem('id') ? true : false;
  }
  //  #End region

  //#region Signup Api
  sign_up(data) {
    var key;
    var query = '';
    for (key in data) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'sign_up', query, options);
  }
  //  #End region

  sign_upjira(data) {
    var key;
    var query = '';
    // for (key in data) { query += encodeURIComponent(key)+"="+encodeURIComponent(data[key])+"&"; }
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      'https://sandbox.icicibank.com/rest/doc/save-portal-details ',
      data,
      options,
    );
  }

  //#region Signup Api
  SendOTP(data) {
    var key;
    var query = '';
    for (key in data) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'send_otp', query, options);
  }
  //  #End region

  //#region Signup Api
  SendEmailOTP(data) {
    var key;
    var query = '';
    for (key in data) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'email_otp', query, options);
  }
  //  #End region

  //#region Signup Api
  verify_otp(data: any = {}, otp_txt_id) {
    var key;
    var query = '';
    data['txn_no'] = otp_txt_id;
    for (key in data) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
    }

    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'verify_otp', query, options);
  }
  //  #End region
  //#region Forget Api
  forgetPassw(data) {
    var key;
    var query = '';
    for (key in data) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'forget_password', query, options);
  }
  //  #End region

  // User profile getdata
  Usergetdata(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    //console.log(query);
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'profile_get', query, options);
  }
  // End region
  // Save User profile
  SaveUserdata(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    //console.log(query);
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'profile_set', query, options);
  }
  // End region

  // User Change Password
  ChangePassw(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'password', query, options);
  }
  // End region

  // User Check Password
  CheckPassw(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'chk_pass', query, options);
  }
  // End region

  // User get token mail verification
  verify_mail(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'email_verify', query, options);
  }
  // End region

  //  Get application List
  applicationList(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'my_applications', query, options);
  }
  // End region

  //  Add New application
  add_newApplication(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'get_application', query, options);
  }
  // End region

  saveAddAppl(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'save_application', query, options);
  }

  deleteApp(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'del_application', query, options);
  }

  Exists_Email(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'check_email', query, options);
  }

  Exists_Username(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'check_username', query, options);
  }

  // Get api-details of documentation page

  api_details(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'load-api-data', query, options);
    //return this.http.get(this.apiUrl+'load-api-data'+json);
  }

  // Get error code of documentation page

  error_code() {
    //console.log(json);
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'load-error-codes', {}, options);
  }

  // Get sample packet data

  Sample_packet(data) {
    let options = {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded',
      ),
    };
    let body = new URLSearchParams();
    body.set('id', data['id']);
    // console.log(body.toString());
    return this.HttpClient.post(
      this.apiUrl + 'load-api-packet',
      body.toString(),
      options,
    );
  }

  //merchant-onboarding Strat
  Merchant_onboarding(formdata) {
    var key;
    let headers = new Headers({ 'Content-Type': false });
    return this.http.post(
      'https://developerapi.icicibank.com:8443/api/v1/jira',
      formdata,
    );
  }
  //Merchant-onboarding End

  // Get All API Start
  Get_All_API() {
    var json = {};
    var key;
    var query = '';
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'get-api-data-resp', {}, options);
  }
  // Get All API Start

  domain_and_apis() {
    var json = {};
    var key;
    var query = '';
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'domain-and-apis', {}, options);
  }

  feedback(json) {
    var key;
    var query = '';
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      'https://developer.icicibank.com/rest/feedback',
      query,
      options,
    );
  }

  // User Check Password
  resetPassw(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'reset_password', query, options);
  }

  Onboardrequestsuser() {
    var query = 'username=' + localStorage.getItem('username');
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'fetch-jiraid-v2', query, options);
  }

  Onboardrequests() {
    var query = 'username=' + localStorage.getItem('username');
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'fetch-pending-jiraid', query, options);
  }

  approvals() {
    var query = 'username=' + localStorage.getItem('username');
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'fetch-jiraid-v2', query, options);
  }

  GetPendingReg() {
    var query = 'username=' + localStorage.getItem('username');
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      this.apiUrl + 'fetch-pending-userReg',
      query,
      options,
    );
  }

  ApproveReg(json) {
    var query = '';
    var key;
    for (key in json) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(json[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      this.apiUrl + 'approve-pending-userReg',
      query,
      options,
    );
  }

  Admin_access(username) {
    var query = 'username=' + username;
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'has-admin-access', query, options);
  }
  downloadCertificate(filePath) {
    var query = filePath;
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    let options = new RequestOptions({ headers: headers });
    return this.http.post(
      'https://developer.icicibank.com/' + 'download',
      query,
      options,
    );
  }

  getCompanyName(companyName) {
    return this.http.get(
      'https://developer.icicibank.com/rest/GetCompanyDetails?Name=' +
        companyName,
    );
  }

  //#region Signup Api
  appathon_sign_up(data) {
    var key;
    var query = '';
    for (key in data) {
      query +=
        encodeURIComponent(key) + '=' + encodeURIComponent(data[key]) + '&';
    }
    let headers = new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.apiUrl + 'sign_up_appathon', query, options);
  }
  //  #End region
}
