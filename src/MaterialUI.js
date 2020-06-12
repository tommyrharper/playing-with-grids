import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function MaterialUI() {
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div>
      <h1>This is MaterialUI</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
