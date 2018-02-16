import { control, Map as LMap, TileLayer } from "leaflet";
import { osmAttrib, osmUrl } from "./OsmTileLayer";

// http://epsg.io/1416-area
const waBounds = new Array<[number, number]>(
  [45.54, -116.91],
  [49.05, -124.79]
);

const map = new LMap("map").fitBounds(waBounds);
const osmLayer = new TileLayer(osmUrl, {
  attribution: osmAttrib
}).addTo(map);

const layersControl = control
  .layers({
    OpenStreetMap: osmLayer
  })
  .addTo(map);
