import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchIcons from '../../icons/search.svg';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { search: { name: '' } };
  }

  handleInputChange = event => {
    event.preventDefault();

    const { searchPatientAction } = this.props;
    const { name, value } = event.target;

    const { search } = this.state;

    search[name] = value;

    searchPatientAction(search);
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <img className="icons icons--search" src={SearchIcons} alt="search" />
        <input
          type="text"
          placeholder="Rechercher un patient"
          name="name"
          value={search.name}
          onChange={this.handleInputChange}
        />
      </div>
    );
  }
}

Search.propTypes = {
  // eslint-disable-next-line
  searchPatientAction: PropTypes.func.isRequired,
};

export default Search;
