<template>
  <router-view v-slot="{ Component, route }">
    <transition name="component-transition" mode="out-in">
      <component :is="Component" :key="route.fullPath" />
    </transition>
  </router-view>
</template>

<style scoped>
/* Component transition styles */
.component-transition-enter-active,
.component-transition-leave-active {
  transition: all 0.25s ease-in-out;
}

.component-transition-enter-from {
  opacity: 0;
  transform: translateY(15px);
}

.component-transition-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

.component-transition-enter-to,
.component-transition-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
