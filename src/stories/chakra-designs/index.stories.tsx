import ThemeProvider from "@tuteria/shared-lib/src/bootstrap";
export default {
  title: "Raw Designs",
  decorators: [
    (Story: React.FC) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};
export {
  StatWithProgessBar,
  StatWithThreeColumns,
  StatWithCenteredIndicator,
  StatWithIndicator,
  StatWithDivider,
  StatWithIcon,
  TableWithSearch,
  SidebarWithBackground,
  SidebarWithSearch,
  ShellWithTopNavbar,
  ShellWithFullBg,
  ShellWithGroupedMenu,
  ShellWithThreeColumn,
  ListWithVerticalLine,
  HeaderWithActions,
  HeaderWithActionsAndTabs,
  HeaderWithBreadcrumbs,
  HeaderWithProfile,
  ButtonCheckBox,
  CardWithRightButton,
  CardWithColorAccent,
  CardWithAddButton,
  CardWithUserDetails,
  CardWithSwitch,
  BannerWithButton,
  CustomRadioGroup,
  ButtonRadioBox,
  VerticalSteps,
} from "../pages/ChakraProView";
