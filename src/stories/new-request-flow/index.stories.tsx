import { Box } from "@chakra-ui/react";
import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
import React, { useEffect } from "react";
import LandingPageComponent from "@tuteria/shared-lib/src/new-request-flow/pages/LandingPage";
import storage from "@tuteria/shared-lib/src/utils/storage";
import { OverlayRouter } from "@tuteria/shared-lib/src/components/OverlayRouter";
import { adapter } from "./adapter";
import { LocationFieldStore } from "@tuteria/shared-lib/src/stores";
import allCountries from "@tuteria/shared-lib/src/data/countries.json";
import regions from "@tuteria/shared-lib/src/data/regions.json";

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
