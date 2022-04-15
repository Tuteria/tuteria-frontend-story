import React from "react";
import { render } from "@testing-library/react-native";

import Sample from "./sample";

describe("Sample", () => {
  it("should render successfully", () => {
    const { container } = render(<Sample />);
    expect(container).toBeTruthy();
  });
});
