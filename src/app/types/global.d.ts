declare module '*.scss' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import { JSX, SVGProps } from 'react';

  const SVG: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  export default SVG;
}
