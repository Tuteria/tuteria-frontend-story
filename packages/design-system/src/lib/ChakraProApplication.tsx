import { Text } from "@chakra-ui/react";
import * as React from "react";
// this is the valid codebase

import { AuthenticationWithCenterForm } from "./components/Application/AuthenticationWithCenterForm";
import { AuthenticationWithProviders } from "./components/Application/AuthenticationWithProviders";
import { AuthenticationWithFlushedInputs } from "./components/Application/AuthenticationWithFlushedInputs";
import { AuthenticationWithGradient } from "./components/Application/AuthenticationWithGradient";
import { AuthenticationWithLeftBackground } from "./components/Application/AuthenticationWithLeftBackground";
import { BannerWithButton } from "./components/Application/BannerWithButton";
import { BannerForCookies } from "./components/Application/BannerForCookies";
import { BannerWithGradient } from "./components/Application/BannerWithGradient";
import { ButtonCheckBox } from "./components/Application/ButtonCheckBox";
import { ButtonRadioBox } from "./components/Application/ButtonRadioBox";
import { CardWithAddButton } from "./components/Application/CardWithAddButton";
import { CardWithColorAccent } from "./components/Application/CardWithColorAccent";
import { CardWithForm } from "./components/Application/CardWithForm";
import { CardWithRightButton } from "./components/Application/CardWithRightButton";
import { CardWithSwitch } from "./components/Application/CardWithSwitch";
import { CardWithUserDetails } from "./components/Application/CardWithUserDetails";
import { FormAccountSettings } from "./components/Application/FormAccountSettings";
import { FormWithShadow } from "./components/Application/FormWithShadow";
import { GridWithAspectRatio } from "./components/Application/GridWithAspectRatio";
import { CustomRadioGroup } from "./components/Application/CustomRadioGroup";
import { HeaderWithActions } from "./components/Application/HeaderWithActions";
import { HeaderWithActionsAndTabs } from "./components/Application/HeaderWithActionsAndTabs";
import { HeaderWithBreadcrumbs } from "./components/Application/HeaderWithBreadcrumbs";
import { HeaderWithProfile } from "./components/Application/HeaderWithProfile";
import { HeaderWithSearch } from "./components/Application/HeaderWithSearch";
import { ListWithVerticalLine } from "./components/Application/ListWithVerticalLine";
import { NotificationWithColoredBg } from "./components/Application/NotificationWithColoredBg";
import { NotificationWithSeparator } from "./components/Application/NotificationWithSeparator";
import { PopoverToShareFeedback } from "./components/Application/PopoverToShareFeedback";
import { ShellWithFullBg } from "./components/Application/ShellWithFullBg";
import { ShellWithGroupedMenu } from "./components/Application/ShellWithGroupedMenu";
import { ShellWithThreeColumn } from "./components/Application/ShellWithThreeColumn";
import { ShellWithTopNavbar } from "./components/Application/ShellWithTopNavbar";
import { SidebarWithBackground } from "./components/Application/SidebarWithBackground";
import { SidebarWithSearch } from "./components/Application/SidebarWithSearch";
import { StatWithCenteredIndicator } from "./components/Application/StatWithCenteredIndicator";
import { StatWithDivider } from "./components/Application/StatWithDivider";
import { StatWithIcon } from "./components/Application/StatWithIcon";
import { StatWithIndicator } from "./components/Application/StatWithIndicator";
import { StatWithProgessBar } from "./components/Application/StatWithProgessBar";
import { StatWithThreeColumns } from "./components/Application/StatWithThreeColumns";
import { TableWithSearch } from "./components/Application/TableWithSearch";
import { TableWithSearchNew } from "./components/Application/TableWithSearchNew";
import { StepsWithArrow } from "./components/Application/StepsWithArrow";
import { StepsWithNumbers } from "./components/Application/StepsWithNumbers";
import { VerticalSteps } from "./components/Application/VerticalSteps";
import { UserCardGrid } from "./components/Application/UserCardGrid";
import { UserCardWithBackground } from "./components/Application/UserCardWithBackground";
import { UserCardWithRating } from "./components/Application/UserCardWithRating";
import { UserCardWithTags } from "./components/Application/UserCardWithTags";
import { ShellWithLightBackgroundAndBlueText } from "./components/Application/ShellWithLightBackgroundAndBlueText";
export {
  AuthenticationWithCenterForm,
  AuthenticationWithProviders,
  AuthenticationWithFlushedInputs,
  AuthenticationWithGradient,
  AuthenticationWithLeftBackground,
  BannerWithButton,
  BannerForCookies,
  BannerWithGradient,
  CardWithRightButton,
  CardWithColorAccent,
  CardWithAddButton,
  CardWithUserDetails,
  CardWithSwitch,
  CardWithForm,
  FormAccountSettings,
  FormWithShadow,
  GridWithAspectRatio,
  HeaderWithActions,
  HeaderWithActionsAndTabs,
  HeaderWithBreadcrumbs,
  HeaderWithProfile,
  HeaderWithSearch,
  ListWithVerticalLine,
  NotificationWithColoredBg,
  NotificationWithSeparator,
  PopoverToShareFeedback,
  ShellWithFullBg,
  ShellWithGroupedMenu,
  ShellWithThreeColumn,
  ShellWithTopNavbar,
  ShellWithLightBackgroundAndBlueText,
  SidebarWithBackground,
  SidebarWithSearch,
  VerticalSteps,
  StatWithProgessBar,
  StatWithThreeColumns,
  StatWithIndicator,
  StatWithDivider,
  StatWithCenteredIndicator,
  StatWithIcon,
  TableWithSearch,
  TableWithSearchNew,
  StepsWithArrow,
  StepsWithNumbers,
  ButtonCheckBox,
  CustomRadioGroup,
  ButtonRadioBox,
  UserCardGrid,
  UserCardWithBackground,
  UserCardWithRating,
  UserCardWithTags,
};

