import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideVerticalAnimation =
  trigger('routeAnimations', [
    transition('Counterfeit => AnimationFrame', slideVertical('top') ),
    transition('AnimationFrame => Counterfeit', slideVertical('top') )
  ]);

export const slideHorizontalAnimation =
  trigger('routeAnimations', [
    transition('Person => Companies', slideVertical('left') ),
    transition('Companies => Person', slideVertical('left') )
  ]);

function slideVertical(direction: string) {
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

function slideHorizontal(direction: string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        top: 0,
        [direction]: 0,
        width: '100%'
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-100%'})
    ]),
    group([
      query(':leave', [
        animate('800ms ease', style({ [direction]: '100%'}))
      ], optional),
      query(':enter', [
        animate('800ms ease', style({ [direction]: '0%'}))
      ])
    ]),
    query(':leave', animateChild()),
    query(':enter', animateChild()),
  ];
}
