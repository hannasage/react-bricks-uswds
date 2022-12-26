# React Bricks: USWDS Edition

A component library that puts the power of composition in your hands.

1. [What's a brick?](#whats-a-brick)
2. [Utility of Bricks and Components](#utility-of-bricks-and-components)

## What's a brick?

>**Unrelated** to reactbricks.com, a CMS service for React frameworks like NextJS and Remix

Have you ever played with LEGOs? Bricks come in a plethora of shapes and sizes, with very clear input and outputs, that can be compounded to form complex "_components_" like a house's walls, or the [International Space Station](https://www.lego.com/en-us/product/international-space-station-21321) (I totally asked for this at Christmas time). React's component system is great, because a single functional component can be anything from a uniform application of styling, up to a full component system with complex `props` interfaces. The problem with the latter, however, is that you can't always count on end users needing the same configurations...even within a standard design system like USWDS.

Bricks, instead, are the former of those; a uniform application of the styling and limited "hard" rules of the design system. These bricks can be used to fine tune your components, so however complex you need to make their configurations, or how custom your implementation, you can rest assured you're adhering to the design system.

### Utility of Bricks and Components

>It's bricks _and_ components, not bricks _or_ components!

Both components and bricks serve a purpose and have utility, but with each, there are limitations as well.

#### Components

Consider the following impelmentation of an Alert:

```typescript
return (
  <div className={`usa-alert ${props.className}`}>
    <div className="usa-alert__body">
      {heading && <h4 className="usa-alert__heading">{heading}</h4>}
      {children && <div>{children}</div>}
    </div>
  </div>
)
```

In the above exported component, the main restriction is that custom classes can only exist at the parent `div` level. This means, because this code is from an installed package, you as the engineer using the package will have to sleuth through source code to discover these limitations and create workarounds. A workaround for something like this, aside from submitting an issue and hoping for the best, might look like: 

```css
.usa-alert {
  div {
    ...
  }
}
```

The above CSS serves a single use, which means any custom styling overrides needed result in larger css files than we'd like.

However, not every team is writing css, not every team needs custom styles, but _all_ teams require brevity. A component's main utility is providing clean interfaces for quickly configuring pieces of your UI without the need to worry about dom structure or styling, and that has _always_ been the most invaluable utility of componentized front-ends! A component library should always export a full component interface with the default implementation, as many design systems consider these implementations in a "suits most cases" kind of way.

Though _some_ standards exist inside rigid bounds, others can and should always be flexed when a [stress case](https://merlin.rebrovic.net/blog/edge-stress-cases/) is presented. 

#### Bricks

Now consider _this_ impelemntation of an Alert:

```typescript
// Second level of the Alert ecosystem; wraps children with props-based styling.
// Required use when building with bricks
export const USAlertBody = ({ children, className }: StylesAndChildren) => {
  return <div className={`usa-alert__body ${className}`}>{children}</div>;
};

// Heading brick
// Use to add a heading to your alert
export const USAlertHeading = ({ className, text }: USAlertHeadingProps) => {
  return <h4 className={`usa-alert__heading ${className}`}>{text}</h4>;
};

// Content brick
// Use to add content to your alert
export const USAlertContent = ({ children, className }: USAlertTextProps) => {
  return <p className={`usa-alert__text ${className}`}>{children}</p>;
};
export const USAlert = ({
  heading,
  content,
  wrapperClasses,
  bodyClasses,
  headingClasses,
  textClasses,
}: USAlertProps) => {
  return (
    <USAlertWrapper className={wrapperClasses}>
      <USAlertBody className={bodyClasses}>
        {heading && <USAlertHeading className={headingClasses} text={heading} />}
        {content && <USAlertContent className={textClasses}>{content}</USAlertContent>}
      </USAlertBody>
    </USAlertWrapper>
  );
}
```

Aside from the obvious difference in naming and props piping styles to every level, it's pretty much the same thing, right? Yes! This is why it's important to remember that it's bricks _and_ components, not bricks _or_ components. Bricks are just the elemental pieces of a component. Now, that said, here's where this pattern's utilty really is: this package not only includes standard components, but also exports each brick so that you aren't beholden to the above dom structure, _and_ your css can be written as reusable classes rather than a single-use block.

In short, opening clients up, not only to the components, but to the bricks as well, makes your component packages much less opinionated and way more felxible.

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
