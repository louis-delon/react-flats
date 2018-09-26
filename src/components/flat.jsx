import React, { Component } from 'react'

class Flat extends Component {

  handleClick() {
    return this.props.selectFlat(this.props.index)
  }

  render() {
    const style = {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(${this.props.imageUrl})`
    }
    // let cardClass = ["card"]
    // if(this.state.addClass) {
    //   cardClass.push("active")
    // }

    return (
      <div className={this.props.selected ? "card active" : "card"} style={style} onClick={this.handleClick.bind(this)}>
        <div className="card-category">
          {this.props.price}
        </div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    )
  }
}

export default Flat


// import React, { Component } from 'react';

// class Flat extends Component {
//   handleClick = () => {
//     this.props.selectFlat(this.props.index);
//   }

//   render() {
//     return (
//       <div className={`card${this.props.selected ? ' active' : ''}`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
//         <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
//         <div className="card-description">
//           <h2>{this.props.flat.name}</h2>
//         </div>
//         <a className="card-link" href="#" onClick={this.handleClick}></a>
//       </div>
//     );
//   }
// }

// export default Flat;
