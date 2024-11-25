import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEliminarComponent } from './pokemon-eliminar.component';

describe('PokemonEliminarComponent', () => {
  let component: PokemonEliminarComponent;
  let fixture: ComponentFixture<PokemonEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonEliminarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
