import React from 'react';

export default class extends React.Component {
  componentDidMount() {
    $(".container").mapael({
      map : {
        name : "game_board",
        zoom : {
          enabled : true,
          maxLevel : 10
        },
        defaultArea: {
          eventHandlers: {
            'click': function(e, id, mapElem, textElem) {
              alert(id);
            }
          }
        }
      }
    });
  }
  render() {
    return(
      <div className="container">
        <div className="map"></div>
      </div>
    )
  }
};
