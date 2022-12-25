import React from "react";
import { ComponentStory } from "@storybook/react";
import {
  USAlert,
  USAlertBody,
  USAlertContent,
  USAlertHeading,
  USAlertWrapper,
} from "../bricks/Alert";

export default {
  title: "Alert2",
  component: USAlert,
  subcomponents: {
    USAlertBody,
    USAlertContent,
    USAlertHeading,
    USAlertWrapper,
  },
};

const ComponentTemplate: ComponentStory<typeof Alert> = (args) => (
  <USAlert {...args} />
);

export const Primary = ComponentTemplate.bind({});
Primary.args = {
  heading: "A sample alert header",
  content: "This is a sample alert content block.",
};
