import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  projectList = [
    {
      client: { name: 'client1'},
      project: [
        { name: 'project-1.doc', tb: '100.00 GBP',bs: '80.00 GBP',br:'20.00 GBP',cost:'80.00 GBP'},
        { name: 'project-2.doc', tb: '100.00 GBP',bs: '80.00 GBP',br:'20.00 GBP',cost:'80.00 GBP'},
        { name: 'project-3', tb: '100.00 GBP',bs: '80.00 GBP',br:'20.00 GBP',cost:'80.00 GBP'},
        { name: 'project-4.docx', tb: '100.00 GBP',bs: '80.00 GBP',br:'20.00 GBP',cost:'80.00 GBP'},
      ],
    },
    {
      client: { name: 'client2' },
      project: [
        { name: 'Report 1', tb: '100.00 GBP',bs: '80.00 GBP',br:'20.00 GBP',cost:'80.00 GBP'},
        { name: 'Report 2', tb: '100.00 GBP',bs: '80.00 GBP',br:'20.00 GBP',cost:'80.00 GBP'},
      ],
    },
    {
      client: { name: 'client3',},
      project: [
        { name: 'backup.bkp', tb: '100.00 GBP',bs: '80.00 GBP',br:'20.00 GBP',cost:'80.00 GBP'},
        { name: 'secret-note.txt', tb: '100.00 GBP',bs: '80.00 GBP',br:'20.00 GBP',cost:'80.00 GBP'},
      ],
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
