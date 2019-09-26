import React, { PureComponent } from "react";
import { PropTypes as T } from "prop-types";

export class Button extends PureComponent {
  constructor(props) {
    super(props);
  }
  static displayName = "Button";
  static propTypes = {
    loading: T.bool,
    onClick: T.func
  };

  render() {
    const { onClick, loading, error } = this.props;
    return (
      <button onClick={onClick} disabled={loading}>
        {error ? "Error" : loading ? "..." : "Create New"}
      </button>
    );
  }
}

export default Button;
