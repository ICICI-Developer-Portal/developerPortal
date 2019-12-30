import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  //styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    $(function(){
      $(".sideMenu>.nav-pills li.nav-link").unbind('click');
      $(".sideMenu>.nav-pills li.nav-link").click(function() {
           $(this).siblings(".active").removeClass("active");
           // $(this).siblings(".openDropdown").removeClass("openDropdown");
           // $(this).addClass("openDropdown");
           $(this).addClass("active");
       });
       $(".sideMenu>.nav-pills>li.nav-link a").click(function() {
           $(this).parent().siblings(".openDropdown").removeClass("openDropdown");
           $(this).parent().toggleClass("openDropdown");
       });
       $(".sideMenu .openDropdown.active").click(function() {
           $(this).toggleClass("openDropdown");
       });
       $(".sideMenu .nav-pills-first-level>li.nav-link").click(function() {
           $(this).siblings(".active").removeClass("active");
           $(this).addClass("active");
       });
       // $(".sideMenu .nav-pills-first-level>li.nav-link a").click(function () {
       //     $(this).parent().siblings(".openDropdown").removeClass("openDropdown");
       //     $(this).parent().addClass("openDropdown fuck");
       // });
       $(".sideMenu .nav-pills-first-level>li.nav-link a").click(function() {
           $(this).removeClass("active show");
       });
       $(".sideMenu .nav-pills-second-level>li.nav-link").click(function() {
           $(this).toggleClass("openDropdown");
           $(this).addClass("active");
           $(this).siblings(".openDropdown").removeClass("openDropdown active");
       });
       $(".sideMenu .nav-pills-second-level>li.nav-link a").click(function() {
           $(this).removeClass("active show");
       });
  });    
  }
  
  AppId(num:any){
    this.router.navigate(['/apidetails/',num])
  }
 
    
  scroll_view(id){
    this.router.navigate(['index']);
    setTimeout(function(){ document.querySelector(id).scrollIntoView({behavior: 'smooth' }); }, 10);
   }
   
}
