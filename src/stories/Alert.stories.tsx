import React from "react";
import { Meta, Story, Canvas } from "@storybook/addon-docs";

import {
  Alert,
  AlertBody,
  AlertHeading,
  AlertText,
  AlertWrapper,
  AlertSeverity,
} from "../bricks/Alert";

<Meta />;

export default {
  title: "Alert",
  component: Alert,
};

export const Custom = () => (
  <>
    <AlertWrapper severity={AlertSeverity.INFO}>
      <AlertBody>
        <AlertHeading text="A sample alert heading" />
        <AlertText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tristique elementum felis. In vehicula magna augue, sit amet fringilla
          lectus finibus a. Integer id tempus dolor.
        </AlertText>
      </AlertBody>
    </AlertWrapper>
    <AlertWrapper severity={AlertSeverity.WARNING}>
      <AlertBody>
        <AlertHeading text="A sample alert heading" />
        <AlertText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tristique elementum felis. In vehicula magna augue, sit amet fringilla
          lectus finibus a. Integer id tempus dolor.
        </AlertText>
      </AlertBody>
    </AlertWrapper>
    <AlertWrapper severity={AlertSeverity.ERROR}>
      <AlertBody>
        <AlertHeading text="A sample alert heading" />
        <AlertText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tristique elementum felis. In vehicula magna augue, sit amet fringilla
          lectus finibus a. Integer id tempus dolor.
        </AlertText>
      </AlertBody>
    </AlertWrapper>
    <AlertWrapper severity={AlertSeverity.SUCCESS}>
      <AlertBody>
        <AlertHeading text="A sample alert heading" />
        <AlertText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tristique elementum felis. In vehicula magna augue, sit amet fringilla
          lectus finibus a. Integer id tempus dolor.
        </AlertText>
      </AlertBody>
    </AlertWrapper>
    <AlertWrapper site emergency>
      <AlertBody>
        <AlertHeading text="A sample alert heading" />
        <AlertText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          tristique elementum felis. In vehicula magna augue, sit amet fringilla
          lectus finibus a. Integer id tempus dolor.
        </AlertText>
      </AlertBody>
    </AlertWrapper>
  </>
);

export const HeadingBrick = () => (
  <AlertWrapper severity={AlertSeverity.SUCCESS}>
    <AlertBody>
      <AlertHeading text="Just an alert heading!" />
    </AlertBody>
  </AlertWrapper>
);

export const TextBrick = () => (
  <AlertWrapper>
    <AlertBody>
      <AlertText>
        Using the text brick, you can create bespoke alerts that do not have
        headings. Additionally, you can pass in ReactNodes to really spice up
        your alerts.
      </AlertText>
    </AlertBody>
  </AlertWrapper>
);

export const Component = () => (
  <Alert
    heading="As a component"
    content="You can also use the main Alert component and pipe props through using the props interface provided."
    severity={AlertSeverity.WARNING}
  />
);
