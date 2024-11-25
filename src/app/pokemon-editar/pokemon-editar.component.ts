import { NgFor } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'pokemon-editar',
  templateUrl: './pokemon-editar.component.html',
  styleUrl: './pokemon-editar.component.css',
  standalone: true,
  imports: [MatDividerModule,MatDialogModule, FormsModule, MatButtonModule, NgFor, MatFormFieldModule, MatInputModule, MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonEditarComponent {
  readonly dialogRef = inject(MatDialogRef<PokemonEditarComponent>);
  readonly pokemon = inject<any>(MAT_DIALOG_DATA);
  readonly data = {...inject<any>(MAT_DIALOG_DATA)};

  onNoClick(): void {
    this.dialogRef.close();
  }
}
