import React from "react";


export default class Reviews extends React.Component {

  state ={
    display: false
  };
  
getReviewCount=this.props.reviews.length > 1 ? `${this.props.reviews.length} Reviews` : `${this.props.reviews.length} Review`
listReviews = this.props.reviews.map((item, i) => <li key ={i}>{item.description}</li>)

handleShowReviews = () => this.setState({display: this.state.display ? false : true})
  
  render() {

    const stylesheet = {
      list: {
        display: this.state.display ? "block" : "none"
      }
    };
    
    return (
    <div>
      <ul style={stylesheet.list}>
      {this.listReviews}
      </ul>

      <p className="pull-right" onClick = {() => this.handleShowReviews()}>{this.getReviewCount}</p>

    
    </div>
    );
  }
}
