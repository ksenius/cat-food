import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './FoodItem.scss';

class FoodItem extends React.Component {
  constructor(props) {
    super(props);

    let initialStatus = 'default';

    if (!this.props.available) {
      initialStatus = 'disabled';
    } else if (this.props.selected) {
      initialStatus = 'selected';
    }

    this.state = {
      status: initialStatus
    };

    this.handleClick = this.handleClick.bind(this);
  }

  getMessage() {
    const { status } = this.state;

    let message = (
      <span>
        Чего сидишь? Порадуй котэ,{' '}
        <a className="food-item__link" href="#" onClick={this.handleClick}>
          купи
        </a>
        .
      </span>
    );

    if (status === 'selected') {
      message = this.props.madeOf;
    } else if (status === 'disabled') {
      message = `Печалька, ${this.props.taste} закончился.`;
    }

    return message;
  }

  handleClick(e) {
    e.preventDefault();

    const { status } = this.state;

    if (status === 'disabled') return;

    if (status === 'selected') {
      this.setState({
        status: 'default'
      });
    } else {
      this.setState({
        status: 'selected'
      });
    }
  }

  render() {
    let className = 'food-item';

    if (this.state.status !== 'default') {
      className += ` ${className}--${this.state.status}`;
    }

    if (this.props.classMix) {
      className += ` ${this.props.classMix}`;
    }

    return (
      <div className={className}>
        <FoodCard
          status={this.state.status}
          clickHandler={this.handleClick}
          {...this.props}
        />
        <div className="food-item__message">{this.getMessage()}</div>
      </div>
    );
  }
}

export default FoodItem;
