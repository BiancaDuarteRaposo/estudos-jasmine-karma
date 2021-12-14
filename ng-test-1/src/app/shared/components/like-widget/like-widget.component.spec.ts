import { ComponentFixture } from '@angular/core/testing';
import { UniqueIdService } from '../../services/unique-id/unique-id-service';
import { LikeWidgetComponent } from './like-widget.component';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent = null;
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach(() => {});

  it('Should create a compoment', () => {
    const component = new LikeWidgetComponent(new UniqueIdService());
    expect(component).toBeTruthy(); // não deixa passar null, 0 , false
  });
});
