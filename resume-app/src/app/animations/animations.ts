import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

export const slideVerticalAnimation =
  trigger('routeAnimations', [
    transition('Counterfeit => AnimationFrame', slideVertical('top') ),
    transition('AnimationFrame => Counterfeit', slideVertical('top') )
  ]);

export const slideHorizontalAnimation =
  trigger('routeAnimations', [
    transition('Person => Companies', slideHorizontal('right') ),
    transition('Person => Skills', slideHorizontal('right') ),
    transition('Person => Education', slideHorizontal('right') ),

    transition('Companies => Person', slideHorizontal('left') ),
    transition('Companies => Skills', slideHorizontal('left') ),
    transition('Companies => Education', slideHorizontal('right') ),

    transition('Skills => Person', slideHorizontal('left') ),
    transition('Skills => Companies', slideHorizontal('right') ),
    transition('Skills => Education', slideHorizontal('right') ),

    transition('Education => Person', slideHorizontal('left') ),
    transition('Education => Companies', slideHorizontal('left') ),
    transition('Education => Skills', slideHorizontal('left') ),
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
  ];
}

function slideHorizontal(direction: string) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
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
