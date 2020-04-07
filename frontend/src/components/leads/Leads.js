import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getLeads, deleteLead } from '../../actions/leads';
// import PropTypes from 'prop-types';

export class Leads extends Component {


  // static propTypes = {
  //   leads: PropTypes.array.isRequired,
  //   getLeads: PropTypes.func.isRequired,
  //   deleteLead: PropTypes.func.isRequired
  // };

  componentDidMount() {
    this.props.getLeads();
  }

  render () {
    return (
      <Fragment>
        <h2>List of your Jobs!</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {this.props.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button
                    onClick={() => this.props.deleteLead(lead.id)}
                    className='btn btn-danger btn-sm'
                  >
                    {" "}
                    DELETE
                    </button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
      </Fragment>
    );
  }
}

const mapStateToProps = ({leads}) => ({
  leads
});
// what kind of functionality is needed here
const mapDispatchToProps = dispatch => ({
  getLeads: () => getLeads(dispatch),
  deleteLead: (id) => deleteLead(id)(dispatch)
});


export default connect(
  mapStateToProps,
   mapDispatchToProps
 )(Leads);
