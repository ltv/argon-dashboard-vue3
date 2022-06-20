<template>
  <div class="map">
    <GoogleMap :api-key="googleApi" class="w-full h-[600px]" :center="center" :zoom="15">
      <Marker :options="markerOptions" />
    </GoogleMap>
  </div>
</template>

<script>
import env from 'core/env'
import { defineComponent, ref } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const googleApi = ref(env('VITE_GOOGLE_API_KEY'))
    const center = { lat: 10.796993388528781, lng: 106.66491916304027 }
    const markerOptions = { position: center, label: 'LTV', title: 'Công ty TNHH phần mềm LTV' }

    return { center, markerOptions, googleApi }
  },
})
</script>

<style lang="scss" scoped>
.map {
  @apply sm:w-[92%] md:w-[94%] lg:w-[96%] w-[92%] rounded-lg overflow-hidden p-0 mx-auto #{!important};
}
</style>
