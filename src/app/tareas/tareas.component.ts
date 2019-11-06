import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  arrayOfItems:string[] =[];
  addItem():void{
    let newItem:string = (<HTMLInputElement> document.querySelectorAll("#newItem")[0]).value;
    this.arrayOfItems.push(newItem);
  }

  deleteItem(position:number):void{
    this.arrayOfItems.splice(position,1);
  }
}
