import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// https://ithelp.ithome.com.tw/articles/10193605 屬性操作
// https://ithelp.ithome.com.tw/articles/10193605
// https://stackoverflow.com/questions/66007480/how-to-get-vues-v-else-if-functionality-in-angular
// https://blog.csdn.net/DR1sxy/article/details/84962319?spm=1001.2101.3001.6650.5&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-5-84962319-blog-86022833.pc_relevant_default&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7ERate-5-84962319-blog-86022833.pc_relevant_default&utm_relevant_index=6
import {OnInit, AfterViewInit } from '@angular/core'
import * as $ from "jquery";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name9 = new String("");
  heros = [
    { name: '兩斤勘吉12', age: 35 },
    { name: '秋本麗子', age: 25 },
    { name: '野比大雄', age: 12 },
    { name: '江戶川柯南', age: 8 }
  ];


  title = 'ngmt';
  aa1 = "aab";
  // myModel: string;
  public forecasts: WeatherForecast[] =[];
  forecasts1: WeatherForecast[] =[];
  forecasts2: WeatherForecast[] =[];
  caaa = "aaaaa";
  ca = [];
  jdata = [];
  // users: Observable<Array<any>>;
  name = 'Angular 6';
  objUnregulars = [];
// 越下越快
  dataUrl= "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";
  // dataUrl= "https://jsonplaceholder.typicode.com/users";
  data6 = $.ajax({
    url: this.dataUrl,
    method: 'GET',
    dataType: 'json',
    data: '',
    async: true,　  
    success: res =>{
        // this.data2= res;
        this.jdata = res;
        console.log("成功6",res);// 這是ok的
        console.log("成功61",this.jdata);// 這是ok的
        // console.log("this.data2",JSON.stringify(this.data2[0]["title"]));// 這是ok的
        },
    error: err =>{
        console.log(err)
        },
   });

// https://shibe.online/api/shibes?count=5&urls=true&httpsUrls=true

// https://jsonplaceholder.typicode.com/users

   dataUrlUn= "https://jsonplaceholder.typicode.com/users";
   dataUn = $.ajax({
     url: this.dataUrlUn,
     method: 'GET',
     dataType: 'json',
     data: '',
     async: true,　  
     success: resultData =>{
         this.objUnregulars= resultData;
         // this.jdata = res;
         // console.log("成功6",res);// 這是ok的
         for (let i = 0; i < this.objUnregulars.length; i++) {
          // text += "The number is " + i + "<br>";
          // this.objUnregulars[i].editIndex
          // this.objUnregulars[i].editIndex = "aa";
          this.objUnregulars[i]['name1'];
          // .'editIndex'
        }
         // console.log("dataUrlUn Return", JSON.stringify(this.objUnregulars));// 這是ok的
         console.log("dataUrlUn Return", this.objUnregulars[0]['name']);// 這是ok的 
         console.log("dataUrlUn Return", this.objUnregulars);// 這是ok的  
         // console.log("this.data2",JSON.stringify(this.data2[0]["title"]));// 這是ok的
         },
     error: err =>{
         console.log(err)
         },
    });

  // users: Observable<Array<any>> =[];

  constructor() {

    //this.users = this.http.get<Observable<Array<any>>>('https://jsonplaceholder.typicode.com/users');
  }
  OnInit() {
    console.log("OnInit");// 這是ok的 
  }
  ngOnInit() {
    console.log("ngOnInit");// 這是ok的 

    let myObj = { prop1: 'hello world' },
    myProperty = 777;
    // myObj.prop2 = 123;
    console.log("myObj",myObj);	
   // myObj[prop1] = 'hey world';
    // myObj["prop-2"] = 123;
    // myObj.myProperty = 456;
    /*
console.log(myObj[prop1]);				// "hey world"
console.log(myObj["prop-2"]);			// 123
console.log(myObj[myProperty]);			// 456
*/

  }
  /*
  constructor(private http: HttpClient) {
    this.users = this.http.get<Observable<Array<any>>>
    ('https://jsonplaceholder.typicode.com/users');
  }
  */

  

}




interface WeatherForecast {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

interface WeatherForecast1 {
  dateFormatted: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
  summary1: WeatherForecast[]; 
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  editIndex: string;
}
