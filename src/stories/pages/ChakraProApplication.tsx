import { Text } from "@chakra-ui/react";
import * as React from "react";

import { BannerWithButton } from "./components/BannerWithButton";
import { ButtonCheckBox } from "./components/ButtonCheckBox";
import { ButtonRadioBox } from "./components/ButtonRadioBox";
import { CardWithAddButton } from "./components/CardWithAddButton";
import { CardWithColorAccent } from "./components/CardWithColorAccent";
import { CardWithForm } from "./components/CardWithForm";
import { CardWithRightButton } from "./components/CardWithRightButton";
import { CardWithSwitch } from "./components/CardWithSwitch";
import { CardWithUserDetails } from "./components/CardWithUserDetails";
import { CustomRadioGroup } from "./components/CustomRadioGroup";
import { HeaderWithActions } from "./components/HeaderWithActions";
import { HeaderWithActionsAndTabs } from "./components/HeaderWithActionsAndTabs";
import { HeaderWithBreadcrumbs } from "./components/HeaderWithBreadcrumbs";
import { HeaderWithProfile } from "./components/HeaderWithProfile";
import { HeaderWithSearch } from "./components/HeaderWithSearch";
import { ListWithVerticalLine } from "./components/ListWithVerticalLine";
import { ShellWithFullBg } from "./components/ShellWithFullBg";
import { ShellWithGroupedMenu } from "./components/ShellWithGroupedMenu";
import { ShellWithThreeColumn } from "./components/ShellWithThreeColumn";
import { ShellWithTopNavbar } from "./components/ShellWithTopNavbar";
import { SidebarWithBackground } from "./components/SidebarWithBackground";
import { SidebarWithSearch } from "./components/SidebarWithSearch";
import { StatWithCenteredIndicator } from "./components/StatWithCenteredIndicator";
import { StatWithDivider } from "./components/StatWithDivider";
import { StatWithIcon } from "./components/StatWithIcon";
import { StatWithIndicator } from "./components/StatWithIndicator";
import { StatWithProgessBar } from "./components/StatWithProgessBar";
import { StatWithThreeColumns } from "./components/StatWithThreeColumns";
import { TableWithSearch } from "./components/TableWithSearch";
import { VerticalSteps } from "./components/VerticalSteps";

export {
  VerticalSteps,
  StatWithProgessBar,
  TableWithSearch,
  StatWithIndicator,
  SidebarWithBackground,
  ShellWithTopNavbar,
  SidebarWithSearch,
  StatWithDivider,
  ShellWithFullBg,
  ShellWithGroupedMenu,
  ShellWithThreeColumn,
  StatWithThreeColumns,
  StatWithCenteredIndicator,
  StatWithIcon,
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
