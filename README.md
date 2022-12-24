# USWDS Bricks

A component library that puts the power of composition in your hands.

## What's a brick?

Have you ever played with LEGOs? Bricks come in a plethora of shapes and sizes, with very clear input and outputs, that can be compounded to form complex "_components_" like a house's walls, or the [International Space Station](https://www.lego.com/en-us/product/international-space-station-21321) (I totally asked for this at Christmas time). React's component system is great, because a single functional component can be anything from a uniform application of styling, up to a full component system with complex `props` interfaces. The problem with the latter, however, is that you can't always count on end users needing the same configurations...even within a standard design system.

Bricks, instead, are the former of those; a uniform application of the styling and limited "hard" rules of the design system. These bricks can be used to fine tune your components, so however complex you need to make their configurations, or how custom your implementation, you can rest assured you're adhering to the design system.

## The plan

I have two prerequisites to opening this repository up to contributions:

1. There needs to be solid documentation and examples around how to build bricks and components.
2. Infrastructure supporting CI/CD for documentation, testing standards, and rule enforcement.

Once these requirements are met, contributions from other parties can begin flowing in (optimistic, I know). 

Additionally, my hope is to migrate this under an organizational umbrella and form a community-led team of maintainers from within the GovTech space. I'm targeting, specifically, companies within the [Digital Services Coalition](https://digitalservicescoalition.org/#/), as my work often allows me to cross paths with members of the coalition.

Finally, keeping up-to-date with USWDS compliance is paramount! That is the point of this whole library. The goal is to make USWDS compliance for React apps in GovTech as simple as addressing a `dependabot` PR. 

And the dream? I don't know... USWDS adoption? 🤷🏻‍♂️

## Technical specifications

Because compliance standards might vary project-to-project, it's important to support most major versions of React, Typescript, and the USWDS design system.

#### Currently supported

v0.1.0-alpha
- React `18.2.x`
- TypeScript `4.9.x`
- USWDS `3.3.x`
