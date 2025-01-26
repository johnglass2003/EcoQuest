import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseAuthComponent } from './firebase-auth.component';

describe('FirebaseAuthComponent', () => {
  let component: FirebaseAuthComponent;
  let fixture: ComponentFixture<FirebaseAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirebaseAuthComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirebaseAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
