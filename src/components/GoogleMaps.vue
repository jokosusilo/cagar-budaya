<template>
	<div id="map" class="w-full p-8" style="height: 400px;" :id="mapName"></div>
</template>

<script>
	import { serverBus } from '../main';

	export default {
	  name: 'GoogleMaps',
	  props: [
	  	'name',
	  ],
	  data() {
	    return {
	      mapName: this.name + "-map",
	      map: null,
	      mapCenter: {
	      	latitude: -0.9396183,
	      	longitude: 121.4729925 
	      },
	      bounds: null,
	      markers: []
	    }
	  },
	  mounted: function(){
	  	this.bounds = new google.maps.LatLngBounds();

	    this.map = new google.maps.Map(document.getElementById(this.mapName), {
	      center: new google.maps.LatLng(this.mapCenter.latitude, this.mapCenter.longitude),
			  zoom: 4.5,
			  zoomControl: true,
			  mapTypeControl: false,
			  scaleControl: true,
			  streetViewControl: false,
			  rotateControl: true,
			  fullscreenControl: false
	    });

	    serverBus.$on('renderMap', (cagarBudayaList) => {
	    	this.clearMarker();
	    	cagarBudayaList.forEach((cagarbudaya) => {
		      const position = new google.maps.LatLng(cagarbudaya.lintang, cagarbudaya.bujur);
		      const marker = new google.maps.Marker({ 
		        position,
		        map: this.map
		      });
		
			    this.markers.push(marker)
		      this.map.fitBounds(this.bounds.extend(position))
		    });
	    });
	  },
	  methods: {
	  	clearMarker(){
	  		for (var i = 0; i < this.markers.length; i++) {
          this.markers[i].setMap(null);
        }
        this.markers = [];
	  	},
	  	renderMarker(){

	  	}
		}
	}
</script>
