// maybe a problem in map state to props
// this is my leads component handles the lead box and is taken to dashboard
// when the component mounts it gets the leads
// you can also delete the lead
// mapping state to props
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLeads, deleteLead } from '../../actions/leads';
import store from '../../store';

export class Leads extends Component {

  componentDidMount() {
    this.props.getLeads(store.dispatch, store.getState);
  }

  render() {
    console.log(this.props.deleteLead)
    return (
      <Fragment>
        <h2>List of Jobs</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={() => this.props.deleteLead(lead.id, store.dispatch, store.getState)}
                    className="btn btn-danger btn-sm"
                  >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leads,
});

const mapDispatchToProps = dispatch => ({
  getLeads,
  deleteLead
});

export default connect(mapStateToProps, mapDispatchToProps)(Leads);
