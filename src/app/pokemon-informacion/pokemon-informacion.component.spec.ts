import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInformacionComponent } from './pokemon-informacion.component';

describe('PokemonInformacionComponent', () => {
  let component: PokemonInformacionComponent;
  let fixture: ComponentFixture<PokemonInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonInformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
