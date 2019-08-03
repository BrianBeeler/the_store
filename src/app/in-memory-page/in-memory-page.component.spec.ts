import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InMemoryPageComponent } from './in-memory-page.component';

describe('InMemoryPageComponent', () => {
  let component: InMemoryPageComponent;
  let fixture: ComponentFixture<InMemoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InMemoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InMemoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
