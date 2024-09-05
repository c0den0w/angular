import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWidgetsComponent } from './search-widgets.component';

describe('SearchWidgetsComponent', () => {
  let component: SearchWidgetsComponent;
  let fixture: ComponentFixture<SearchWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchWidgetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
