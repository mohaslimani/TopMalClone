import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ham = () => {
    let navbarMenu = document.getElementById('n-menu')
    if (navbarMenu && navbarMenu.style.display === 'flex') {
      navbarMenu.style.display = 'none'
      return
    }
    navbarMenu!.style.display = 'flex'
  }

  returnToPC = (e: any) => {
    if (e.target.innerWidth >= 768){
      let navbarMenu = document.getElementById('n-menu');
      navbarMenu!.style.display = 'flex'
    }
  }
}
