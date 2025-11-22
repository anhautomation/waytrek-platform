<template>
  <section class="max-w-6xl mx-auto px-4 mt-20">
    <p class="text-emerald-600 text-sm font-semibold mb-1">
      {{ text.sectionLabel }}
    </p>
    <h2 class="text-2xl font-semibold mb-6">
      {{ text.sectionTitle }}
    </h2>

    <div class="relative w-full">
      <button
        class="hidden md:flex absolute left-0 top-[98px] -translate-x-1/2
               h-11 w-11 rounded-full border bg-white shadow
               items-center justify-center text-xl hover:bg-gray-100 disabled:opacity-40 z-20"
        @click="prevSlide"
        :disabled="currentSlide === 0"
      >
        ‹
      </button>

      <div class="overflow-hidden w-full">
        <div
          class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(slide, slideIndex) in slides"
            :key="slideIndex"
            class="w-full flex-shrink-0"
          >
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article
                v-for="guide in slide"
                :key="guide.id"
                class="flex flex-col"
              >
                <div class="w-full h-[240px] rounded-2xl overflow-hidden">
                  <img
                    :src="guide.image"
                    :alt="guide.title"
                    class="w-full h-full object-cover"
                  />
                </div>

                <div class="pt-4 flex flex-col flex-1">
                  <h3 class="text-[20px] font-semibold leading-tight">
                    {{ guide.title }}
                  </h3>
                  <p class="text-gray-600 text-[15px] leading-relaxed mt-2">
                    {{ guide.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <button
        class="hidden md:flex absolute right-0 top-[98px] translate-x-1/2
               h-11 w-11 rounded-full border bg-white shadow
               items-center justify-center text-xl hover:bg-gray-100 disabled:opacity-40 z-20"
        @click="nextSlide"
        :disabled="currentSlide === maxSlide"
      >
        ›
      </button>
    </div>

    <div class="w-full flex justify-center mt-6">
      <button
        class="text-emerald-600 text-sm font-semibold hover:opacity-70 transition"
      >
        {{ text.viewAll }}
      </button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    items: { type: Array, required: true },
    text: { type: Object, required: true },
  },
  data() {
    return {
      currentSlide: 0,
      perPage: 3,
    }
  },
  computed: {
    slides() {
      const groups = []
      for (let i = 0; i < this.items.length; i += this.perPage) {
        groups.push(this.items.slice(i, i + this.perPage))
      }
      return groups
    },
    maxSlide() {
      return this.slides.length - 1
    },
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.maxSlide) this.currentSlide++
    },
    prevSlide() {
      if (this.currentSlide > 0) this.currentSlide--
    },
  },
}
</script>