<template>
  <main>
    <section class="relative h-[420px] w-full">
      <img
        src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/50 to-black/10 flex items-center"
      >
        <div class="max-w-6xl mx-auto px-4">
          <div class="max-w-xl text-white space-y-4">
            <p class="text-sm font-semibold tracking-wide text-emerald-200">
              {{ messages.hero.badge }}
            </p>
            <h1 class="text-4xl font-semibold leading-snug">
              {{ messages.hero.title }}
            </h1>
            <p class="text-sm opacity-90">
              {{ messages.hero.subtitle }}
            </p>
            <n-button type="primary" size="large" class="mt-2">
              {{ messages.hero.cta }}
            </n-button>
          </div>
        </div>
      </div>
    </section>

    <NewsList 
      :items="latestNews" 
      :news-text="messages.news" 
    />

    <GuideList
      :items="travelGuides"
      :text="messages.guide"
    />

    <HighlightList
      :items="highlightDestinations"
      :text="messages.highlight"
    />
  </main>
</template>

<script>
import { latestNews } from '../data/news'
import { travelGuides } from '../data/guides'
import { highlightDestinations } from '../data/highlights'

import NewsList from '../components/news/NewsList.vue'
import GuideList from '../components/guides/GuideList.vue'
import HighlightList from '../components/highlights/HighlightList.vue'

export default {
  components: {
    NewsList,
    GuideList,
    HighlightList,
  },
  props: {
    messages: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      latestNews,
      travelGuides,
      highlightDestinations,
    }
  },
}
</script>