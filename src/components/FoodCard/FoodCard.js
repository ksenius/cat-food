import React from 'react';
import './FoodCard.scss';

class FoodCard extends React.Component {
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

  getDetails() {
    const details = {
      portions: '10 порций',
      bonus: 'мышь в подарок'
    };

    if (this.props.weight === 2) {
      details.portions = '40 порций';
      details.bonus = '2 мыши в подарок';
    } else if (this.props.weight === 5) {
      details.portions = '100 порций';
      details.bonus = '5 мышей в подарок';
      details.extra = 'заказчик доволен';
    }

    return details;
  }

  handleClick(e) {
    const status = this.state.status;

    if (status !== 'disabled') {
      if (status === 'selected') {
        this.setState((state) => ({
          status: 'default'
        }));
      } else {
        this.setState((state) => ({
          status: 'selected'
        }));
      }
    }
  }

  render() {
    const status = this.state.status;

    let message = (
      <span>Чего сидишь? Порадуй котэ, <a href="#">купи</a>.</span>
    );

    if (status === 'selected') {
      message = this.props.madeOf;
    } else if (status === 'disabled') {
      message = `Печалька, ${this.props.taste} закончился.`;
    }

    return (
      <div
        className={
          this.state.status !== 'default'
            ? `food-card food-card--${this.state.status} ${this.props.className}`
            : `food-card ${this.props.className}`
        }
      >
        <div className="food-card__content" onClick={this.handleClick}>
          <div className="food-card__top-decoration"></div>
          <div className="food-card__main">
            <div className="food-card__description">
              <h2 className="food-card__title">
                {this.props.title}
                <span>{this.props.taste}</span>
              </h2>
              <p className="food-card__info">Сказочное заморское яство</p>
              <p className="food-card__details">
                {Object.values(this.getDetails()).map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </p>
            </div>
            <div className="food-card__weight-label">
              {this.props.weight.toLocaleString()}
              <span>кг</span>
            </div>
          </div>
        </div>
        <div className="food-card__message">{message}</div>
      </div>
    );
  }
}

export default FoodCard;
