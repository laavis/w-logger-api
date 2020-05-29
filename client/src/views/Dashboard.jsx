import React from 'react';
import { BrowserRouter, Route, Link, useHistory } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { PageTitle } from '../components/Typography';
import Button from '../components/Button';
import { FlexColumn } from './Login';

export default ({ history }) => {
  return (
    <div>
      <FlexColumn>
        <PageTitle>Dashboard</PageTitle>
        <Link to="/create-exercise">here</Link>
        <Button onClick={() => history.push('/create-exercise')} text="Create Exercise" />
        <Button text="Create Workout" />
      </FlexColumn>
    </div>
  );
};
