import { ConnectionPositionPair } from '@angular/cdk/overlay';
// overlay-predefined-positions.ts

/**
 * Set of predefined overlay positions.
 * Don't use object as we want it to be treeshakable.
 *
 */
export const overlayPositionTop: ConnectionPositionPair = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'bottom'
};

export const overlayPositionTopCenter: ConnectionPositionPair = {
  originX: 'center',
  originY: 'top',
  overlayX: 'center',
  overlayY: 'bottom'
};

export const overlayPositionTopLeft: ConnectionPositionPair = {
  originX: 'start',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'bottom'
};

export const overlayPositionTopRight: ConnectionPositionPair = {
  originX: 'end',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'bottom'
};

export const overlayPositionRight: ConnectionPositionPair = {
  originX: 'end',
  originY: 'center',
  overlayX: 'start',
  overlayY: 'center'
};

export const overlayPositionRightTop: ConnectionPositionPair = {
  originX: 'end',
  originY: 'top',
  overlayX: 'start',
  overlayY: 'top'
};

export const overlayPositionRightBottom: ConnectionPositionPair = {
  originX: 'end',
  originY: 'bottom',
  overlayX: 'start',
  overlayY: 'bottom'
};

export const overlayPositionBottom: ConnectionPositionPair = {
  originX: 'center',
  originY: 'bottom',
  overlayX: 'center',
  overlayY: 'top'
};

export const overlayPositionBottomCenter: ConnectionPositionPair = {
  originX: 'center',
  originY: 'bottom',
  overlayX: 'center',
  overlayY: 'top'
};

export const overlayPositionBottomLeft: ConnectionPositionPair = {
  originX: 'start',
  originY: 'bottom',
  overlayX: 'start',
  overlayY: 'top'
};

export const overlayPositionBottomRight: ConnectionPositionPair = {
  originX: 'end',
  originY: 'bottom',
  overlayX: 'end',
  overlayY: 'top'
};

export const overlayPositionLeft: ConnectionPositionPair = {
  originX: 'start',
  originY: 'center',
  overlayX: 'end',
  overlayY: 'center'
};

export const overlayPositionLeftTop: ConnectionPositionPair = {
  originX: 'start',
  originY: 'top',
  overlayX: 'end',
  overlayY: 'top'
};

export const overlayPositionLeftBottom: ConnectionPositionPair = {
  originX: 'start',
  originY: 'bottom',
  overlayX: 'end',
  overlayY: 'bottom'
};