export const ChakraProView: React.FC = () => {
  return (
    <>
      <Text as="h3" mb="2" fontSize="18px" fontWeight="bold">
        Stat with Progress Bar
      </Text>
      <StatWithProgessBar />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Table with search
      </Text>
      <TableWithSearch />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Stat with indicator
      </Text>
      <StatWithIndicator />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        SideBar with background
      </Text>
      <SidebarWithBackground />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Stat with Top navbar
      </Text>
      <ShellWithTopNavbar />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        SideBar with search
      </Text>
      <SidebarWithSearch />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Stat with divider
      </Text>
      <StatWithDivider />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Shell with full bg
      </Text>
      <ShellWithFullBg />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Shell with group menu
      </Text>
      <ShellWithGroupedMenu />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Shell with three column
      </Text>
      <ShellWithThreeColumn />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Stat with three column
      </Text>
      <StatWithThreeColumns />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Stat with cenntered indicator
      </Text>
      <StatWithCenteredIndicator />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        StatWithIcon
      </Text>
      <StatWithIcon />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        SListWithVerticalLine
      </Text>
      <ListWithVerticalLine />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Header with action
      </Text>
      <HeaderWithActions />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Header with action and tabs
      </Text>
      <HeaderWithActionsAndTabs />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        HeaderWithBreadcrumbs
      </Text>
      <HeaderWithBreadcrumbs />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        Header with action
      </Text>
      <HeaderWithProfile />
      {/* <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        CustomRadioGroup
      </Text> */}
      {/* <CustomRadioGroup /> */}
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        ButtonCheckBox
      </Text>
      <ButtonCheckBox />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        CardWithSwitch
      </Text>
      <CardWithSwitch />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        HeaderWithSearch
      </Text>
      <HeaderWithSearch />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        CardWithUserDetails
      </Text>
      <CardWithUserDetails />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        VerticalSteps
      </Text>
      <VerticalSteps />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        CardWithForm
      </Text>
      <CardWithForm />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        ButtonRadioBox
      </Text>
      <ButtonRadioBox />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        CardWithRightButton
      </Text>
      <CardWithRightButton />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        CardWithColorAccent
      </Text>
      <CardWithColorAccent />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        CardWithAddButton
      </Text>
      <CardWithAddButton />
      <Text as="h3" mb="2" mt="4" fontSize="18px" fontWeight="bold">
        BannerWithButton
      </Text>
      <BannerWithButton />
    </>
  );
};

export default ChakraProView;
