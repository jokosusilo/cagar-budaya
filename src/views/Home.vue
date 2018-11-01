<template>
	<div class="h-64">
	  <div id="control-panel" class="absolute pin-r w-1/4 bg-white py-6 px-4 m-8 shadow h-32 z-10">
	    <form action="">
	      <label for="province" class="block text-grey-darker text-sm font-bold mb-2">Select Province</label>
	      <select v-model="selectedProvince" id="province" class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey">
	        <option disabled value="">-- Select --</option>
          <option :value="province.kode_wilayah" v-for="province in provinceList" :key="province.kode_wilayah">
            {{ province.nama }}
          </option>
	      </select>
	    </form>
	  </div>

    <GoogleMaps name="cagar-budaya"></GoogleMaps>
    
    <div id="cagar-budaya" class="p-8" v-if="cagarBudayaList.length > 0">
  		<div class="flex items-center justify-between mb-3">
        <div>
          <h2 class="font-normal leading-thight">List Cagar Budaya</h2>
        </div>
        <div>
          <p class="text-sm text-grey-darker">Found {{ countCagarBudaya }} Cagar Budaya</p>
          <!-- <input type="text" class="w-full bg-white border border-grey text-grey-darkest p-2 pr-8 rounded leading-tight focus:outline-none focus:border-grey-darkest" placeholder="Search Cagar Budaya"> -->
        </div>
      </div>

  		<div class="flex flex-wrap -m-2">
  			<div class="w-full" v-for="cagarbudaya in cagarBudayaList">
  				<div class="m-2 p-4 bg-white shadow relative">
            <div class="font-bold text-xl mb-2">{{ cagarbudaya.nama }}</div>
            <p class="text-grey-darker text-base">
              {{ concatAlamat(cagarbudaya) }}
            </p>
  				</div>
  			</div>
  		</div>
	  </div>
  </div>
</template>

<script>

import { serverBus } from '../main'
import GoogleMaps from '../components/GoogleMaps'

export default {
  name: 'home',
  components: {
    GoogleMaps,
  },
  data: function () {
  	return {
  		selectedProvince: '',
  		provinceList: [],
  		cagarBudayaList: []
  	}
  },
  computed: {
    countCagarBudaya (){
      return this.cagarBudayaList.length;
    }
  },
  methods: {
  	fetchDataProvince () {
      fetch('data/province.json')
        .then(resp => resp.json())
        .then(data => {
          this.provinceList = data.data;
        })
    },
    concatAlamat (cagarbudaya){
      const alamat = [
        cagarbudaya.alamat_jalan, 
        cagarbudaya.desa_kelurahan, 
        cagarbudaya.kecamatan, 
        cagarbudaya.propinsi
      ].filter(function(item){
        return item != '-';
      });

      return alamat.join(', ');
    }
  },
  mounted: function () {
  	this.fetchDataProvince();
  },
  watch: {
    selectedProvince (provinceCode) {
      if (provinceCode) {
        serverBus.$emit('showLoading', this.cagarBudayaList);
        fetch(`data/${provinceCode.trim()}.json`)
          .then(resp => resp.json())
          .then(data => {
            this.cagarBudayaList = [].concat(data.data);
            serverBus.$emit('renderMap', this.cagarBudayaList);
          })
      }
    }
  },
}
</script>
