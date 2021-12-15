import { LikeWidgetComponent } from './like-widget.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetModule } from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    });
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
  });

  it('Should create component', () => {
    expect(component).toBeTruthy(); // não deve ser: null, undefined, '', 0, false
  });

  it('Should auto generate ID when id input property is missing', () => {
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when component is NOT init', () => {
    expect(component.id).toBe(null);
  });

  it('Should generete ID with prefix when prefix input is missing', () => {
    fixture.detectChanges();
    expect(component.id.startsWith('like-widget')).toBe(true);
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should be trigger emission when called`, (done) => {
    fixture.detectChanges(); // inicializa nosso componente de teste
    component.liked.subscribe(() => {
      expect(true).toBe(true);
      done();
    });
    component.like();
  });

  it(`#${LikeWidgetComponent.prototype.like.name} should be trigger emission when called`, () => {
    spyOn(component.liked, 'emit');
    fixture.detectChanges(); // inicializa nosso componente de teste
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();
  });
});
