import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryAndNortConvsComponent } from './history-and-nort-convs.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { TranslateModule } from '@ngx-translate/core';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule ,Routes} from '@angular/router';
import { MomentModule } from 'ngx-moment';
import { TooltipModule } from 'ng2-tooltip-directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { HistoryComponent } from './history/view.component';
import { UserInputResultsComponent } from './user-input-results/view.component';

const routes: Routes = [
  { path: "", component: HistoryAndNortConvsComponent},
];

@NgModule({
  declarations: [
    HistoryAndNortConvsComponent,
    HistoryComponent,
    UserInputResultsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TooltipModule,
    CommonModule,
    MatTooltipModule,
    TranslateModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatDatepickerModule,
    MomentModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class HistoryAndNortConvsModule { }
