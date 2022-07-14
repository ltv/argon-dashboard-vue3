<template>
  <div class="w-full">
    <div class="w-full">
      <AnalysisCard />
    </div>

    <div class="mx-auto mt-7 pb-6">
      <div class="grid lg:grid-cols-12 md:grid-cols-4 sm:grid-cols-4 gap-7">
        <div class="col-span-4">
          <ListGroupCard />

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
            <ProfileCard
              :avatarImg="Tywin_Lanister_Url"
              :backgroundImg="Profile_Background_Image_Url"
              name="Tywin Lannister"
              :age="67"
              location="The Castle of Trujillo, Spain"
              :friends="22"
              :photos="10"
              :comments="89"
            />
          </div>
        </div>

        <div class="col-span-4">
          <SimpleCard>
            <template #content>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis non dolore est fuga
              nobis ipsum illum eligendi nemo iure repellat, soluta, optio minus ut reiciendis
              voluptates enim impedit veritatis officiis.
            </template>
          </SimpleCard>

          <div class="mt-7">
            <ContactCard
              :imgSrc="John_Snow_Url"
              name="John Snow"
              description="King of the north"
              status="Active"
            />
          </div>

          <div class="mt-7">
            <TeamMemberCard
              :imgSrc="Tyrion_Lanister_Url"
              name="Tyrion Lannister"
              description="Hand of The King"
            />
          </div>

          <div class="mt-7">
            <el-card class="border-slate-100" :body-style="{ padding: '0px' }">
              <img alt="..." src="@/assets/images/man_draw.jpg" />
              <div class="px-6 pt-4 pb-8">
                <div class="text-xl font-semibold pt-2 pb-1 text-primary-dark">
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
                  <span class="text-indigo-410 hover:text-primary text-sm font-semibold"
                    >View article</span
                  >
                </a>
              </div>
            </el-card>
          </div>

          <div class="mt-7">
            <QuoteCard>
              <template #content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a
                ante.
              </template>
            </QuoteCard>
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
              <div class="text-white text-2.75 font-semibold">$49</div>
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
            <ImageFillCard :imgSrc="Window_Image_Url" :updateTime="3">
              <template #content>
                This is a wider card with supporting text below as a natural lead-in to additional
                content. This content is a little bit longer.
              </template>
            </ImageFillCard>
          </div>

          <div class="mt-7">
            <el-card :body-style="{ padding: '0px' }" class="text-center border-white">
              <template #header>
                <h4 class="font-semibold text-indigo-410 py-4">BRAVO PACK</h4>
              </template>
              <div class="flex flex-col items-center p-6">
                <div class="text-normal text-2.75 font-semibold">$49</div>
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
              <el-divider class="border-dark-4 my-5" />
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
// Image
import John_Snow_Url from '@/assets/images/John_Snow.png'
import Tyrion_Lanister_Url from '@/assets/images/tyrion_lannister.jpg'
import Tywin_Lanister_Url from '@/assets/images/tywin_lannister.jpg'
import Window_Image_Url from '@/assets/images/window-purple-image.jpg'
import Profile_Background_Image_Url from '@/assets/images/throne.jpg'
// Components
import AnalysisCard from './components/AnalysisCard.vue'
import ListGroupCard from './components/ListGroupCard.vue'
import ProfileCard from './components/ProfileCard.vue'
import ContactCard from './components/ContactCard.vue'
import TeamMemberCard from './components/TeamMemberCard.vue'
import ImageFillCard from './components/ImageFillCard.vue'
import QuoteCard from './components/QuoteCard.vue'
import SimpleCard from './components/SimpleCard.vue'

export default defineComponent({
  name: 'Card',
  components: {
    AnalysisCard,
    ListGroupCard,
    ProfileCard,
    ContactCard,
    TeamMemberCard,
    ImageFillCard,
    QuoteCard,
    SimpleCard,
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
      Window_Image_Url,
      Profile_Background_Image_Url,
    }
  },
})
</script>

<style scoped>
::v-deep(.card-avatar-profile.el-link) .el-link--inner {
  @apply absolute;
}
.el-button {
  @apply font-semibold !important;
}
</style>
