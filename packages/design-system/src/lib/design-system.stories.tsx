import { Story, Meta } from "@storybook/react";
import { DesignSystem, DesignSystemProps } from "./design-system";

export default {
  component: DesignSystem,
  title: "DesignSystem",
} as Meta;

const Template: Story<DesignSystemProps> = (args) => <DesignSystem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
