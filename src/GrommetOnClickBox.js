import React from "react";
// import { storiesOf } from "@storybook/react";
import { Attraction } from "grommet-icons";

import { Grommet, Box, Text } from "grommet";
// import { grommet } from "../../../themes";

const OnClickBox = () => (
  <Grommet >
    <Box justify="center" align="center" pad="large">
      {}
      <Box
        border
        pad="large"
        align="center"
        round
        gap="small"
        hoverIndicator
        onClick={() => {
          alert("clicked");
        }}
      >
        <Attraction size="large" />
        <Text>Party</Text>
      </Box>
    </Box>
  </Grommet>
);

class GrommetOnClickBox extends React.Component {
  render() {
    return OnClickBox()
  }
}

export default GrommetOnClickBox;
