# NextJS before after slider component (Updated)
Simple slider component for comparing images. Before and after.

[![screencast demo](./screencast.gif)](./screencast.gif)

## Demo
https://smeleshkin.github.io/react-before-after-slider-component/
## Build
npm run build:npm
## Basic usage 
```
npm install next-before-after-slider-component --save
```

Then use it in your Next JS app:
```js

import ReactBeforeSliderComponent from 'next-before-after-slider-component';
import 'next-before-after-slider-component/dist/build.css';

const FIRST_IMAGE = {
  imageUrl: 'https://example.com/.../some-image.jpg'
};
const SECOND_IMAGE = {
  imageUrl: 'https://example.com/.../some-image-2.jpg'
};
/* ... */
<ReactBeforeSliderComponent
    firstImage={FIRST_IMAGE}
    secondImage={SECOND_IMAGE}
/>

 /* Or use NODE Element */

<ReactBeforeSliderComponent
    ComponentBefore={<Image src="..."/>}
    ComponentAfter={<Image src="..."/>}
/>
/* ... */
```
## Props

| Attribute                  | Required  | Type                | Default | Description                                                           
|----------------------------|---------------------------------|---------|---------|-------------------------------
| `firstImage`               | true      | Image               |         | Image object with source url. 
| `secondImage`              | true      | Image               |         | Image object with source url.
| `delimiterColor`           | false     | string              | #fff    | Custom delimiter background color. 
| `currentPercentPosition`   | false     | number              | 50      | Start delimiter position. Or also the current position, if it will change in parent.
| `className`                | false     | string              |         | Custom classname.
| `withResizeFeel`           | false     | boolean             | true    | Feeling to window resizing.
| `onReady`                  | false     | function            |         | On slider ready callback.
| `onVisible`                | false     | function            |         | On slider visible in viewport callback.
| `onChangePercentPosition`  | false     | function            |         | On delimiter position update callback. Has new position parameter.
| `feelsOnlyTheDelimiter`    | false     | function            | false   | Only the separator feels clicks. Not any zone of the component.
| `delimiterIconStyles`      | false     | React.CSSProperties |         | Custom styles of delimiter icon. E.g. for a logo. See "Custom logo example"
| `ComponentBefore`          | false     | React.Node          |         | Add a Custom React Node or NextJS Image tag (Exemple : < Image src="..." alt="..." >)
| `ComponentAfter`           | false     | React.Node          |         | Add a Custom React Node or NextJS Image tag (Exemple : < Image src="..." alt="..." >)

## Specific Types

```ts
interface Image {
    imageUrl: string,
    alt?: string,
}
```

## Custom logo example
```ts
// Pass this as a delimiterIconStyles property
const delimiterIconStyles = {
   width: '50px',
   height: '50px',
   backgroundSize: 'cover',
   borderRadius: 'none',
   backgroundImage: 'url(<some-path-here>)'
}

```
