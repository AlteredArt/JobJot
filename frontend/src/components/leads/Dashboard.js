// this is brings in form and leads, which is taken to app
import React, { Fragment } from 'react';
import Form from './Form';
import Leads from './Leads';

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Leads />
    </Fragment>
  );
}
