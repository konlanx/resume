import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Counterfeit => AnimationFrame', slideTo('top') ),
    transition('AnimationFrame => Counterfeit', slideTo('top') )
  ]);

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        left: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('1500ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('1500ms ease', style({ [direction]: '0%'}))
      ])
    ]),
    query(':leave', animateChild()),
    query(':enter', animateChild()),
  ];
}
