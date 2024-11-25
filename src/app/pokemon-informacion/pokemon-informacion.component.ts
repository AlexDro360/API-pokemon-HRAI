import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'pokemon-informacion',
  templateUrl: './pokemon-informacion.component.html',
  styleUrl: './pokemon-informacion.component.css',
  standalone: true,
  imports: [MatDividerModule,MatDialogModule, MatButtonModule, NgFor],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonInformacionComponent {
  readonly dialogRef = inject(MatDialogRef<PokemonInformacionComponent>);
  readonly data = inject<any>(MAT_DIALOG_DATA);
}

