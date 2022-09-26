import React, { Component } from "react";
import "./Hornedbeast.css";

export class Hornedbeast extends Component {
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <div className="photo">
          <img
            title={this.props.title}
            alt={this.props.title}
            src={this.props.imageUrl}
          />
        </div>
        <p>{this.props.description}</p>
      </section>
    );
  }
}

export default Hornedbeast;
