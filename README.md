# @ff6347/named-css-colors

List of named CSS colors with some helper functions.

## Description

There are many packages for named CSS colors. This one is mine. Used in:

- https://github.com/ff6347/css-color-names-raycast (Raycast extension)
- https://github.com/ff6347/named-css-colors-search-react (React SPA)

API might change. Still not sure what is the best way to structure the data.

## Install

```bash
npm install @ff6347/named-css-colors
```

## Usage

```ts
import { colors } from "@ff6347/named-css-colors";

console.log(colors);
```

## Helper functions

```ts
import {
	getHue,
	hexToRgb,
	rgbToHsl,
	getBrightness,
} from "@ff6347/named-css-colors";

const color = colors.red;

const hue = getHue(colors.hashmap.black.hex);
```


<!--bump 2025-12-19 -->
<!--bump 2025-12-25 -->
