import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoicesComponent } from './invoices/invoices.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
  {path: '', component: ProjectComponent},
  {path: 'project', component: ProjectComponent},
  {path: 'invoices', component: InvoicesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
