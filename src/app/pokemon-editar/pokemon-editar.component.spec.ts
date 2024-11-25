import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonEditarComponent } from './pokemon-editar.component';

describe('PokemonEditarComponent', () => {
  let component: PokemonEditarComponent;
  let fixture: ComponentFixture<PokemonEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
