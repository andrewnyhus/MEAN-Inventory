import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadInventoryItemImageComponent } from './upload-inventory-item-image.component';

describe('UploadInventoryItemImageComponent', () => {
  let component: UploadInventoryItemImageComponent;
  let fixture: ComponentFixture<UploadInventoryItemImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadInventoryItemImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadInventoryItemImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
