import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Editor, Toolbar } from 'ngx-editor';
import { AddeditProjectComponent } from './addedit-project/addedit-project.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @ViewChild('myModal2', { static: true }) myModal2: TemplateRef<any>;
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
  editor : Editor;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  data: '';
  headerMenu = [
    {name: 'Time', path: ''},
    {name: 'Project', path: '/project'},
    {name: 'Team', path: ''},
    {name: 'Report', path: ''},
    {name: 'Invoices', path: '/invoices'},
    {name: 'Estimates', path: ''},
    {name: 'Manages', path: ''},
  ]
  constructor(private modal: NgbModal) { }
  ngOnInit(): void {
    this.editor = new Editor();
  }

  addProject() {
    this.modal.open(AddeditProjectComponent ,{size: 'lg'})
  }
  onClick() {
    document.getElementById("mySidenav").style.width = "50%";
  }
  closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
}
