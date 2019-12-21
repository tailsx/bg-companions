import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

class Input extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      readOnly: true,
    };
  }

  toggleReadOnly() {
    this.setState(state => ({ readOnly: !state.readOnly }));
  }

  render() {
    const { label, type = 'text', ...rest } = this.props;
    const { readOnly } = this.state;
    const name = `train-input-${label.replace(' ', '-').toLowerCase()}`;

    return (
      <div className="input-wrapper">
        <label htmlFor={name}>
          <span className="label">{label}</span>
          <input
            name={name}
            type={type}
            className="input"
            readOnly={readOnly}
            onFocus={() => this.toggleReadOnly()}
            onBlur={() => this.toggleReadOnly()}
            {...rest}
          />
        </label>
      </div>
    );
  }
}

export default Input;

Input.propTypes = {
  readOnly: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};
