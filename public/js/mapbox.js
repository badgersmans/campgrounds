/* eslint-disable */

export const displayMap = (locations) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZ3V5eiIsImEiOiJjazlpZmRnZmQxOHU0M2xxYmxscmM3cTVxIn0.I8o4KKKjbKh5D6fG8kGjSw';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/guyz/ck9ifx8nw6cl41ipqbk642nry',
    scrollZoom: false
    // center: [-118.113491,34.111745],
    // zoom: 10,
    // interactive: false
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach(loc => {
    //create marker
    const el = document.createElement('div');
    el.className = 'marker';

    //add marker
    new mapboxgl.Marker({
        element: el,
        anchor: 'bottom'
    }).setLngLat(loc.coordinates).addTo(map);

    //add popup on hover
    new mapboxgl.Popup({
        offset: 40
    })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);


    //extend map bounds to include current location
    bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
    padding: {
        top: 200,
        bottom: 150,
        left: 100,
        right: 100
    }
});
}

