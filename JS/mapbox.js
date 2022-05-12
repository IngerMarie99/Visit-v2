export async function getMap() {

    const stations = await getStations();

    const capacity = await getCapacity();

    const featuresCapacity = (id) => {
        return capacity.find(station => {
            return station.station_id === id;
        })
    };

    const featuresStations = stations.map(station => {
        
        const capacity = featuresCapacity(station.station_id);
        return {
            'type': 'Feature',
            'properties': {
                station: station.name,
                address: station.address,
                availableBikes: capacity.num_bikes_available,
                availableDocks: capacity.num_docks_available
                },
            'geometry': {
                type: 'Point',
                coordinates: [station.lon, station.lat]
                }
            }
    });

    const geoStation = {
        'type': 'FeatureCollection',
        'features': featuresStations
    }
    
    const mapBoxKey = 'pk.eyJ1IjoiaW5nZXJtYXJpZWd1biIsImEiOiJjbDFidjFxNTQwMWh6M2ltcmsyNG9kMWd3In0.fpjbyxlqJEvF2nEHcdUM1Q';
    mapboxgl.accessToken = mapBoxKey;
    const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [10.7507348, 59.9108712], // starting position [lng, lat]
    zoom: 14 // starting zoom
    }
);

    geoStation.features.forEach(station => {
        const markerEl = document.createElement('div');
        markerEl.classList.add('marker');

        markerEl.addEventListener('click', () => {
            // forEach för att nollställa alla markers som blir markerade. Ligger här och i funktionen
            const allMarkers = document.querySelectorAll('.marker');
            allMarkers.forEach((item) => {
                item.classList.remove('marker_active');
            })

            map.flyTo({
                center: [
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1]
                ],
                essential: true,
                zoom:16
            });
            
            popUpMessage(
                station.properties.station,
                station.properties.address,
                station.properties.availableBikes,
                station.properties.availableDocks,
                station.geometry.coordinates[0],
                station.geometry.coordinates[1],
                map
            );
        markerEl.classList.add('marker_active');
        
        });
        // Add markers to the map.
        new mapboxgl.Marker(markerEl)
        .setLngLat(station.geometry.coordinates)
        .addTo(map);
    });
};

function popUpMessage(station, address, bikes, docks, lat, lon, map) {
    const bikeContainerEl= document.querySelector('.bikeInfo');
    const allMarkers =document.querySelectorAll('.marker');

    bikeContainerEl.classList.remove('hidden');
    const closeDetails =
    document.querySelector('.bikeInfo-close');
        closeDetails.addEventListener('click',() => {
            allMarkers.forEach((item)=>{
                item.classList.remove('marker_active')
            })
            bikeContainerEl.classList.add('hidden');
            map.flyTo({
                center:[
                    lat, lon
                ],
                essential:true,
                zoom:14
            });
        })

    const stationTitle =
    document.querySelector('.bikeInfo h2');
        stationTitle.textContent= station; 
    
    const stationAddress =
    document.querySelector('.bikeInfo p');
        stationAddress.textContent = address;
    
    const bikeCapacity =
    document.querySelector('.bikeInfo .availability .capacity');
        bikeCapacity.textContent = bikes;

    const dockCapacity =
    document.querySelector('.bikeInfo .availability2 .capacity')
        dockCapacity.textContent = docks;
};

async function getStations() {
    const url = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json';
    const response = await fetch(url);
    const stations = await response.json();
    return stations.data.stations;
}

async function getCapacity() {
    const urlCapacity = 'https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json';
    const response = await fetch(urlCapacity);
    const capacity = await response.json();
    return capacity.data.stations;
}
