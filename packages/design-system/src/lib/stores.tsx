import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import {
  OverlayRouter,
  OverlayWrapper,
} from "@tuteria/shared-lib/src/components/OverlayRouter";
import { Suspense, useEffect } from "react";
/* eslint-disable-next-line */
export interface StoresProps {
  children: any;
  effect?: any;
}

export function Stores({ defaultLoading = true, ...props }: StoresProps) {
  useEffect(() => {
    if (props.effect) {
      props.effect();
    }
  }, []);
  return (
    <ThemeProvider>
      <OverlayRouter>{props.children}</OverlayRouter>
    </ThemeProvider>
  );
}

export default Stores;
