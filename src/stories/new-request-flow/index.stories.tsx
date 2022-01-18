import { Box } from "@chakra-ui/react";
import { linkTo } from "@storybook/addon-links";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import regions from "@tuteria/shared-lib/src/data/regions.json";
import { ClientRequestForm } from "@tuteria/shared-lib/src/home-tutoring/request-flow/ClientRequestForm";
import { ACADEMICS_DATA } from "@tuteria/shared-lib/src/home-tutoring/request-flow/constants";
import { PricingPage as NewPricingPage } from "@tuteria/shared-lib/src/home-tutoring/request-flow/PricingPage";
import { RequestFlowStore } from "@tuteria/shared-lib/src/home-tutoring/request-flow/store";
import LandingPageComponent from "@tuteria/shared-lib/src/new-request-flow/pages/LandingPage";
import storage from "@tuteria/shared-lib/src/storage";
import { LocationFieldStore } from "@tuteria/shared-lib/src/stores";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { adapter } from "./adapter";

export default {
  title: "Request Flow/Pages",
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

function navigate(path: string) {
  let options = {
    "/pricing": "Pricing Page",
    "/request": "Lesson Detail",
    "/home": "Landing Page",
  };
  linkTo("Request Flow/Pages", options[path])();
}
export const LandingPage = () => {
  const store = LocationFieldStore.create({ country: "Nigeria" }, { adapter });
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    storage.set(adapter.regionKey, regions);
    storage.set(adapter.countryKey, allCountries);
    store.updateFields({
      customerType: "student",
      country: "Nigeria",
      country_code: "NG",
      regions,
      countries: allCountries,
    });
  }, []);
  function onSubmitForm(values) {
    store.updateFields(values);
    setLoading(true);
    adapter
      .createIssuedRequest(values)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }
  return (
    <OverlayRouter>
      <LandingPageComponent
        onDiscountSubmit={(values) => {
          onSubmitForm({ discount: true, ...values });
        }}
        onSubmitForm={onSubmitForm}
        store={store}
        contactNumber="09094526878"
        updateField={store.updateFields}
        setCountryCode={(_code) => {
          store.updateFields({ country_code: _code });
        }}
        isLoading={loading}
        countries={store.countries.map((x) => ({
          label: x.name,
          value: x.name,
          code: x.code,
        }))}
      />
    </OverlayRouter>
  );
};

const NewParentFlow = observer(
  ({ viewModel, academicData, onSubmit, ...rest }: any) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      adapter.updateStaticData(rest);
      viewModel.initializeRequestData(academicData, true).then(() => {
        setLoaded(true);
      });
    }, []);

    return (
      <OverlayRouter>
        <ClientRequestForm
          loaded={loaded}
          discountFlag={true}
          onSubmit={onSubmit}
          viewModel={viewModel}
        />
      </OverlayRouter>
    );
  }
);

export const LessonDetail = () => {
  const viewModel = RequestFlowStore.create(undefined, {
    adapter,
  });
  return (
    <NewParentFlow
      academicData={ACADEMICS_DATA}
      regions={regions}
      countries={allCountries}
      viewModel={viewModel}
      onSubmit={() => {
        if (
          viewModel.splitRequests.length === viewModel.splitToExclude.length
        ) {
          linkTo("External Pages / New Parent Flow", "Client request")();
        } else {
          linkTo("External Pages / Request Flow", "Search Results")();
        }
      }}
    />
  );
};

export const PricingPage = () => {
  const samplePricingData = {
    standardFx: 1.0,
    premiumFx: 1.4,
    deluxeFx: 1.8,
    stateFx: 1.0,
    vicinityFx: 0.9,
    extraStudentDiscount: 20,
    splitRequest: [
      {
        purposeFx: 1.0,
        baseRate: 1200,
        lessonDays: 2,
        lessonHours: 2,
        lessonDuration: 4,
        students: 1,
        subjectsFx: 1.1,
        curriculumFx: 1.2,
      },
      {
        purposeFx: 1.2,
        baseRate: 1200,
        lessonDays: 1,
        lessonHours: 2,
        lessonDuration: 4,
        students: 1,
        subjectsFx: 1.1,
        curriculumFx: 1.2,
      },
      {
        purposeFx: 1.2,
        baseRate: 1200,
        lessonDays: 1,
        lessonHours: 2,
        lessonDuration: 4,
        students: 1,
        subjectsFx: 1.0,
        curriculumFx: 1.0,
      },
    ],
  };

  return (
    <NewPricingPage
      pricingData={samplePricingData}
      onEditRequest={() => {
        navigate("/request");
      }}
    />
  );
};
