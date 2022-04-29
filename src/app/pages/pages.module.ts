import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';
import { AddeditProjectComponent } from './project/addedit-project/addedit-project.component';
import { AngularTreeGridModule } from 'angular-tree-grid';
import { InvoicesComponent } from './invoices/invoices.component';
import { NgxEditorModule } from 'ngx-editor';

@NgModule({
  declarations: [
    ProjectComponent,
    AddeditProjectComponent,
    InvoicesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    AngularTreeGridModule,
    NgxEditorModule
  ]
})
export class PagesModule { }
