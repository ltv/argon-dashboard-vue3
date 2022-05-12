<template>
    
    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
        <e-row>
            <el-container class="px-5">
                <span class="font-bold block">Styles</span>                                           
            </el-container>          
        </e-row>
            <el-divider />
        <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button type="primary">Primary</el-button>
                <el-button type="primary" :icon="Box">With icon</el-button>
                <el-button type="primary" :icon="Setting" />                                    
            </el-container>
        </e-row>
    </div>

    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
        <e-row>
            <el-container class="px-5">
                <span class="font-bold block">Colors</span>                                           
            </el-container>          
        </e-row>
            <el-divider />
        <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button >Default</el-button>
                <el-button type="primary">Primary</el-button>
                <el-button type="success">Success</el-button>
                <el-button type="info">Info</el-button>
                <el-button type="danger">Danger</el-button>                                 
                <el-button type="warning">Warning</el-button>
            </el-container>
        </e-row>
    </div>

    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
        <e-row>
            <el-container class="px-5">
                <span class="font-bold block">Outline</span>                                           
            </el-container>          
        </e-row>
            <el-divider />
        <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button plain>Default</el-button>
                <el-button type="primary" plain>Primary</el-button>
                <el-button class="secondary" plain>Secondary</el-button>
                <el-button type="success" plain>Success</el-button>
                <el-button type="info" plain>Info</el-button>
                <el-button type="warning" plain>Warning</el-button>
                <el-button type="danger" plain>Danger</el-button>                                   
            </el-container>
        </e-row>
    </div>

    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
        <e-row>
            <el-container class="px-5">
                <span class="font-bold block">Size</span>                                           
            </el-container>          
        </e-row>
        <el-divider />
        <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button size="large" round>Large button</el-button>
                <el-button size="large" round>Large button</el-button>
            </el-container>
        </e-row>
        <el-divider />
        <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button size="small" round>Small button</el-button>
                <el-button size="small" round>Small button</el-button>
            </el-container>
        </e-row>
        <el-divider />
        <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button size="small" round>Block level button</el-button>
                <el-button size="small" round>Block level button</el-button>
            </el-container>
        </e-row>
    </div>

    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
        <e-row>
            <el-container class="px-5">
                <span class="font-bold block">Group</span>                                           
            </el-container>          
        </e-row>
        <el-divider />
        <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button-group class="ml-4">
                    <el-button type="primary" round>Left</el-button>
                    <el-button type="primary" round>Middle</el-button>
                    <el-button type="primary" round>Right</el-button>
                </el-button-group>
            </el-container>
        </e-row>
        <el-divider />
        <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button-group class="ml-4">
                    <el-button type="primary" round>1</el-button>
                    <el-button type="primary" round>2</el-button>
                    <el-button type="primary" round>3</el-button>
                    <el-button type="primary" round>4</el-button>
                </el-button-group>

                <el-button-group class="ml-4">
                    <el-button type="primary" round>5</el-button>
                    <el-button type="primary" round>6</el-button>
                    <el-button type="primary" round>7</el-button>
                </el-button-group>
            </el-container>
        </e-row>
        
        
    </div>

    <div class="w-3/5 h-auto flex flex-wrap bg-white shadow-lg mt-5 mx-auto rounded-lg">
        <e-row>
            <el-container class="px-5">
                <span class="font-bold block">Social</span>                                           
            </el-container>          
        </e-row>
            <el-divider />
        <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button type="primary" :icon="Box" round>Facebook</el-button>
                <el-button type="primary" :icon="Box" round>Twitter</el-button>
                <el-button type="primary" :icon="Box" round>Google +</el-button>
                <el-button type="primary" :icon="Box" round>Instagram</el-button>
                <el-button type="primary" :icon="Box" round>Pinterest</el-button>
                <el-button type="primary" :icon="Box" round>Youtube</el-button>
                <el-button type="primary" :icon="Box" round>Vimeo</el-button>
                <el-button type="primary" :icon="Box" round>Slack</el-button>
                <el-button type="primary" :icon="Box" round>Dribble</el-button>                              
            </el-container>
        </e-row>
         <el-divider />
        <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button type="primary" :icon="Box" />
                <el-button type="primary" :icon="Box" />
                <el-button type="primary" :icon="Box" />
                <el-button type="primary" :icon="Box" />
                <el-button type="primary" :icon="Box" />
                <el-button type="primary" :icon="Box" />
                <el-button type="primary" :icon="Box" />
                <el-button type="primary" :icon="Box" />
                <el-button type="primary" :icon="Box" />                            
            </el-container>
        </e-row>
         <el-divider />
         <e-row class="mb-5">
            <el-container class="px-5 flex flex-wrap">
                <el-button type="primary" :icon="Box" round/>
                <el-button type="primary" :icon="Box" round/>
                <el-button type="primary" :icon="Box" round/>
                <el-button type="primary" :icon="Box" round/>
                <el-button type="primary" :icon="Box" round/>
                <el-button type="primary" :icon="Box" round/>
                <el-button type="primary" :icon="Box" round/>
                <el-button type="primary" :icon="Box" round/>
                <el-button type="primary" :icon="Box" round/>                            
            </el-container>
        </e-row>
    </div>


</template>

<script lang="ts" setup>
import {
  Box,
  Setting
} from '@element-plus/icons-vue'
</script>
