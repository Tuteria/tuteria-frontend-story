import React from "react";
import { IonApp } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { TabView, Page, MenuView } from "@tuteria/mobile-lib/src/primitives";
import {
  ellipse,
  square,
  triangle,
  archiveOutline,
  archiveSharp,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
} from "ionicons/icons";
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

const Menu1: React.FC = () => {
  return (
    <Page title="Menu 1" fullscreen>
      <ExploreContainer name="Menu 1 page" />
    </Page>
  );
};

const Menu2: React.FC = () => {
  return (
    <Page title="Menu 2" fullscreen>
      <ExploreContainer name="Menu 2 page" />
    </Page>
  );
};

const Menu3: React.FC = () => {
  return (
    <Page title="Menu 3" fullscreen>
      <ExploreContainer name="Menu 3 page" />
    </Page>
  );
};

const Menu4: React.FC = () => {
  return (
    <Page title="Menu 4" fullscreen>
      <ExploreContainer name="Menu 4 page" />
    </Page>
  );
};

const menu = [
  {
    title: "Menu 1",
    path: "/menu1",
    component: Menu1,
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
  {
    title: "Menu 2",
    path: "/menu2",
    component: Menu2,
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
  },
  {
    title: "Menu 3",
    path: "/menu3",
    component: Menu3,
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "Menu 4",
    path: "/menu4",
    component: Menu4,
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
  },
];

export const TabsExample = () => {
  return <TabView tabs={tabs} />;
};

export const MenuExample = () => {
  return (
    <MenuView header="Profile" headerNote="tutor@email.com" menuItems={menu} />
  );
};
