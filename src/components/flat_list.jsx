import React, { Component } from 'react'
import Flat from './flat'

    const FlatList = (props) => {
      const flats = props.flats
      // console.log(props.flats)
      const renderList = () => {
        return flats.map((flat, index) => {
          return (
            <Flat
              key={flat.lat.toString()}
              price={flat.price}
              name={flat.name}
              imageUrl={flat.imageUrl}
              selected={props.selected.name === flat.name}
              selectFlat={props.selectFlat}
              index={index}
            />
          );
        });
      }
      return (
        <div className="flat-list">
          {renderList()}
        </div>
      );
    };

export default FlatList;
