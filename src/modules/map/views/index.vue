<template>
  <div class="map w-full bg-red-500">
    <GoogleMap
      api-key="AIzaSyCFs6ab06NC5SFmqtF8XemXlKm5wHRXeVg"
      style="width: 100%; height: 500px; border-radius: 50px"
      :center="center"
      :zoom="15"
    >
      <Marker :options="markerOptions" />
    </GoogleMap>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 10.796993388528781, lng: 106.66491916304027 }
    const markerOptions = { position: center, label: 'LTV', title: 'Công ty TNHH phần mềm LTV' }

    return { center, markerOptions }
  },
})
</script>

<style lang="scss" scoped>
.map {
  @apply w-[96%] rounded-lg overflow-hidden p-0 mt-[25px] mb-[38px] mx-auto #{!important};
}
</style>
