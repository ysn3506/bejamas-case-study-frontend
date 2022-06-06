import React, { Suspense } from "react";
import ItemCard from "../item-card";
import Pagination from "../pagination";
import "./style.scss";

function Collection(props) {
  const { photos, totalNumberOfPhotos, paginatePhotos, numberOfShowingPhotos } =
    props;
  return (
    <Suspense
      fallback={
        <div class="ui segment">
          <div class="ui active inverted dimmer">
            <div class="ui text loader">Loading</div>
          </div>
          <p></p>
        </div>
      }
    >
      {photos.length === 0 ? (
        <h2 className="no-match">No matched photo :(</h2>
      ) : (
        <>
          <div className="ui stackable three column grid collection">
            {photos.map((photo) => (
              <ItemCard key={photo.id} photo={photo} />
            ))}
          </div>
          <Pagination
            totalNumberOfPhotos={totalNumberOfPhotos}
            paginatePhotos={paginatePhotos}
            numberOfShowingPhotos={numberOfShowingPhotos}
          />
        </>
      )}
    </Suspense>
  );
}

export default Collection;
