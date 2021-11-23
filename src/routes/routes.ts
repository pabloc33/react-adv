import { LazyExoticComponent } from "react";
import { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent; // () => JSX.Element;
  name: string;
  children?: Route[];
}

//const LazyLayout = lazy(() => import("../01-lazyload/layout/LazyLayout"));

// const LazyPage1 = lazy(
//   () =>
//     import(
//       /*  webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1"
//     )
// );
// const LazyPage2 = lazy(
//   () =>
//     import(
//       /*  webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2"
//     )
// );
// const LazyPage3 = lazy(
//   () =>
//     import(
//       /*  webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3"
//     )
// );

export const routes: Route[] = [
  {
    path: "/lazyload",
    Component: lazy(
      () =>
        import(
          /*  webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
        )
    ),
    name: "Lazyloading Nested",
  },
  {
    path: "/no-lazy",
    Component: NoLazy,
    name: "No lazy loading",
  },
];
