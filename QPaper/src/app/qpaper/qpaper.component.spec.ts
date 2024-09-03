import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QpaperComponent } from './qpaper.component';

describe('QpaperComponent', () => {
  let component: QpaperComponent;
  let fixture: ComponentFixture<QpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QpaperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
