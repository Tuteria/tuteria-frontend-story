import React from "react";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Tabs, Page } from "@tuteria/mobile-lib/src/primitives";
import { ellipse, square, triangle } from "ionicons/icons";
import ExploreContainer from "@tuteria/mobile-lib/src/components/ExploreContainer";

export default {
  title: "Ionic Primitives",
  decorators: [
    (Story) => (
      <IonApp>
        <IonReactRouter>
          <Story />
        </IonReactRouter>
      </IonApp>
    ),
  ],
};
const Tab2: React.FC = () => {
  return (
    <Page title="Tab 2" fullscreen>
      <ExploreContainer name="Tab 2 page" />
    </Page>
  );
};
const Tab1: React.FC = () => {
  return (
    <Page title="Tab 1" fullscreen>
      <ExploreContainer name="Tab 1 page" />
    </Page>
  );
};

const Tab3: React.FC = () => {
  return (
    <Page title="Tab 3" fullscreen>
      <ExploreContainer name="Tab 3 page" />
    </Page>
  );
};
const tabs = [
  {
    path: "/tab1",
    component: Tab1,
    id: "tab1",
    icon: triangle,
    title: "Tab 1",
  },
  { path: "/tab2", component: Tab2, id: "tab2", icon: ellipse, title: "Tab 2" },
  { path: "/tab3", component: Tab3, id: "tab3", icon: square, title: "Tab 3" },
];

export const TabsExample = () => {
  return <Tabs tabs={tabs} />;
};
