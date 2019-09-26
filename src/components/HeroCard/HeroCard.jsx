import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export class HeroCard extends Component {
  static displayName = "HeroCard";
  render() {
    const { avatar, first_name, last_name, id } = this.props.hero;

    return (
      <Fragment>
        <div className="col-sm-6 col-md-4 hero-card">
          <div className="hero-card-container border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">
            <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">
              <img
                src={avatar}
                className="d-block h-100"
              />
            </div>
            <div className="px-3">
              <span className="hero-name text-dark d-block font-weight-bold">
                {`${first_name} ${last_name}`}
              </span>
              <span className="hero-id text-secondary text-uppercase">
                {id}
              </span>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

HeroCard.propTypes = {
  hero: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })
};

export default HeroCard;
