import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Exhibiton from "../../components/exhibition";
import Header from "../../components/header";
import Highlighted from "../../components/highlighted";
import { getPhotos } from "../../services/apis";
import API from "../../services/base-api";
import "./style.scss";

function Home() {
  const [photos, setPhotos] = useState([]);
  const [activePhoto, setActivePhoto] = useState(undefined);
  const [categoryOptions, setCategoryOptions] = useState(undefined);
  const [numberOfPhotos, setNumberOfPhotos] = useState(6);
  const [numberOfShowingPhotos, setNumberOfShowingPhotos] = useState(6);
  const filters = useSelector((state) => state.reducer.filters);
  const sort = useSelector((state) => state.reducer.sort);

  const priceOptions = [
    ["Lower than $20", [0, 20]],
    ["$20 - $40", [20.1, 40]],
    ["$40 - $60", [40.1, 60]],
    ["$60 - $80", [60.1, 80]],
    ["$80 - $100", [80.1, 100]],
    ["More than $100", [100.1, 10000000]],  
  ];

  useEffect(() => {
    getPhotos(filterToRequest(filters), sort || {price:1}).then((res) => {
      
      setPhotos(res.photos);
      setNumberOfPhotos(res.totalNumberOfPhotos);
    }
    );
  
    
  }, []);


    useEffect(() => {
      getPhotos(filterToRequest(filters), sort || {price:1}).then((res) => {
        setPhotos(res.photos);
        
        setNumberOfPhotos(res.totalNumberOfPhotos);
      })
       
    
    }, [sort]);

  useEffect(() => {
    getPhotos(filterToRequest(filters), sort || { price: 1 }).then((res) => {
      setPhotos(res.photos);
      setNumberOfPhotos(res.totalNumberOfPhotos);
    });
  }, [filters]);

  useEffect(() => {
    API.get("/featured").then((res) => {
      setActivePhoto(res.data[0]);
    });
  }, []);

  useEffect(() => {
    API.get("/categories").then((res) => {
      setCategoryOptions(res.data.categories);
    });
  }, []);

  const filterToRequest = (obj) => {
    const filterToSend = {};
    if (obj.categories.length > 0) filterToSend.categories = obj.categories;
    if (obj.price.length > 0) filterToSend.price = obj.price;
    return filterToSend;
  };


  const paginatePhotos = (paginated) => {
    setPhotos(paginated);
  }

  return (
    <div>
      <Header />
      {activePhoto !== undefined && <Highlighted photo={activePhoto} />}
      {photos && categoryOptions && (
        <Exhibiton
          photos={photos}
          priceOptions={priceOptions}
          categoryOptions={categoryOptions}
          totalNumberOfPhotos={numberOfPhotos}
          paginatePhotos={paginatePhotos}
          numberOfShowingPhotos={numberOfShowingPhotos}
        />
      )}
    </div>
  );
}

export default Home;
