import React from "react";
import ReactDOM from "react-dom";

import { FoodCard } from "./foodCard";
import "../css/catalog.css";
import { StaticValue } from "../staticValue";
import { useParams } from "react-router-dom";

export function FoodGetParams() {
  let { type } = useParams();

  return type === "food" ? <Food type={type} /> : <Drink type={type} />;
}

export class AllFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filterValue: "",
    };
    this.filterEvent = this.filterEvent.bind(this);
  }

  componentDidMount() {
    fetch(`${StaticValue.BaseURL}/api/food/${this.props.type}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 401) {
          window.location.href = "/notAuthorize";
        }
        if (res.status === 403) {
          window.location.href = "/notAccess";
        }
        if (res.status === 404) {
          window.location.href = "/notFound";
        }
        if (res.status === 500) {
          window.location.href = "/internalServerError";
        }
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  static renderfood(food, filterValue) {
    return (
      <div className="product-container">
        {food
          .filter((comic) =>
            comic.name.toLowerCase().includes(filterValue.toLowerCase())
          )
          .map((item) => (
            <div className="product-item" onClick={this.clickfood}>
              <div className="food-img">
                <img src={item.photo} alt="description of image" />
              </div>
              <div className="product-title">
                <span className="product-title-text"> {item.name} </span>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export class Food extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filterValue: "",
    };
    this.filterEvent = this.filterEvent.bind(this);
  }

  componentDidMount() {
    fetch(`${StaticValue.BaseURL}/api/food/${this.props.type}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 401) {
          window.location.href = "/notAuthorize";
        }
        if (res.status === 403) {
          window.location.href = "/notAccess";
        }
        if (res.status === 404) {
          window.location.href = "/notFound";
        }
        if (res.status === 500) {
          window.location.href = "/internalServerError";
        }
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  static renderfood(food, filterValue) {
    return (
      <div className="product-container">
        {food
          .filter((comic) =>
            comic.name.toLowerCase().includes(filterValue.toLowerCase())
          )
          .map((item) => (
            <div className="product-item" onClick={this.clickfood}>
              <div className="food-img">
                <img src={item.photo} alt="description of image" />
              </div>
              <div className="product-title">
                <span className="product-title-text"> {item.name} </span>
              </div>
            </div>
          ))}
      </div>
    );
  }

  filterEvent(event) {
    this.setState({ filterValue: event.target.value });
    event.preventDefault();
  }

  render() {
    if (this.state !== null) {
      return (
        <div className="catalog-container">
          <input
            type="text"
            className="filter-input"
            placeholder="Поиск"
            onChange={this.filterEvent}
          />
          <FoodCard
            items={this.state.items}
            filterValue={this.state.filterValue}
          ></FoodCard>
        </div>
      );
    } else {
      return "";
    }
  }
}

export class Drink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      filterValue: "",
    };
    this.filterEvent = this.filterEvent.bind(this);
  }

  componentDidMount() {
    fetch(`${StaticValue.BaseURL}/api/food/${this.props.type}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        }
        if (res.status === 401) {
          window.location.href = "/notAuthorize";
        }
        if (res.status === 403) {
          window.location.href = "/notAccess";
        }
        if (res.status === 404) {
          window.location.href = "/notFound";
        }
        if (res.status === 500) {
          window.location.href = "/internalServerError";
        }
      })
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  static renderfood(food, filterValue) {
    return (
      <div className="product-container">
        {food
          .filter((comic) =>
            comic.name.toLowerCase().includes(filterValue.toLowerCase())
          )
          .map((item) => (
            <div className="product-item" onClick={this.clickfood}>
              <div className="food-img">
                <img src={item.photo} alt="description of image" />
              </div>
              <div className="product-title">
                <span className="product-title-text"> {item.name} </span>
              </div>
            </div>
          ))}
      </div>
    );
  }

  filterEvent(event) {
    this.setState({ filterValue: event.target.value });
    event.preventDefault();
  }

  render() {
    if (this.state !== null) {
      return (
        <div className="catalog-container">
          <input
            type="text"
            className="filter-input"
            placeholder="Поиск"
            onChange={this.filterEvent}
          />
          <FoodCard
            items={this.state.items}
            filterValue={this.state.filterValue}
          ></FoodCard>
        </div>
      );
    } else {
      return "";
    }
  }
}