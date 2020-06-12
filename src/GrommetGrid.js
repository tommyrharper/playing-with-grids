import React from 'react';
import { Grid, Box } from 'grommet';

class GrommetGrid extends React.Component {
  render() {
    return(
    <div>
      <h1>This is GrommitGrid</h1>
      <Grid
        rows={['xxsmall', 'xsmall']}
        columns={['xsmall', 'small']}
        gap="small"
        alignContent="center"
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'nav', start: [0, 1], end: [0, 1] },
          { name: 'main', start: [1, 1], end: [1, 1] },
        ]}
      >
        
        <Box gridArea="header" background="brand" />
        <Box gridArea="nav" background="brand" />
        <Box gridArea="main" background="brand" />
    </Grid>
  </div>
    )
  }
}

export default GrommetGrid;