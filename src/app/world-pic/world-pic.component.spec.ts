import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldPicComponent } from './world-pic.component';

describe('WorldPicComponent', () => {
  let component: WorldPicComponent;
  let fixture: ComponentFixture<WorldPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
