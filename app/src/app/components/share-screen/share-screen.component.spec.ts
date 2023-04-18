import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareScreenComponent } from './share-screen.component';

describe('ShareScreenComponent', () => {
  let component: ShareScreenComponent;
  let fixture: ComponentFixture<ShareScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
