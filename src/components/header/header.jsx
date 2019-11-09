// @flow
import React from 'react';
import logo from 'src/logo.svg';
import { Container } from 'reactstrap';

import "./styles.scss";

type Props = {
};

function Header({ onSearch }: Props) {
  return (
    <Container>
      <div className="navbar mx-y">
        <img src={logo} alt="logo" height="45" />

        <div className="float-right mb-0 app-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search for Artists, Songs, or Podcasts"
              onChange={(e) => {
                if (e.target.value) {
                  onSearch(e.target.value);
                }
              }}
            />
            <span className="search-icon mdi mdi-magnify" />
          </div>
        </div>
      </div>
    </Container>
  );
}

Header.defaultProps = {
};

export default Header;
