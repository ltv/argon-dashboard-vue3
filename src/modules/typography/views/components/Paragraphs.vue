<template>
  <div class="w-full">
    <!-- Paragraphs -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Paragraph</span>
      </div>
      <div class="md:w-3/4">
        <p>
          I will be the leader of a company that ends up being worth billions of dollars, because I
          got the answers. I understand culture. I am the nucleus. I think that’s a responsibility
          that I have, to push possibilities, to show people, this is the level that things could be
          at.
        </p>
      </div>
    </div>
    <!-- Lead -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Lead Text</span>
      </div>
      <div class="md:w-3/4">
        <p class="lead">
          I will be the leader of a company that ends up being worth billions of dollars, because I
          got the answers. I understand culture. I am the nucleus. I think that’s a responsibility
          that I have, to push possibilities, to show people, this is the level that things could be
          at.
        </p>
      </div>
    </div>
    <!-- Blockqoute -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Quote</span>
      </div>
      <div class="md:w-3/4">
        <blockquote class="blockquote">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
          </p>
          <footer class="blockquote-footer">
            <div class="before:content-['\2014\A0'] inline-block mr-1">Someone famous in</div>
            <cite title="Source Title">Source Title</cite>
          </footer>
        </blockquote>
      </div>
    </div>
    <!-- Muted text -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Muted Text</span>
      </div>
      <div class="md:w-3/4">
        <p class="text-muted">
          I will be the leader of a company that ends up being worth billions of dollars, because I
          got the answers...
        </p>
      </div>
    </div>
    <!-- Primary text -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Primary Text</span>
      </div>
      <div class="md:w-3/4">
        <p class="text-primary">
          I will be the leader of a company that ends up being worth billions of dollars, because I
          got the answers...
        </p>
      </div>
    </div>
    <!-- Info text -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Info Text</span>
      </div>
      <div class="md:w-3/4">
        <p class="text-info">
          I will be the leader of a company that ends up being worth billions of dollars, because I
          got the answers...
        </p>
      </div>
    </div>
    <!-- Info text -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Success Text</span>
      </div>
      <div class="md:w-3/4">
        <p class="text-success">
          I will be the leader of a company that ends up being worth billions of dollars, because I
          got the answers...
        </p>
      </div>
    </div>
    <!-- Warn text -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Warning Text</span>
      </div>
      <div class="md:w-3/4">
        <p class="text-warning">
          I will be the leader of a company that ends up being worth billions of dollars, because I
          got the answers...
        </p>
      </div>
    </div>
    <!-- Danger text -->
    <div class="row medium">
      <div class="md:w-1/4">
        <span class="title block">Danger Text</span>
      </div>
      <div class="md:w-3/4">
        <p class="text-danger">
          I will be the leader of a company that ends up being worth billions of dollars, because I
          got the answers...
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Paragraphs',
})
</script>

<style lang="scss" scoped>
.row {
  @apply py-4 w-full h-auto break-normal;
}
.title {
  @apply uppercase text-80 font-semibold text-muted;
}
.medium {
  @apply flex flex-col md:flex-row md:justify-center md:items-center;
}
.row.medium p {
  @apply mb-4;
}
</style>
