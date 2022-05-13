<template>
  <div class="w-full h-full">
    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
      <div>
        <el-container class="px-5 py-2">
          <span class="font-bold block">Styles</span>                                           
        </el-container>          
      </div>
      <el-divider />
        <div class="mb-5">
          <el-container class="ml-4 px-2 py-2 flex flex-wrap gap-2">
            <el-button type="primary">Primary</el-button>
            <el-button type="primary" :icon="Box">With icon</el-button>
            <el-button type="primary" :icon="Setting" />                                    
          </el-container>
        </div>
    </div>

    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
      <div>
        <el-container class="px-5 py-2">
            <span class="font-bold block">Colors</span>                                           
        </el-container>          
      </div>
      <el-divider />
      <div class="mb-5">
        <el-container class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button >Default</el-button>
          </div>
          <div>
            <el-button type="primary">Primary</el-button>
          </div>
          <div>
            <el-button class="el-button--secondary">Secondary</el-button>
          </div>
          <div>
            <el-button type="success">Success</el-button>
          </div>
          <div>
            <el-button type="info">Info</el-button>
          </div>
          <div>
            <el-button type="danger">Danger</el-button> 
          </div>  
          <div>                              
            <el-button type="warning">Warning</el-button>
          </div>
        </el-container>
      </div>
    </div>

    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
      <div>
        <el-container class="px-5 py-2">
          <span class="font-bold block">Outline</span>                                           
        </el-container>          
      </div>
      <el-divider />
      <div class="mb-5">
        <el-container class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button plain>Default</el-button>
          </div>
          <div>
            <el-button type="primary" plain>Primary</el-button>
          </div>
          <div>
            <el-button class="el-button--secondary" plain>Secondary</el-button>
          </div>
          <div>
            <el-button type="success" plain>Success</el-button>
          </div>
          <div>
            <el-button type="info" plain>Info</el-button>
          </div>
          <div>
            <el-button type="danger" plain>Danger</el-button>
          </div>
          <div> 
            <el-button type="warning" plain>Warning</el-button>  
          </div>  
        </el-container>
      </div>
    </div>

    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
      <div>
        <el-container class="px-5 py-2">
          <span class="font-bold block">Size</span>                                           
        </el-container>          
      </div>
      <el-divider />
      <div>
        <el-container class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <el-button type="primary" size="large" round>Large button</el-button>
          <el-button size="large" round>Large button</el-button>
        </el-container>
      </div>
      <el-divider />
      <div>
        <el-container class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <el-button type="primary" size="small" round>Small button</el-button>
          <el-button size="small" round>Small button</el-button>
        </el-container>
      </div>
      <el-divider />
      <div class="w-full">
        <div class="py-1 px-2">
          <el-button class="w-full" type="primary" size="large" round>Block level button</el-button>
        </div>
        <div class="py-1 px-2">
          <el-button class="w-full" size="large" round>Block level button</el-button>
        </div>
      </div>
    </div>

    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
      <div>
        <el-container class="px-5 py-2">
          <span class="font-bold block">Group</span>                                           
        </el-container>          
      </div>
        <el-divider />
        <div class="mb-5">
          <el-container class="px-2 py-2 flex flex-wrap gap-2">
            <el-button-group class="ml-4">
              <el-button type="primary">Left</el-button>
              <el-button type="primary" class="active">Middle</el-button>
              <el-button type="primary">Right</el-button>
            </el-button-group>
          </el-container>
        </div>
        <el-divider />
        <div class="mb-5">
          <el-container class="px-2 py-2 flex flex-wrap gap-2">
            <el-button-group class="ml-4">
              <el-button type="primary" class="active">1</el-button>
              <el-button type="primary">2</el-button>
              <el-button type="primary">3</el-button>
              <el-button type="primary">4</el-button>
            </el-button-group>

            <el-button-group class="ml-4">
              <el-button>5</el-button>
              <el-button>6</el-button>
              <el-button>7</el-button>
            </el-button-group>
          </el-container>
        </div>
    </div>
    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
      <div>
        <el-container class="px-5 py-2">
          <span class="font-bold block">Social</span>                                           
        </el-container>          
      </div>
      <el-divider />
      <div class="mb-5">
        <el-container class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button type="primary">
              <font-awesome-icon :icon="['fab', 'facebook']" class="pr-2"/>
              Facebook
            </el-button>
          </div>
          <div>
            <el-button id="twitter">
              <font-awesome-icon :icon="['fab', 'twitter']" class="pr-2" />
              Twitter
            </el-button>
          </div>
          <div>
            <el-button id="google">
              <font-awesome-icon :icon="['fab', 'google-plus-g']" class="pr-2" />
              Google +
            </el-button>
          </div>
          <div>
            <el-button id="instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" class="pr-2" />
              Instagram
            </el-button>
          </div>
          <div>
            <el-button id="pinterest">
              <font-awesome-icon :icon="['fab', 'pinterest']" class="pr-2" />
              Pinterest
            </el-button>
          </div>
          <div>
          <el-button id="youtube">
            <font-awesome-icon :icon="['fab', 'youtube']" class="pr-2" />
            Youtube
          </el-button>
          </div>
          <div>
            <el-button id="vimeo">
              <font-awesome-icon :icon="['fab', 'vimeo']" class="pr-2" />
              Vimeo
            </el-button>
          </div>
          <div>
          <el-button id="slack">
            <font-awesome-icon :icon="['fab', 'slack']" class="pr-2" />
            Slack
          </el-button>
          </div>
          <div>
          <el-button id="dribbble">
            <font-awesome-icon :icon="['fab', 'dribbble']" class="pr-2" />
            Dribbble
          </el-button>     
          </div>                         
        </el-container>
      </div>
      <el-divider />
      <div class="mb-5">
        <el-container class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button type='primary'>
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </el-button>
          </div>
          <div>
            <el-button id="twitter">
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </el-button>
          </div>
          <div>
            <el-button id="google">
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </el-button>
          </div>
          <div>
            <el-button id="instagram">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </el-button>
          </div>
          <div>
            <el-button id="pinterest">
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </el-button>
          </div>
          <div>
            <el-button id="youtube">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </el-button>
          </div>
          <div>
            <el-button id="vimeo">
              <font-awesome-icon :icon="['fab', 'vimeo']" />
            </el-button>
          </div>
          <div>
            <el-button id="slack">
              <font-awesome-icon :icon="['fab', 'slack']" />
            </el-button>
          </div>
          <div>
            <el-button id="dribbble">
              <font-awesome-icon :icon="['fab', 'dribbble']" />
            </el-button>   
          </div>                      
        </el-container>
      </div>
      <el-divider />
      <div class="mb-5">
        <el-container class="ml-4 px-2 py-2 flex flex-wrap gap-2">
          <div>
            <el-button type="primary" circle class='px-3'>
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </el-button>
          </div>
          <div>
            <el-button id="twitter" circle class='px-3'>
              <font-awesome-icon :icon="['fab', 'twitter']" />
            </el-button>
          </div>
          <div>
            <el-button id="google" circle class='px-3'>
              <font-awesome-icon :icon="['fab', 'google-plus-g']" />
            </el-button>
          </div>
          <div>
            <el-button id="instagram" circle class='px-3'>
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </el-button>
          </div>
          <div>
            <el-button id="pinterest" circle class='px-3'>
              <font-awesome-icon :icon="['fab', 'pinterest']" />
            </el-button>
          </div>
          <div>
            <el-button id="youtube" circle class='px-3'>
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </el-button>
          </div>
          <div>
            <el-button id="vimeo" circle class='px-3'>
              <font-awesome-icon :icon="['fab', 'vimeo']" />
            </el-button>
          </div>
          <div>
            <el-button id="slack" circle class='px-3'>
              <font-awesome-icon :icon="['fab', 'slack']" />
            </el-button>
          </div>
          <div>
            <el-button id="dribbble" circle class='px-3'>
              <font-awesome-icon :icon="['fab', 'dribbble']" />
            </el-button>
          </div>
        </el-container>
      </div>
    </div>
  </div>

