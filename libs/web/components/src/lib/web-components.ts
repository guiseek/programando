import { WebLikeButtonComponent } from './web-like-button.component';
export { WebLikeButtonComponent };

(({ define }) => {
  const components = {
    'web-like-button': WebLikeButtonComponent
  }
  Object.entries(components).map(([name, component]) => {
    define(name, component);
  });

})(customElements);
// export function webComponents(): string {
//   return 'web-components';
// }
