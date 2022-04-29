import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addedit-project',
  templateUrl: './addedit-project.component.html',
  styleUrls: ['./addedit-project.component.scss']
})
export class AddeditProjectComponent implements OnInit {

 
  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  close() {
    this.modal.dismissAll();
  }
}