</template>
<script lang="ts" setup>
import {
  Box,
  Setting
} from '@element-plus/icons-vue'
</script>

<style scoped>
.el-button {
  @apply hover:pt-1 hover:shadow-sm;
}
.el-button.el-button--default {
  @apply font-bold h-10 !important;
}
.body {
  @apply font-sans;
}
.el-button.active {
  background: var(--button-active-bg-color-primary) !important;
}
.el-button#twitter {
  background-color: #1da1f2 !important;
  border-color: #1da1f2;
  color:#fff;
}
.el-button#google {
  background-color: #dd4b39 !important;
  border-color: #dd4b39;
  color:#fff;
}
.el-button#instagram {
  background-color: #e4405f !important;
  border-color: #e4405f;
  color:#fff;
}
.el-button#pinterest {
  background-color: #bd081c !important;
  border-color: #bd081c;
  color:#fff;
}
.el-button#youtube {
  background-color: #cd201f !important;
  border-color: #cd201f;
  color:#fff;
}
.el-button#vimeo {
  background-color: #04a0f0 !important;
  border-color: #04a0f0;
  color:#fff;
}
.el-button#slack {
  background-color: #3aaf85 !important;
  border-color: #3aaf85;
  color:#fff;
}
.el-button#dribbble {
  background-color: #ea4c89 !important;
  border-color: #ea4c89;
  color:#fff;
}
</style>
