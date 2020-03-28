import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirDetailsComponent } from './dir-details.component';

describe('DirDetailsComponent', () => {
  let component: DirDetailsComponent;
  let fixture: ComponentFixture<DirDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
