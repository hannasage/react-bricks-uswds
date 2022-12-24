import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  Alert,
  AlertBody,
  AlertContent,
  AlertHeading,
  AlertWrapper,
} from "../bricks/Alert";

export default {
  title: "Alert2",
  component: Alert,
  subcomponents: {
    AlertBody,
    AlertContent,
    AlertHeading,
    AlertWrapper,
  },
};

const ComponentTemplate: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args} />
);

export const Primary = ComponentTemplate.bind({});
Primary.args = {
  heading: "A sample alert header",
  content: "This is a sample alert content block.",
};
