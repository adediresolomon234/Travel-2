import React, { useState } from "react"
import ReactMapGl, {Marker, Point} from "react-map-gl";
import getCenter from "geolib/es/getCenter";


function Map ({searchResults}) {
 

  //Transform the search results object into the 

  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat,
  }));
   const center = getCenter(coordinates);

   const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    
  });

  return (
    <ReactMapGl
     mapStyle="mapbox://styles/adedire234/clbqc2800000314qny9juq2xq"
     mapboxAccessToken={process.env.mapbox_key}
     {...viewport}
     onViewportChange={(nextViewport) => setViewport(nextViewport)}
     >
       {searchResults.map(result => (
      <div key={result.long}>
         {/* <Marker 
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
         >
            <img  src="kindpng_235947.png " alt="location" />
         </Marker> */}
      </div>
     ))}
     </ReactMapGl>
  )
}

export default Map;