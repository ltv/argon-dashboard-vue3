<template>
  <div class="w-full">
    <div class="w-full">
      <div class="grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-3 gap-7">
        <div class="col-span-3">
          <el-card
            class="border-white"
            :body-style="{ 'padding-top': '16px', 'padding-bottom': '16px' }"
          >
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-semibold text-0.8125 text-muted mb-0">TOTAL TRAFFIC</h5>
                </div>
                <h2 class="text-xl text-[#32325d] font-semibold mb-0 leading-7.5">350,897</h2>
              </div>
              <div
                class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#f5365c] to-[#f56036]"
              >
                <font-awesome-icon :icon="['fas', 'hand-point-up']" size="lg" />
              </div>
            </div>
            <p class="mt-4 mb-0 text-sm">
              <span class="text-success mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-normal">Since last month</span>
            </p>
          </el-card>
        </div>
        <div class="col-span-3">
          <el-card
            class="border-white"
            :body-style="{ 'padding-top': '16px', 'padding-bottom': '16px' }"
          >
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-semibold text-0.8125 text-muted mb-0">NEW USERS</h5>
                </div>
                <h2 class="text-xl text-[#32325d] font-semibold mb-0 leading-7.5">2,356</h2>
              </div>
              <div
                class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#fb6340] to-[#fbb140]"
              >
                <font-awesome-icon :icon="['fas', 'chart-pie']" size="lg" />
              </div>
            </div>
            <p class="mt-4 mb-0 text-sm">
              <span class="text-success mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-normal">Since last month</span>
            </p>
          </el-card>
        </div>
        <div class="col-span-3">
          <el-card
            class="border-white"
            :body-style="{ 'padding-top': '16px', 'padding-bottom': '16px' }"
          >
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-semibold text-0.8125 text-muted mb-0">SALES</h5>
                </div>
                <h2 class="text-xl text-[#32325d] font-semibold mb-0 leading-7.5">924</h2>
              </div>

              <div
                class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#2dce89] to-[#2dcecc]"
              >
                <font-awesome-icon :icon="['fas', 'coins']" size="lg" />
              </div>
            </div>
            <p class="mt-4 mb-0 text-sm">
              <span class="text-success mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-normal">Since last month</span>
            </p>
          </el-card>
        </div>
        <div class="col-span-3">
          <el-card
            class="border-white"
            :body-style="{ 'padding-top': '16px', 'padding-bottom': '16px' }"
          >
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-semibold text-0.8125 text-muted mb-0">PERFORMANCE</h5>
                </div>
                <h2 class="text-xl text-[#32325d] font-semibold mb-0 leading-7.5">49,65%</h2>
              </div>
              <div
                class="w-12 h-12 text-center inline-flex items-center justify-center rounded-full text-white bg-gradient-to-r from-[#11cdef] to-[#1171ef]"
              >
                <font-awesome-icon :icon="['fas', 'chart-simple']" size="lg" />
              </div>
            </div>
            <p class="mt-4 mb-0 text-sm">
              <span class="text-success mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-normal">Since last month</span>
            </p>
          </el-card>
        </div>
      </div>
    </div>

    <div class="mx-auto mt-7 pb-6">
      <div class="grid lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-4 gap-7">
        <div class="col-span-4">
          <el-card class="border-slate-100" :body-style="{ padding: '0px' }">
            <img alt="..." src="@/assets/images/window-purple-image.jpg" />
            <div
              class="text-normal text-base font-normal p-4 border border-white border-b-slate-200"
            >
              Cras justo odio
            </div>
            <div
              class="text-normal text-base font-normal p-4 border border-white border-b-slate-200"
            >
              Dapibus ac facilisis in
            </div>
            <div
              class="text-normal text-base font-normal p-4 border border-white border-b-slate-200"
            >
              Vestibulum at eros
            </div>

            <div class="p-6">
              <div class="card-header mb-4">
                <h3>Card title</h3>
              </div>
              <p class="break-normal text-normal mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est
                fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut
                reiciendis voluptates enim impedit veritatis officiis.
              </p>
              <div>
                <el-button type="primary" class="py-5">Go somewhere</el-button>
              </div>
            </div>
          </el-card>

          <div class="mt-7">
            <el-card class="border-white">
              <div class="card-header py-2">
                <h3>Card title</h3>
              </div>
              <p class="break-normal text-slate-500 py-2">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est
                  fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut
                  reiciendis voluptates enim impedit veritatis officiis.
                </span>
              </p>
              <div class="pt-3">
                <el-button type="primary" class="py-5">Go somewhere</el-button>
              </div>
            </el-card>
          </div>

          <div class="mt-7">
            <el-card
              class="text-center border-slate-100"
              :body-style="{ padding: '0px', position: 'relative' }"
            >
              <img alt="..." src="@/assets/images/throne.jpg" />
              <div class="justify-center">
                <el-link :underline="false" class="card-avatar-profile">
                  <el-avatar
                    :size="!isHover ? 140 : 146"
                    @mouseover="hoverCheck(true)"
                    @mouseleave="hoverCheck(false)"
                    :src="Tywin_Lanister_Url"
                    class="transition-all border-white border-4"
                  />
                </el-link>
              </div>
              <div class="text-center border-0 pb-6 card-header">
                <div class="flex justify-between">
                  <div class="ml-4 z-0">
                    <el-button class="shadow-lg w-16" size="small" type="info">Connect</el-button>
                  </div>
                  <div class="mr-4 z-0">
                    <el-button class="shadow-lg w-16" size="small" type="default"
                      >Message</el-button
                    >
                  </div>
                </div>
              </div>
              <div class="mt-8">
                <div class="flex justify-center gap-x-11">
                  <div class="block">
                    <div>
                      <span class="text-[1.1rem] text-normal font-bold">22</span>
                    </div>
                    <div>
                      <span class="text-sm text-[#adb5bd] mb-0">Friends</span>
                    </div>
                  </div>
                  <div class="block">
                    <div>
                      <span class="text-[1.1rem] text-normal font-bold">10</span>
                    </div>
                    <div>
                      <span class="text-sm text-[#adb5bd] mb-0">Photos</span>
                    </div>
                  </div>
                  <div class="block">
                    <div>
                      <span class="text-[1.1rem] text-normal font-bold">89</span>
                    </div>
                    <div>
                      <span class="text-sm text-[#adb5bd] mb-0">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-8">
                <div class="text-center text-primary">
                  <h3 class="font-semibold pb-2">
                    Tywin Lannister<span class="font-thin">, 67</span>
                  </h3>
                  <h5 class="font-light">
                    <el-icon :size="12">
                      <Location />
                    </el-icon>
                    The Castle of Trujillo, Spain
                  </h5>
                </div>
              </div>
            </el-card>
          </div>
        </div>

        <div class="col-span-4">
          <el-card class="border-white">
            <template #header>
              <h3>Card title</h3>
            </template>
            <p class="break-normal text-slate-500 py-1 pb-2">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est
                fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut
                reiciendis voluptates enim impedit veritatis officiis.
              </span>
            </p>
            <div class="pt-3">
              <el-button type="primary" class="py-5">Go somewhere</el-button>
            </div>
          </el-card>

          <div class="mt-7">
            <el-card class="border-white">
              <div class="flex flex-wrap">
                <div class="pt-1">
                  <el-link :underline="false">
                    <el-avatar :size="70" :src="John_Snow_Url" />
                  </el-link>
                </div>
                <div class="py-2 ml-4 flex-grow">
                  <h4 class="mb-0">
                    <el-link
                      :underline="false"
                      href="#index"
                      class="text-15 text-primary font-semibold hover:text-[#233dd2]"
                      >John Snow</el-link
                    >
                  </h4>
                  <p class="text-sm text-muted mb-0">King of the north</p>
                  <span class="text-success mr-1">●</span>
                  <small class="text-dark-lighter">Active</small>
                </div>
                <div class="py-6 w-11">
                  <el-button type="primary" size="small" class="w-[41.78px]">Add</el-button>
                </div>
              </div>
            </el-card>
          </div>

          <div class="mt-7">
            <el-card class="text-center border-white">
              <el-link :underline="false">
                <el-avatar :size="140" :src="Tyrion_Lanister_Url" />
              </el-link>
              <div class="pt-4">
                <h4 class="mb-0 py-2">
                  <span class="text-17 font-semibold text-primary">Tyrion Lannister</span>
                </h4>
                <h4 class="text-15 text-muted font-light mb-0">Hand of The King</h4>
              </div>
              <div class="flex flex-wrap items-center justify-center pt-4 gap-3">
                <div>
                  <el-button
                    circle
                    class="w-[38px] h-[38px] bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white"
                  >
                    <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
                  </el-button>
                </div>
                <div>
                  <el-button
                    circle
                    class="w-[38px] h-[38px] bg-[#3b5999] border-[#3b5999] active:bg-[#2d4474] active:border-[#2d4474] text-white"
                  >
                    <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
                  </el-button>
                </div>

                <div>
                  <el-button
                    circle
                    class="w-[38px] h-[38px] bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white"
                  >
                    <font-awesome-icon :icon="['fab', 'dribbble']" size="lg" />
                  </el-button>
                </div>
              </div>
            </el-card>
          </div>

          <div class="mt-7">
            <el-card class="border-slate-100" :body-style="{ padding: '0px' }">
              <img alt="..." src="@/assets/images/man_draw.jpg" />
              <div class="px-6 pt-4 pb-8">
                <div class="text-xl font-semibold pt-2 pb-1 text-primary">
                  Get started with Argon
                </div>
                <div class="font-normal text-80 text-muted">
                  by John Snow on Oct 29th at 10:23 AM
                </div>
                <p class="text-muted py-5">
                  Argon is a great free UI package based on Bootstrap 4 that includes the most
                  important components and features.
                </p>
                <a href="#!" class="">
                  <span class="text-indigo-410 hover:text-[#233dd2] text-sm font-semibold"
                    >View article</span
                  >
                </a>
              </div>
            </el-card>
          </div>

          <div class="mt-7">
            <el-card class="" :body-style="{ padding: '0px' }">
              <div class="text-white p-6 bg-gradient-to-r from-default to-[#1a174d]">
                <div class="mb-4">
                  <h3 class="text-17 font-semimedium text-white">Testimonial</h3>
                </div>
                <div class="py-px">
                  <span class="break-normal font-light"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.</span
                  >
                </div>
                <div class="pt-3">
                  <span class="font-light text-base text-danger"
                    ><MinusIcon class="inline h-4 w-4" aria-hidden="true" /> Someone famous in
                    <span class="italic"> Source Title</span></span
                  >
                </div>
              </div>
            </el-card>
          </div>
        </div>

        <div class="col-span-4">
          <el-card
            :body-style="{ padding: '0px' }"
            class="text-center bg-gradient-to-r from-[#2dce89] to-[#2dcecc]"
          >
            <template #header>
              <h3 class="font-semibold text-white py-4">BRAVO PACK</h3>
            </template>
            <div class="flex flex-col items-center p-6">
              <div class="text-white text-[44px] font-semibold">$49</div>
              <span class="text-white">per application</span>

              <div class="table w-1/3 my-4">
                <div class="table-row-group">
                  <div class="table-row h-16">
                    <div class="table-cell w-10 justify-center align-middle">
                      <div class="w-6 h-6 rounded-full text-slate-500 bg-white">
                        <font-awesome-icon :icon="['fas', 'terminal']" size="xs" />
                      </div>
                    </div>
                    <div class="table-cell justify-center align-middle">
                      <div class="pl-2">
                        <span class="text-sm text-white">Complete documentation</span>
                      </div>
                    </div>
                  </div>

                  <div class="table-row h-16">
                    <div class="table-cell w-10 justify-center align-middle">
                      <div class="w-6 h-6 rounded-full text-slate-500 bg-white">
                        <font-awesome-icon :icon="['fas', 'pen-fancy']" size="xs" />
                      </div>
                    </div>
                    <div class="table-cell justify-center align-middle">
                      <div class="pl-2">
                        <span class="text-sm text-white">Working materials in Sketch</span>
                      </div>
                    </div>
                  </div>

                  <div class="table-row h-16">
                    <div class="table-cell w-10 justify-center align-middle">
                      <div class="w-6 h-6 rounded-full text-slate-500 bg-white">
                        <font-awesome-icon :icon="['fas', 'hard-drive']" size="xs" />
                      </div>
                    </div>
                    <div class="table-cell justify-center align-middle">
                      <div class="pl-2">
                        <span class="text-sm text-white">2GB cloud storage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <el-button type="primary" class="py-5 w-[142,56px] font-semibold text-normal"
                  >Start free trial</el-button
                >
              </div>
            </div>
            <el-divider class="border-[#2bc6a1] my-5" />
            <el-link
              :underline="false"
              class="text-white text-base font-normal hover:text-slate-200 pb-5"
              >Request a demo</el-link
            >
          </el-card>

          <div class="mt-7">
            <el-card class="items-center border-white">
              <template #header>
                <div class="flex justify-between py-2">
                  <h3>Card title</h3>
                  <el-button class="el-button--secondary text-sky-700" size="small"
                    >Action</el-button
                  >
                </div>
              </template>
              <p class="break-normal text-slate-500 py-2">
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est
                  fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut
                  reiciendis voluptates enim impedit veritatis officiis.
                </span>
              </p>
              <div class="pt-3">
                <el-button type="primary" class="py-5">Go somewhere</el-button>
              </div>
            </el-card>
          </div>

          <div class="mt-7">
            <el-card class="" :body-style="{ padding: '0px', position: 'relative' }">
              <img class="" alt="..." src="@/assets/images/window-purple-image.jpg" />
              <div
                class="absolute text-white p-3 inset-y-0 left-0 flex items-center justify-center"
              >
                <div>
                  <div class="py-3">
                    <span class="text-xl font-semibold">Card title</span>
                  </div>
                  <div class="py-px">
                    <span class="break-normal font-light"
                      >This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.</span
                    >
                  </div>
                  <div class="py-3">
                    <span class="font-semibold">Last updated 3 mins ago</span>
                  </div>
                </div>
              </div>
            </el-card>
          </div>

          <div class="mt-7">
            <el-card :body-style="{ padding: '0px' }" class="text-center border-white">
              <template #header>
                <h4 class="font-semibold text-indigo-410 py-4">BRAVO PACK</h4>
              </template>
              <div class="flex flex-col items-center p-6">
                <div class="text-normal text-[44px] font-semibold">$49</div>
                <span class="text-muted font-normal">per application</span>

                <div class="table w-1/3 my-4">
                  <div class="table-row-group">
                    <div class="table-row h-16">
                      <div class="table-cell w-10 justify-center align-middle">
                        <div
                          class="w-6 h-6 rounded-full text-white bg-gradient-to-l from-indigo-500 to-indigo-410"
                        >
                          <font-awesome-icon :icon="['fas', 'terminal']" size="xs" />
                        </div>
                      </div>
                      <div class="table-cell justify-center align-middle">
                        <div class="pl-2">
                          <span class="text-sm font-normal text-muted">Complete documentation</span>
                        </div>
                      </div>
                    </div>

                    <div class="table-row h-16">
                      <div class="table-cell w-10 justify-center align-middle">
                        <div
                          class="w-6 h-6 rounded-full text-white bg-gradient-to-l from-indigo-500 to-indigo-410"
                        >
                          <font-awesome-icon :icon="['fas', 'pen-fancy']" size="xs" />
                        </div>
                      </div>
                      <div class="table-cell justify-center align-middle">
                        <div class="pl-2">
                          <span class="text-sm font-normal text-muted"
                            >Working materials in Sketch</span
                          >
                        </div>
                      </div>
                    </div>

                    <div class="table-row h-16">
                      <div class="table-cell w-10 justify-center align-middle">
                        <div
                          class="w-6 h-6 rounded-full text-white bg-gradient-to-l from-indigo-500 to-indigo-410"
                        >
                          <font-awesome-icon :icon="['fas', 'hard-drive']" size="xs" />
                        </div>
                      </div>
                      <div class="table-cell justify-center align-middle">
                        <div class="pl-2">
                          <span class="text-sm font-normal text-muted">2GB cloud storage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <el-button class="py-5 w-[142,56px] font-semibold text-normal" type="primary"
                    >Start free trial</el-button
                  >
                </div>
              </div>
              <el-divider class="border-[#0000000d] my-5" />
              <el-link
                :underline="false"
                class="text-muted hover:text-muted font-normal text-base pb-5"
                >Request a demo</el-link
              >
            </el-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
// Icon
import { ArrowUpIcon, MinusIcon } from '@heroicons/vue/solid'
import { Location } from '@element-plus/icons-vue'
import John_Snow_Url from '@/assets/images/John_Snow.png'
import Tyrion_Lanister_Url from '@/assets/images/tyrion_lannister.jpg'
import Tywin_Lanister_Url from '@/assets/images/tywin_lannister.jpg'

export default defineComponent({
  name: 'Card',
  components: {
    //Icon
    ArrowUpIcon,
    MinusIcon,
    Location,
  },
  setup() {
    const isHover = ref(false)
    const hoverCheck = (b: boolean) => {
      isHover.value = b
    }
    return {
      isHover,
      hoverCheck,
      John_Snow_Url,
      Tyrion_Lanister_Url,
      Tywin_Lanister_Url,
    }
  },
})
</script>

<style scoped>
:deep(.card-avatar-profile.el-link) .el-link--inner {
  @apply absolute;
}
.el-button {
  @apply font-semibold !important;
}
</style>
