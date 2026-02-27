import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortofolioDemonstrationComponent } from './portofolio-demonstration.component';

describe('PortofolioDemonstrationComponent', () => {
  let component: PortofolioDemonstrationComponent;
  let fixture: ComponentFixture<PortofolioDemonstrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortofolioDemonstrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortofolioDemonstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
