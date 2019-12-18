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
      <div>
        <label htmlFor={name}>
          {label}
          <input
            name={name}
            type={type}
            className="input train-input"
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
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  type: PropTypes.string,
};
