<template>
  <div class="w-full block mx-auto h-auto lg:max-w-2/3">
    <!-- Heading section -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Headings</h3>
      </template>
      <!-- Heading 1 -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Heading 1</span>
        </div>
        <div class="md:w-3/4">
          <h1>Fancy Dashboard</h1>
        </div>
      </div>
      <!-- Heading 2 -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Heading 2</span>
        </div>
        <div class="md:w-3/4">
          <h2>Fancy Dashboard</h2>
        </div>
      </div>
      <!-- Heading 3 -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Heading 3</span>
        </div>
        <div class="md:w-3/4">
          <h3>Fancy Dashboard</h3>
        </div>
      </div>
      <!-- Heading 4 -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Heading 4</span>
        </div>
        <div class="md:w-3/4">
          <h4>Fancy Dashboard</h4>
        </div>
      </div>
      <!-- Heading 5 -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Heading 5</span>
        </div>
        <div class="md:w-3/4">
          <h5>Fancy Dashboard</h5>
        </div>
      </div>
      <!-- Heading 6 -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Heading 6</span>
        </div>
        <div class="md:w-3/4">
          <h6>Fancy Dashboard</h6>
        </div>
      </div>
    </el-card>

    <!-- Display section -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Display titles</h3>
      </template>
      <!-- Display 1 -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Display 1</span>
        </div>
        <div class="md:w-3/4">
          <h1 class="display-1">Fancy Dashboard</h1>
        </div>
      </div>
      <!-- Display 2 -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Display 2</span>
        </div>
        <div class="md:w-3/4">
          <h2 class="display-2">Fancy Dashboard</h2>
        </div>
      </div>
      <!-- Heading 3 -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Display 3</span>
        </div>
        <div class="md:w-3/4">
          <h3 class="display-3">Fancy Dashboard</h3>
        </div>
      </div>
      <!-- Heading 4 -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Display 4</span>
        </div>
        <div class="md:w-3/4">
          <h4 class="display-4">Fancy Dashboard</h4>
        </div>
      </div>
    </el-card>

    <!-- Specialized titles -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Specialized titles</h3>
      </template>

      <!-- Heading -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Heading</span>
        </div>
        <div class="md:w-3/4">
          <h3 class="heading">Fancy Dashboard</h3>
        </div>
      </div>
      <!-- Heading title -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Heading Title</span>
        </div>
        <div class="md:w-3/4">
          <h2 class="heading-title text-warning">Fancy Dashboard</h2>
        </div>
      </div>

      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Heading Seaction</span>
        </div>
        <div class="md:w-3/4 flex flex-wrap">
          <div class="mb-1">
            <h3 class="display-3">Header with small subtitle</h3>
          </div>
          <div class="mb-8">
            <h4 class="lead text-muted">
              According to the National Oceanic and Atmospheric Administration, Ted, Scambos,
              NSIDClead scentist, puts the potentially record maximum.
            </h4>
          </div>
        </div>
      </div>
    </el-card>

    <!-- Paragraphs -->
    <el-card class="mb-7.5 border-none">
      <template #header>
        <h3 class="cursor-auto mb-0 text-card-title">Paragraphs</h3>
      </template>
      <!-- Paragraphs -->
      <div class="row medium">
        <div class="md:w-1/4">
          <span class="title block">Paragraph</span>
        </div>
        <div class="md:w-3/4">
          <p>
            I will be the leader of a company that ends up being worth billions of dollars, because
            I got the answers. I understand culture. I am the nucleus. I think that’s a
            responsibility that I have, to push possibilities, to show people, this is the level
            that things could be at.
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
            I will be the leader of a company that ends up being worth billions of dollars, because
            I got the answers. I understand culture. I am the nucleus. I think that’s a
            responsibility that I have, to push possibilities, to show people, this is the level
            that things could be at.
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
            I will be the leader of a company that ends up being worth billions of dollars, because
            I got the answers...
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
            I will be the leader of a company that ends up being worth billions of dollars, because
            I got the answers...
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
            I will be the leader of a company that ends up being worth billions of dollars, because
            I got the answers...
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
            I will be the leader of a company that ends up being worth billions of dollars, because
            I got the answers...
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
            I will be the leader of a company that ends up being worth billions of dollars, because
            I got the answers...
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
            I will be the leader of a company that ends up being worth billions of dollars, because
            I got the answers...
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.card-typography {
  @apply bg-white break-words mb-7 shadow rounded-lg flex flex-col;
}
.card-header {
  @apply p-5 border-b border-primary-white;
}
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
