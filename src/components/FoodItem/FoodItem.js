import React from 'react';
import FoodCard from '../FoodCard/FoodCard';
import './FoodItem.scss';

class FoodItem extends React.Component {
  constructor(props) {
    super(props);

    let initialStatus = 'default';

    if (this.props.selected) {
      initialStatus = 'selected';
    } else if (!this.props.available) {
      initialStatus = 'disabled';
    }

    this.state = {
      status: initialStatus
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    const status = this.state.status;

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
    const status = this.state.status;

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

    return (
      <div className={
          this.state.status !== 'default'
            ? `food-item food-item--${this.state.status} ${this.props.classMix}`
            : `food-item ${this.props.classMix}`
      }>
        <FoodCard
          status={this.state.status}
          clickHandler={this.handleClick}
          {...this.props}
        />
        <div className="food-item__message">{message}</div>
      </div>
    );
  }
}

export default FoodItem;
