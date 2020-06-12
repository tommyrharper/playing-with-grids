# Playing with grids in react


## List of Items created

- FlexBox: Simply using CSS Flexbox.
- GrommitOnClickBox: Box that changes onClick using Grommit.
- GrommitBox: Simply some boxes created using Grommit.
- GrommitFinite: A limited number of boxes in a grid.
- GrommitInfinite: An unlimited number of boxes in a grid.
- GridList: for React-native, not applicable here.

## React-native

GridList is for react native.


## Grommet

```
npm install grommet styled-components polished --save
```
Then you can use a statement like this:
```JavaScript
import { Grommet, Box, Grid, Heading, ResponsiveContext } from "grommet";
```

I have created two Grommet Grids, a GrommetGridFinite and GrommetGridInfinite.

These are two responsive grids
   - First one with a known number of elements
   - Second one with an unknown number of elements

## FlexBox

FlexBox uses plane CSS.

## Material UI

```
npm install @material-ui/core
```

Then you can use a statement like this:
```JavaScript
import React from 'react';
import { Button } from '@material-ui/core';

function App() {
  return <Button color="primary">Hello World</Button>;
}
```