import { Box } from "@chakra-ui/react";
import { linkTo } from "@storybook/addon-links";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import regions from "@tuteria/shared-lib/src/data/regions.json";
import { ClientRequestForm } from "@tuteria/shared-lib/src/home-tutoring/request-flow/ClientRequestForm";
import { ACADEMICS_DATA } from "@tuteria/shared-lib/src/home-tutoring/request-flow/constants";
import { RequestDataProvider } from "@tuteria/shared-lib/src/home-tutoring/request-flow/RequestDataProvider";
import storage from "@tuteria/shared-lib/src/storage";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { adapter } from "./adapter";
import { SAMPLEREQUEST } from "./sampleData";
import { RequestFlowStore } from "@tuteria/shared-lib/src/home-tutoring/request-flow/store";

export default {
  title: "Hone Tutoring Application/Request",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Box h="100vh" position="relative" overflowY="scroll">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

const NewParentFlow = observer(({ viewModel, academicData, ...rest }: any) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    storage.set(adapter.regionKey, rest.regions);
    storage.set(adapter.countryKey, rest.countries);
    let existing = storage.get(adapter.requestKey, {});
    storage.set(adapter.requestKey, {
      ...existing,
      ...SAMPLEREQUEST,
    });
    viewModel.initializeRequestData(academicData, true).then(() => {
      setLoaded(true);
    });
  }, []);

  return (
    <>
      <OverlayRouter>
        <ClientRequestForm
          loaded={loaded}
          discountFlag={true}
          onSubmit={() => {
            if (
              viewModel.splitRequests.length === viewModel.splitToExclude.length
            ) {
              linkTo("External Pages / New Parent Flow", "Client request")();
            } else {
              linkTo("External Pages / Request Flow", "Search Results")();
            }
          }}
          viewModel={viewModel}
        />
      </OverlayRouter>
    </>
  );
});

export const LessonDetail = () => {
  const viewModel = RequestFlowStore.create(undefined, {
    adapter,
  });
  // onSnapshot(viewModel, (...a) => {
  //   console.log("On snapshot change", a);
  // });
  return (
    <RequestDataProvider initialValue={SAMPLEREQUEST}>
      <NewParentFlow
        academicData={ACADEMICS_DATA}
        regions={regions}
        countries={allCountries}
        viewModel={viewModel}
      />
    </RequestDataProvider>
  );
};
