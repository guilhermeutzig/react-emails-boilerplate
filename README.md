# React Emails

Project for developing and testing e-mails with React.

# Stack

- Phenomic Static Generator
- Webpack
- SCSS
- Node.js
- Styliner
- Prettier
- PropTypes
- React Router

# Template

- App.js

# Installing

```sh
$ npm install or yarn install
```

### Running the project

```sh
$ npm run dev or yarn dev
```

### Production build

```sh
$ yarn build
```

### Staging build

```sh
$ yarn staging
```

When Staging build is done, the HTML is generated with Placehold.id images that can be tested via Litmus without the necessity of a FTP or any host.
There is a component named `Image` that detectets the environment that is being used and manipulate the src of the images.
After the build, go to `dist`, copy the HTML and paste it on Litmus.

All buils are generated on `dist/` directory.

# Components

### Image Component

Required props:

- width
- height
- folder
- src

Optional props:

- className
- alt

`folder` prop is passed on the definition of `routes`, by the variable `path` and is injected directly on template through `props.folder`. It is mandatory to pass this prop when rendering the `Image` component, because it is used on image `src` definition.

`src` prop will be always used as `${image_name}.{image_format}`, because on the component it is already doing all the definitions of route.

`width` and `height` props are also mandatory, because when the Placehold.it URL is generated, we use the dimensions of the imagem to render the placeholder. (Ex: `http://placehold.it/451x79`)

```sh
<Image
  src="logo.png"
  width="451"
  height="79"
  folder={props.folder}
  alt="React E-mails"
  className="m-auto"
/>
```

### InnerTable Component

Helper component when it is necessary to create a table inside another.

```sh
<tr>
  <td>
    <InnerTable>
      <td className="w-50 ta-center">
        <h2>Inner table example</h2>
      </td>
      <td className="w-50 ta-center">You can use several tds in here!</td>
    </InnerTable>
  </td>
</tr>
```

# Watch on Browser

The server runs on `http://localhost:3333/`.

Just access it and you will have a list of your routes on the `index.js` file.

# Observations

When building, there are two scripts that are executed:

- `pre-build.js`: Script used to "clean" the HTML that will be generated, removing script tags, unnecessary divs and changing `<link>` to styliner work.
- `inlinecss.js`: Script used to transform SCSS to inline styles.

# Do whatever you want!

Since it is React and SCSS that we are dealing with, you can create whenever components and classes you want to help your development!
