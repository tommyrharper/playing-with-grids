import React from "react";
// import { storiesOf } from "@storybook/react";

import { Grommet, Box, Grid, Heading, ResponsiveContext } from "grommet";

import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

// Two responsive grids
//    - First one with a known number of elements
//    - Second one with an unknown number of elements

// set custom breakpoints so we can see the changes
const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        value: 600
      },
      medium: {
        value: 900
      },
      large: {
        value: 3000
      }
    }
  }
});

// columns, rows and areas are for Grid with a known number of contents / boxes.

// If the size is small, we only see 1 column
// If the size is medium, we only see 2 columns
// If the size is either large or xlarge, we see 3 columns
const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto", "auto"],
  xlarge: ["auto", "auto", "auto"]
};

// If the size is small, we have 3 rows
// If the size is medium, we have 2 rows
// If the size is large or xlarge, we have 1 row
const rows = {
  small: ["xsmall", "xsmall", "xsmall"],
  medium: ["xsmall", "xsmall"],
  large: ["xsmall"],
  xlarge: ["xsmall"]
};

// Let's say this is returned from an API
const animals = [
  "dog",
  "cat",
  "pig",
  "cow",
  "giraffe",
  "elephant",
  "dinosaur",
  "chicken",
  "duck",
  "tiger",
  "lion",
  "cheetah",
  "smooble"
];

// Create box for each animal
const listAnimalsBoxes = animals.map(animalName => (
  <Box
    elevation="large"
    key={animalName}
    background="light-3"
    flex={false}
    justify="center"
    align="center"
  >
    <Heading level={2}>{animalName}</Heading>
  </Box>
));

const Responsive = ({
  children,
  overrideColumns,
  overrideRows,
  areas,
  ...props
}) => (
  <ResponsiveContext.Consumer>
    {size => {
      // Take into consideration if not array is sent but a simple string
      let columnsVal = columns;
      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      let rowsVal = rows;
      if (rows) {
        if (rows[size]) {
          rowsVal = rows[size];
        }
      }

      // Also if areas is a simple array not an object of arrays for
      // different sizes
      let areasVal = areas;
      if (areas && !Array.isArray(areas)) areasVal = areas[size];

      return (
        <Grid
          {...props}
          areas={!areasVal ? undefined : areasVal}
          rows={!rowsVal ? size : rowsVal}
          columns={!columnsVal ? size : columnsVal}
        >
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

const ResponsiveGrid = () => (
  <Grommet theme={customBreakpoints}>
    <Box>
      <h1>This is GrommitInfinite, for an unlimited number of boxes</h1>
      <Responsive gap="small" margin="medium" columns="medium" rows="xsmall">
        {listAnimalsBoxes}
      </Responsive>
    </Box>
  </Grommet>
);

class GrommetGridInfinite extends React.Component {
  render() {
    return ResponsiveGrid()   
  }
}

export default GrommetGridInfinite;