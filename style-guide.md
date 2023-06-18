# Body Mass Index style-guide

This project will be build to be responsive for the three devices. 

- mobile - 375px
- tablet - 768px
- desktop - 1440px

The TypeScale for this project is the **Perfect Fourth**

# Font face

```css
@font-face {
	font-family: var(--ff-Inter); 
	src: url() format("woff2") tech("variations"), 
	src: url() format("woff2-variations"), 
	src: url() format("ttf") tech("variations"),
	src: url() format("ttf-variations");
	font-weight: var(--fw-100) var(--fw-900); 
	font-style: oblique -10deg 0deg; 
}
```

## Color

```css
--blue: hsl(227, 92%, 58%); 
--gun-metal: hsl(215, 31%, 21%); 
--dark-electric-blue: hsl(215, 17%, 45%); 
--borders: hsl(200, 24%, 88%); 
--white: hsl(0, 0%, 100%); 
```

## Shadow

```css
--box-shadow: 16px 32px 56px 0px hsla(211, 40%, 69%, 0.25);  
```

## Gap

```css
--gap-0: 0px; 
--gap-1: 1px; 
--gap-1_25: 0.125rem; 
--gap-2_5: 0.25rem; 
--gap-3_75: 0.375rem; 
--gap-5: 0.5rem; 
--gap-6_25: 0.625rem; 
--gap-7_5: 0.75rem; 
--gap-8_75: 0.875rem; 
--gap-10: 1rem; 
--gap-12_5: 1.25rem; 
--gap-15: 1.5rem; 
--gap-17_5: 1.75rem; 
--gap-20: 2rem; 
--gap-22_5: 2.25rem; 
--gap-27_5: 2.75rem; 
--gap-30: 3rem;
--gap-35: 3.5rem; 
--gap-40: 4rem; 
--gap-50: 5rem; 
--gap-60: 6rem; 
--gap-70: 7rem; 
--gap-80: 8rem; 
--gap-90: 9rem; 
--gap-100: 10rem; 
--gap-110: 11rem; 
--gap-120: 12rem; 
--gap-130: 13rem; 
--gap-140: 14rem; 
--gap-150: 15rem; 
--gap-160: 16rem; 
--gap-180: 18rem; 
--gap-200: 20rem; 
--gap-240: 24rem;
```

## Display

```css
--hidden: none; 
--block: block; 
--inline: inline; 
--inline-block: inline-block; 
--flex: flex;
--inline-flex: inline-flex; 
--grid: grid; 
--inline-grid: inline-grid;
```

## Radius

```css
--radius-1: 2px; 
--radius-2: 4px; 
--radius-3: 6px;
--radius-4: 8px; 
--radius-5: 12px; 
--radius-6: 16px; 
--radius-7: 20px; 
--radius-8: 24px; 
--radius-9: 26px; 
--radius-10: 28px; 
--radius-11: 30px; 
--radius-12: 32px; 
--radius-13: 34px; 
--radius-14: 36px; 
--radius-15: 38px; 
--radius-16: 40px;
--radius-17: var(--radius-6) 999px 999px var(--radius-6); 
```

## Screen Readers

```css
--sr-only-width: 1px; 
--sr-only-height: 1px; 
--sr-only-padding: 0px; 
--sr-only-margin: -1px; 
--sr-only-border-width: 0; 
--sr-only-left: -1000px; 
--sr-only-top: auto;
```

## Gradient

```css
--gradient: linear-gradient(90deg hsl(227, 92%, 59%) 0% hsl(227, 100%, 67%) 100%); 
```

## Typography

```css
--ff-Inter-sans-serif: var(--ff-Inter), sans-serif; 
--ff-Inter: "Inter"; 
--fw-100: 100; 
--fw-400: 400; 
--fw-600: 600; 
--fw-900: 900; 
--line-height-none: 1; 
--line-height-tight: 1.25; 
--line-height-snug: 1.375; 
--line-height-normal: 1.5; 
--line-height-relaxed: 1.625; 
--line-height-loose: 2; 
--letter-spacing-tighter: -0.05em; 
--letter-spacing-tight: -0.025em; 
--letter-spacing-normal: 0em; 
--letter-spacing-wide: 0.025em; 
--letter-spacing-wider: 0.05em; 
--letter-spacing-widest: 0.1em;
--fs-1: clamp(0.75rem, calc(0.73rem + 0.17vw), 0.88rem);
--fs-2: clamp(1.00rem, calc(0.97rem + 0.22vw), 1.17rem);
--fs-3: clamp(1.33rem, calc(1.29rem + 0.29vw), 1.56rem);
--fs-4: clamp(1.78rem, calc(1.72rem + 0.39vw), 2.07rem);
--fs-5: clamp(2.37rem, calc(2.29rem + 0.52vw), 2.76rem);
--fs-6: clamp(3.16rem, calc(3.06rem + 0.70vw), 3.68rem);
```

## Space

```css
--space-1: clamp(0.19rem, calc(0.18rem + 0.08vw), 0.25rem);
--space-2: clamp(0.38rem, calc(0.36rem + 0.08vw), 0.44rem)
--space-3: clamp(0.56rem, calc(0.54rem + 0.17vw), 0.69rem);
--space-4: clamp(0.75rem, calc(0.73rem + 0.17vw), 0.88rem);
--space-5: clamp(1.13rem, calc(1.09rem + 0.25vw), 1.31rem);
--space-6: clamp(1.50rem, calc(1.45rem + 0.33vw), 1.75rem);
--space-7: clamp(2.25rem, calc(2.18rem + 0.50vw), 2.63rem);
--space-8: clamp(3.00rem, calc(2.90rem + 0.66vw), 3.50rem);
--space-9: clamp(4.50rem, calc(4.36rem + 0.99vw), 5.25rem);
--space-9: clamp(6.00rem, calc(5.81rem + 1.32vw), 7.00rem);
--space-1-2: clamp(0.19rem, calc(0.14rem + 0.33vw), 0.44rem);
--space-2-3: clamp(0.38rem, calc(0.32rem + 0.41vw), 0.69rem);
--space-3-4: clamp(0.56rem, calc(0.50rem + 0.41vw), 0.88rem);
--space-4-5: clamp(0.75rem, calc(0.64rem + 0.74vw), 1.31rem);
--space-5-6: clamp(1.13rem, calc(1.01rem + 0.83vw), 1.75rem);
--space-6-7: clamp(1.50rem, calc(1.29rem + 1.49vw), 2.63rem);
--space-7-8: clamp(2.25rem, calc(2.01rem + 1.65vw), 3.50rem);
--space-8-9: clamp(3.00rem, calc(2.57rem + 2.98vw), 5.25rem);
--space-9-10: clamp(4.50rem, calc(4.02rem + 3.31vw), 7.00rem);
--space-4-6: clamp(0.75rem, calc(0.56rem + 1.32vw), 1.75rem);
--space-6-8: clamp(1.50rem, calc(1.12rem + 2.64vw), 3.50rem);
--space-5-7: clamp(1.13rem, calc(0.84rem + 1.98vw), 2.63rem);
```