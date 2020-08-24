import React from 'react';
import './FoodCard.scss';

class FoodCard extends React.Component {
  constructor(props) {
    super(props);

    this.initialInfoText = 'Сказочное заморское яство';
    this.details = this.calculateDetails();

    this.state = {
      infoText: this.initialInfoText
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  calculateDetails() {
    const { weight } = this.props;

    const details = {
      portions: '10 порций',
      bonus: 'мышь в подарок'
    };

    if (weight === 2) {
      details.portions = '40 порций';
      details.bonus = '2 мыши в подарок';
    } else if (weight === 5) {
      details.portions = '100 порций';
      details.bonus = '5 мышей в подарок';
      details.extra = 'заказчик доволен';
    }

    return details;
  }

  handleClick(e) {
    this.props.clickHandler(e);

    if (this.props.status === 'disabled') return;
    if (this.state.infoText !== this.initialInfoText) {
      this.setState({
        infoText: this.initialInfoText
      });
    }
  }

  handleMouseEnter() {
    if (this.props.status !== 'selected') return;
    this.setState({
      infoText: 'Котэ не одобряет?'
    });
  }

  handleMouseLeave() {
    if (this.props.status === 'disabled') return;
    if (this.props.status !== 'selected') return;

    if (this.state.infoText !== this.initialInfoText) {
      this.setState({
        infoText: this.initialInfoText
      });
    }
  }

  handleKeyDown(e) {
    if (e.key !== 'Enter') return;
    this.handleClick(e);
  }

  render() {
    return (
      <div
        className={
          status !== 'default'
            ? `food-card food-card--${this.props.status}`
            : 'food-card'
        }
        tabIndex={this.props.status !== 'disabled' ? 0 : -1}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        onKeyDown={this.handleKeyDown}
        onFocus={this.handleMouseEnter}
        onBlur={this.handleMouseLeave}
        // Prevent focus event on mousedown
        onMouseDown={(e) => e.preventDefault()}
      >
        <div className="food-card__background"></div>
        <div className="food-card__description">
          <h2 className="food-card__title">
            {this.props.title} <span>{this.props.taste}</span>
          </h2>
          <p
            className={
              this.state.infoText !== this.initialInfoText
                ? 'food-card__info food-card__info--active'
                : 'food-card__info'
            }
          >
            {this.state.infoText}
          </p>
          <p className="food-card__details">
            <span>{this.details.portions}</span>
            <span>{this.details.bonus}</span>
            {this.details.extra ? <span>{this.details.extra}</span> : null}
          </p>
        </div>
        <div className="food-card__weight-label">
          {this.props.weight.toLocaleString()}
          <span>кг</span>
        </div>
      </div>
    );
  }
}

export default FoodCard;
