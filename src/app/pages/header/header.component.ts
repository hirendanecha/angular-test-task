import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  headerMenu = [
    {name: 'Time', path: ''},
    {name: 'Project', path: '/project'},
    {name: 'Team', path: ''},
    {name: 'Report', path: ''},
    {name: 'Invoices', path: '/invoices'},
    {name: 'Estimates', path: ''},
    {name: 'Manages', path: ''},
  ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onClickTab(item) {
    this.router.navigate([item])
  }
}
