import React from 'react';
// import { storiesOf } from '@storybook/react';
// import isChromatic from 'storybook-chromatic/isChromatic';

import { Attraction, Car } from 'grommet-icons';
import { Grommet, Anchor, Box, Button, Text } from 'grommet';
import { grommet } from 'grommet/themes';

const SimpleBox = () => (
  <Grommet theme={grommet}>
    <h1>This is GrommitBox</h1>
    <Box
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      background="dark-2"
      gap="medium"
    >
      <Box
        pad="large"
        align="center"
        background={{ color: 'light-2', opacity: 'strong' }}
        round
        gap="small"
      >
        <Attraction size="large" />
        <Text>Party</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
      <Box pad="large" align="center" background="dark-3" round gap="small">
        <Car size="large" color="light-2" />
        <Text>Travel</Text>
        <Anchor href="" label="Link" />
        <Button label="Button" onClick={() => {}} />
      </Box>
    </Box>
  </Grommet>
);

class GrommetBox extends React.Component {
  render() {
    return SimpleBox()
  }
}

export default GrommetBox;