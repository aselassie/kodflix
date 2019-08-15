import React, { Component } from "react";
import { Link } from "react-router-dom";
import getGalleries from "./galleries-get";

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      gallery: {}
    };
  }

  componentDidMount() {
    let galleryId = this.props.match.params.galleryId;
    let gallery = getGalleries()
        .find((gallery) => gallery.id === galleryId);
    this.setState({
      gallery: gallery
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.gallery.name}</h1>
        <Link to="/">Back to home page</Link>
      </div>
    );
  }
}
