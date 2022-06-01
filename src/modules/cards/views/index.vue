<template>
  <div class="w-full">
    <div class="container mx-auto py-4">
      <div class="grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-3 gap-6">
        <div class="col-span-3">
          <el-card class="box-card relative flex flex-col px-2">
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-bold text-sm text-slate-400 mb-0">TOTAL TRAFFIC</h5>
                </div>
                <span class="text-lg text-indigo-900 font-bold mb-0">350,897</span>
              </div>
              <font-awesome-icon
                class="text-center inline-flex items-center justify-center rounded-full p-3.5 text-white bg-gradient-to-r from-rose-500 to-rose-300"
                :icon="['fas', 'hand-point-up']"
                size="lg"
              />
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-emerald-400 mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-slate-400">Since last month</span>
            </p>
          </el-card>
        </div>
        <div class="col-span-3">
          <el-card class="box-card relative flex flex-col px-2">
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-bold text-sm text-slate-400 mb-0">NEW USERS</h5>
                </div>
                <span class="text-lg text-indigo-900 font-bold mb-0">2,356</span>
              </div>
              <font-awesome-icon
                class="text-center inline-flex items-center justify-center rounded-full p-3.5 text-white bg-gradient-to-r from-orange-500 to-orange-200"
                :icon="['fas', 'chart-pie']"
                size="lg"
              />
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-emerald-400 mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-slate-400">Since last month</span>
            </p>
          </el-card>
        </div>
        <div class="col-span-3">
          <el-card class="box-card relative flex flex-col px-2">
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-bold text-sm text-slate-400 mb-0">SALES</h5>
                </div>
                <span class="text-lg text-indigo-900 font-bold mb-0">924</span>
              </div>
              <font-awesome-icon
                class="text-center inline-flex items-center justify-center rounded-full p-3.5 text-white bg-gradient-to-r from-green-500 to-green-300"
                :icon="['fas', 'coins']"
                size="lg"
              />
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-emerald-400 mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-slate-400">Since last month</span>
            </p>
          </el-card>
        </div>
        <div class="col-span-3">
          <el-card class="box-card relative flex flex-col px-2">
            <div class="flex flex-wrap">
              <div class="basis-0 grow">
                <div class="card-header">
                  <h5 class="font-bold text-sm text-slate-400 mb-0">PERFORMANCE</h5>
                </div>
                <span class="text-lg text-indigo-900 font-bold mb-0">49,65%</span>
              </div>
              <font-awesome-icon
                class="text-center inline-flex items-center justify-center rounded-full p-3.5 text-white bg-gradient-to-r from-blue-500 to-blue-300"
                :icon="['fas', 'chart-simple']"
                size="lg"
              />
            </div>
            <p class="mt-3 mb-0 text-sm">
              <span class="text-emerald-400 mr-2 inline">
                <ArrowUpIcon class="inline pb-1 h-5 w-4" aria-hidden="true" />
                3.48%
              </span>
              <span class="whitespace-nowrap text-slate-400">Since last month</span>
            </p>
          </el-card>
        </div>
      </div>
    </div>

    <div class="container mx-auto py-4">
      <div class="grid lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-4 gap-8">
        <div class="col-span-4">
          <el-card class="box-card" :body-style="{ padding: '0px' }">
            <img alt="..." src="@/assets/images/window-purple-image.jpg" />
            <div class="text-slate-400 p-4 border border-white hover:border-b-slate-200">
              Cras justo odio
            </div>
            <div class="text-slate-400 p-4 border border-white hover:border-b-slate-200">
              Dapibus ac facilisis in
            </div>
            <div class="text-slate-400 p-4 border border-white hover:border-b-slate-200">
              Vestibulum at eros
            </div>

            <div class="px-4 py-5">
              <h5 class="text-xl font-medium text-blue-800">Card title</h5>
            </div>
            <p class="break-normal text-slate-500 px-4">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est
                fuga nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut
                reiciendis voluptates enim impedit veritatis officiis.
              </span>
            </p>
            <div class="p-4">
              <el-button type="primary" class="py-5">Go somewhere</el-button>
            </div>
          </el-card>

          <div class="pt-8">
            <el-card class="box-card">
              <div class="card-header py-2">
                <h5 class="text-xl font-medium text-blue-800">Card title</h5>
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

          <div class="pt-8">
            <el-card
              class="box-card text-center"
              :body-style="{ padding: '0px', position: 'relative' }"
            >
              <img alt="..." src="@/assets/images/throne.jpg" />
              <div class="justify-center">
                <el-link :underline="false" class="card-avatar-profile">
                  <el-avatar
                    :size="!isHover ? 140 : 146"
                    @mouseover="hoverCheck(true)"
                    @mouseleave="hoverCheck(false)"
                    src="@/assets/images/tywin_lannister.jpg"
                    class="border border-white border-4"
                  />
                </el-link>
              </div>
              <div class="text-center border-0 pt-8 md:py-4 pb-0 card-header">
                <div class="flex justify-between">
                  <div class="ml-4 z-0">
                    <el-button class="bg-cyan-400 text-white shadow-lg" size="small"
                      >Connect</el-button
                    >
                  </div>
                  <div class="mr-4 z-0">
                    <el-button class="shadow-lg" size="small" type="info">Message</el-button>
                  </div>
                </div>
              </div>
              <div class="pt-8 mb-0">
                <div class="flex justify-center gap-x-6">
                  <div class="block">
                    <div>
                      <span class="text-lg text-indigo-900 font-bold">22</span>
                    </div>
                    <div>
                      <span class="text-sm text-slate-500 mb-0">Friends</span>
                    </div>
                  </div>
                  <div class="block">
                    <div>
                      <span class="text-lg text-indigo-900 font-bold">10</span>
                    </div>
                    <div>
                      <span class="text-sm text-slate-500 mb-0">Photos</span>
                    </div>
                  </div>
                  <div class="block">
                    <div>
                      <span class="text-lg text-indigo-900 font-bold">89</span>
                    </div>
                    <div>
                      <span class="text-sm text-slate-500 mb-0">Comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-8">
                <div class="text-center text-indigo-900">
                  <h5 class="text-lg font-semibold">
                    Tywin Lannister<span class="font-thin">, 67</span>
                  </h5>
                  <div class="font-light">
                    <el-icon :size="15">
                      <Location />
                    </el-icon>
                    The Castle of Trujillo, Spain
                  </div>
                </div>
              </div>
            </el-card>
          </div>
        </div>

        <div class="col-span-4">
          <el-card class="box-card">
            <template #header>
              <div class="card-header">
                <h5 class="text-xl font-medium text-blue-800">Card title</h5>
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

          <div class="pt-8">
            <el-card>
              <div class="relative items-center justify-center">
                <div class="flex flex-wrap">
                  <div>
                    <el-link :underline="false">
                      <el-avatar :size="80" src="@/assets/images/Jon_Snow.png" />
                    </el-link>
                  </div>
                  <div class="py-2 ml-2 flex-grow">
                    <h4 class="mb-0">
                      <el-link
                        :underline="false"
                        href="#index"
                        class="text-base font-bold hover:text-blue"
                        >John Snow</el-link
                      >
                    </h4>
                    <p class="text-base text-slate-500 mb-0">King of the north</p>
                    <span class="text-green-500 mr-1">●</span>
                    <small>Active</small>
                  </div>
                  <div class="py-8">
                    <el-button type="primary" size="small">Add</el-button>
                  </div>
                </div>
              </div>
            </el-card>
          </div>

          <div class="pt-8">
            <el-card class="box-card text-center">
              <el-link :underline="false">
                <el-avatar :size="150" src="@/assets/images/tyrion_lannister.jpg" />
              </el-link>
              <div class="pt-4">
                <h4 class="mb-0 py-2">
                  <span class="text-lg font-bold text-indigo-900">Tyrion Lannister</span>
                </h4>
                <p class="text-base text-slate-500 mb-0">Hand of The King</p>
              </div>
              <div class="flex flex-wrap items-center justify-center p-4 gap-3">
                <div>
                  <el-button
                    circle
                    class="px-1 py-4.5 bg-[#3b5999] border-[#3b5999] active:bg-[#2d4474] active:border-[#2d4474] text-white"
                  >
                    <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
                  </el-button>
                </div>
                <div>
                  <el-button
                    circle
                    class="px-1 py-4.5 bg-[#1da1f2] border-[#1da1f2] active:bg-[#33aaf3] active:border-[#33aaf3] text-white"
                  >
                    <font-awesome-icon :icon="['fab', 'twitter']" size="lg" />
                  </el-button>
                </div>
                <div>
                  <el-button
                    circle
                    class="px-1 py-4.5 bg-[#ea4c89] border-[#ea4c89] active:bg-[#ec5d94] active:border-[#ec5d94] text-white"
                  >
                    <font-awesome-icon :icon="['fab', 'dribbble']" size="lg" />
                  </el-button>
                </div>
              </div>
            </el-card>
          </div>

          <div class="pt-8">
            <el-card class="box-card" :body-style="{ padding: '0px' }">
              <img alt="..." src="@/assets/images/man_draw.jpg" />
              <div class="p-4">
                <div class="text-xl font-semibold py-2 text-indigo-900">Get started with Argon</div>
                <div class="font-thin text-xs text-slate-500">
                  by <el-link class="font-thin text-xs" :underline="false">John Snow</el-link> on
                  Oct 29th at 10:23 AM
                </div>
                <p class="mt-4 text-slate-500 py-4">
                  Argon is a great free UI package based on Bootstrap 4 that includes the most
                  important components and features.
                </p>
                <el-button
                  class="el-button--secondary text-sky-700 px-0 text-base font-semibold py-4"
                  plain
                  ><span class="text-indigo-900">View article</span></el-button
                >
              </div>
            </el-card>
          </div>

          <div class="pt-8">
            <el-card class="box-card" :body-style="{ padding: '0px' }">
              <div class="text-white p-4 bg-gradient-to-r from-slate-800 to-indigo-900">
                <div class="py-3">
                  <span class="text-xl font-medium">Testimonial</span>
                </div>
                <div class="py-px">
                  <span class="break-normal font-light"
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                    ante.</span
                  >
                </div>
                <div class="py-3">
                  <span class="font-light text-base text-rose-600"
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
            class="box-card text-center bg-gradient-to-r from-emerald-500 to-emerald-300"
          >
            <template #header>
              <div class="card-header">
                <h5 class="font-bold text-slate-50 py-4">BRAVO PACK</h5>
              </div>
            </template>
            <div class="px-16 flex flex-col items-center">
              <div class="text-white text-5xl pt-4 pb-2 font-medium">$49</div>
              <span class="text-white">per application</span>

              <div class="table w-1/3 my-6">
                <div class="table-row-group">
                  <div class="table-row h-14">
                    <div class="table-cell w-10 justify-center align-middle">
                      <div class="flex pl-4">
                        <font-awesome-icon
                          class="rounded-full p-1.5 text-slate-500 bg-white"
                          :icon="['fas', 'terminal']"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div class="table-cell w-10 justify-center align-middle">
                      <div class="pl-2 mr-8">
                        <span class="text-sm text-white">Complete documentation</span>
                      </div>
                    </div>
                  </div>

                  <div class="table-row h-14">
                    <div class="table-cell w-10 justify-center align-middle">
                      <div class="flex pl-4">
                        <font-awesome-icon
                          class="rounded-full p-1.5 text-slate-500 bg-white"
                          :icon="['fas', 'pen-fancy']"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div class="table-cell w-10 justify-center align-middle">
                      <div class="pl-2 mr-8">
                        <span class="text-sm text-white">Working materials in Sketch</span>
                      </div>
                    </div>
                  </div>

                  <div class="table-row h-14">
                    <div class="table-cell w-10 justify-center align-middle">
                      <div class="flex pl-4">
                        <font-awesome-icon
                          class="rounded-full p-1.5 text-slate-500 bg-white"
                          :icon="['fas', 'hard-drive']"
                          size="xs"
                        />
                      </div>
                    </div>
                    <div class="table-cell w-10 justify-center align-middle">
                      <div class="pl-2 mr-8">
                        <span class="text-sm text-white">2GB cloud storage</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <el-button class="el-button--secondary py-5 w-32 font-bold text-base"
                  >Start free trial</el-button
                >
              </div>
            </div>
            <el-divider />
            <el-link :underline="false" class="text-white text-base hover:text-slate-200 pb-4"
              >Request a demo</el-link
            >
          </el-card>

          <div class="pt-8">
            <el-card class="box-card items-center">
              <template #header>
                <div class="card-header flex justify-between py-2">
                  <h5 class="text-xl font-medium text-blue-800">Card title</h5>
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

          <div class="pt-8">
            <el-card class="box-card" :body-style="{ padding: '0px', position: 'relative' }">
              <img class="" alt="..." src="@/assets/images/window-purple-image.jpg" />
              <div
                class="absolute text-white p-3 inset-y-0 left-0 flex items-center justify-center"
              >
                <div>
                  <div class="py-3">
                    <span class="text-xl font-medium">Card title</span>
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

          <div class="pt-8">
            <el-card :body-style="{ padding: '0px' }" class="box-card text-center">
              <template #header>
                <div class="card-header">
                  <h5 class="font-bold text-indigo-500 py-4">BRAVO PACK</h5>
                </div>
              </template>
              <div class="px-16 flex flex-col items-center">
                <div class="text-slate-500 text-5xl pt-4 pb-2 font-medium">$49</div>
                <span class="text-slate-400">per application</span>

                <div class="table w-1/3 my-6">
                  <div class="table-row-group">
                    <div class="table-row h-14">
                      <div class="table-cell w-10 justify-center align-middle">
                        <div class="flex pl-4">
                          <font-awesome-icon
                            class="rounded-full p-1.5 text-white bg-gradient-to-l from-indigo-500 to-indigo-400"
                            :icon="['fas', 'terminal']"
                            size="xs"
                          />
                        </div>
                      </div>
                      <div class="table-cell w-10 justify-center align-middle">
                        <div class="pl-2 mr-8">
                          <span class="text-sm text-slate-400">Complete documentation</span>
                        </div>
                      </div>
                    </div>

                    <div class="table-row h-14">
                      <div class="table-cell w-10 justify-center align-middle">
                        <div class="flex pl-4">
                          <font-awesome-icon
                            class="rounded-full p-1.5 text-white bg-gradient-to-l from-indigo-500 to-indigo-400"
                            :icon="['fas', 'pen-fancy']"
                            size="xs"
                          />
                        </div>
                      </div>
                      <div class="table-cell w-10 justify-center align-middle">
                        <div class="pl-2 mr-8">
                          <span class="text-sm text-slate-400">Working materials in Sketch</span>
                        </div>
                      </div>
                    </div>

                    <div class="table-row h-14">
                      <div class="table-cell w-10 justify-center align-middle">
                        <div class="flex pl-4">
                          <font-awesome-icon
                            class="rounded-full p-1.5 text-white bg-gradient-to-l from-indigo-500 to-indigo-400"
                            :icon="['fas', 'hard-drive']"
                            size="xs"
                          />
                        </div>
                      </div>
                      <div class="table-cell w-10 justify-center align-middle">
                        <div class="pl-2 mr-8">
                          <span class="text-sm text-slate-400">2GB cloud storage</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mb-3">
                  <el-button class="py-5 w-32 font-bold text-base" type="info"
                    >Start free trial</el-button
                  >
                </div>
              </div>
              <el-divider />
              <el-link :underline="false" class="text-slate-400 text-base hover:text-slate-500 pb-4"
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
    return { isHover, hoverCheck }
  },
})
</script>

<style scoped>
.el-button {
  @apply font-semibold !important;
}
</style>
