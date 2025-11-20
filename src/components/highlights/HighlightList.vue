<template>
  <section class="max-w-6xl mx-auto px-4 mt-16 mb-16">
    <p class="text-emerald-600 text-sm font-semibold mb-1">
      {{ text.sectionLabel }}
    </p>
    <h2 class="text-2xl font-semibold mb-6">
      {{ text.sectionTitle }}
    </h2>

    <div class="space-y-8">
      <article
        v-for="item in items"
        :key="item.id"
        class="flex gap-6"
      >
        <img :src="item.image" class="w-[210px] h-[140px] object-cover rounded-md flex-shrink-0"/>
        <div class="flex flex-col justify-between">
          <div>
            <h3 class="text-lg font-semibold mb-2">
              {{ item.title }}
            </h3>
            <p class="text-sm text-gray-600 line-clamp-3">
              {{ item.excerpt }}
            </p>
          </div>
          <p class="text-xs text-gray-500 mt-2">
            {{ item.date }}
          </p>
        </div>
      </article>
    </div>

    <div class="text-center mt-6">
      <button class="text-emerald-600 text-sm font-medium">
        {{ text.viewAll }}
      </button>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        required: true,
      },
      text: {
        type: Object,
        required: true,
      },
    },
  }
</script>