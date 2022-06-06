import React from "react";
import './style.scss'

function Recommendation(props) {
  const { recommendations } = props;
  return (
    <div className="recommendation-wrapper">
      <p className="also-buy">People Also Buy</p>
      <div className="recommended-photos">
        {recommendations.map((photo) => (
          <div
            key={photo.id}
            className="recommended-photo"
            style={{ backgroundImage: `url(${photo.image.src.tiny})` }}
          />
        ))}
      </div>
    </div>
  );
}

export default Recommendation;
