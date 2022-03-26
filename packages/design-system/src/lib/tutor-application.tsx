import { LoadingStateWrapper } from "@tuteria/shared-lib/src/components/data-display/LoadingState";

import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { Suspense, useEffect } from "react";
/* eslint-disable-next-line */
export interface TutorApplicationWrapperProps {
  children: any;
  defaultLoading?: boolean;
  initialize?: any;
  effect?: any;
  text?: string;
}

export function TutorApplicationWrapper({
  defaultLoading = true,
  ...props
}: TutorApplicationWrapperProps) {
  useEffect(() => {
    if (props.effect) {
      props.effect();
    }
  }, []);
  return (
    <ThemeProvider>
      <Suspense fallback={null}>
        <LoadingStateWrapper
          defaultLoading={defaultLoading}
          initialize={props.initialize}
          text={props.text}
        >
          {props.children}
        </LoadingStateWrapper>
      </Suspense>
    </ThemeProvider>
  );
}

export default TutorApplicationWrapper;
