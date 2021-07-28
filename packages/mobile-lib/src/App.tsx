import * as React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Page from "./pages/Page";
import { observer } from "mobx-react-lite";

import "./styles";
/* Theme variables */
import "./theme/variables.css";
import { ISampleType } from "./stores";
import { MobileRouter } from "./components/OverlayRouter";

const App: React.FC<{ store: ISampleType }> = observer(({ store }) => {
  return (
    <IonApp>
      <MobileRouter
        initialIndex={2}
        mode="dev"
        initialEntries={["/", "/page/Inbox", "/page/Outbox"]}
      >
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Inbox" />
            </Route>
            <Route path="/page/:name" exact={true}>
              <Page store={store} />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </MobileRouter>
    </IonApp>
  );
});

export default App;
