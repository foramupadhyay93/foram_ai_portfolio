import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsBadgeComponent } from './skills-badge.component';

describe('SkillsBadgeComponent', () => {
  let component: SkillsBadgeComponent;
  let fixture: ComponentFixture<SkillsBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsBadgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
