import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getLeads } from '../../actions/leads';

export class Leads extends Component {
  // static propTypes = {
  //   leads: PropTypes.array.isRequired
  // };

  componentDidMount() {
    this.props.getLeads();
  }
  render () {
    return (
      <div>
        <h1>yours Leads List appears here</h1>
      </div>
    )
  }
}

const mapStateToProps = ({leads}) => ({
  leads
});

const mapDispatchToProps = dispatch => ({
  getLeads: () => getLeads(dispatch)

});


export default connect(mapStateToProps, mapDispatchToProps)(Leads);
