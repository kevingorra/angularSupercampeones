
import { Component } from '@angular/core';
import { Personaje } from '../interfaces/personaje';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   nombre:String="juan";
   edad:number=33;
   numeros:any[]=[1,2,3,4,5,6,7,8,9,10];

   fotos:any[]=[
    'https://firebasestorage.googleapis.com/v0/b/supercampeones-63222.appspot.com/o/supercampeones1.jpg?alt=media&token=6a1b4cce-cf13-4d69-8973-c9e1ac8a6bc0',
    'https://firebasestorage.googleapis.com/v0/b/supercampeones-63222.appspot.com/o/supercampeones2.jpg?alt=media&token=0e862a48-bf68-4d89-aff3-62a8a3d4c58d',
    'https://firebasestorage.googleapis.com/v0/b/supercampeones-63222.appspot.com/o/supercampeones3.jpg?alt=media&token=487314f6-a8c7-4f5c-96de-3108ef6c5360',
    'https://firebasestorage.googleapis.com/v0/b/supercampeones-63222.appspot.com/o/supercampeones4.jpg?alt=media&token=7aa1fe17-9aaf-4b2c-bce3-a53ff7b97f58',
    'https://firebasestorage.googleapis.com/v0/b/supercampeones-63222.appspot.com/o/supercampeones5.jpg?alt=media&token=ca854217-5e5d-47b3-b0d1-057d51a94cc6'
  ]

 personajes:Personaje[]=[
  {
    "nombre":"benji",
    "edad":45,
    "foto":'https://firebasestorage.googleapis.com/v0/b/supercampeones-63222.appspot.com/o/supercampeones1.jpg?alt=media&token=6a1b4cce-cf13-4d69-8973-c9e1ac8a6bc0'},
  {
    "nombre":"toto",
    "edad":23,
    "foto":'https://firebasestorage.googleapis.com/v0/b/supercampeones-63222.appspot.com/o/supercampeones2.jpg?alt=media&token=0e862a48-bf68-4d89-aff3-62a8a3d4c58d'},
  {
    "nombre":"pepe",
    "edad":56,
    "foto": 'https://firebasestorage.googleapis.com/v0/b/supercampeones-63222.appspot.com/o/supercampeones3.jpg?alt=media&token=487314f6-a8c7-4f5c-96de-3108ef6c5360'},
  {
    "nombre":"nacho",
    "edad":66,
  "foto":'https://firebasestorage.googleapis.com/v0/b/supercampeones-63222.appspot.com/o/supercampeones4.jpg?alt=media&token=7aa1fe17-9aaf-4b2c-bce3-a53ff7b97f58'},
  {
    "nombre":"LULO",
    "edad":77,
    "foto":'https://firebasestorage.googleapis.com/v0/b/supercampeones-63222.appspot.com/o/supercampeones5.jpg?alt=media&token=ca854217-5e5d-47b3-b0d1-057d51a94cc6'}
 ]
  constructor() { }



}
