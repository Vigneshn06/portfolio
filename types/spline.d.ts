import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          url?: string;
          "events-target"?: string;
          "loading-anim-type"?: string;
          "hint"?: string;
        },
        HTMLElement
      >;
    }
  }
}
