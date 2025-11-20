<template>
  <section class="max-w-[1240px] w-full mx-auto px-4 mt-20">
    <!-- Tiêu đề -->
    <p class="text-emerald-600 text-sm font-semibold mb-1">
      {{ text.sectionLabel }}
    </p>
    <h2 class="text-2xl font-semibold mb-6">
      {{ text.sectionTitle }}
    </h2>

    <div class="relative">
      <!-- Arrow trái -->
      <button
        class="hidden md:flex absolute left-0 top-[160px] -translate-x-1/2 h-11 w-11 rounded-full border bg-white shadow
               items-center justify-center text-xl hover:bg-gray-100 disabled:opacity-40"
        @click="prevSlide"
        :disabled="currentSlide === 0"
      >
        ‹
      </button>

      <!-- Track carousel -->
      <div class="overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-out"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <!-- Mỗi slide chiếm 100% chiều rộng container -->
          <div
            v-for="(slide, slideIndex) in slides"
            :key="slideIndex"
            class="w-full flex-shrink-0"
          >
            <!-- 3 card / slide -->
            <div class="grid md:grid-cols-3 gap-6">
              <article
                v-for="guide in slide"
                :key="guide.id"
                class="flex flex-col min-w-0"
              >
                <!-- Ảnh: bo 4 góc, card không bo -->
                <div class="w-full h-[240px] rounded-2xl overflow-hidden">
                  <img
                    :src="guide.image"
                    :alt="guide.title"
                    class="w-full h-full object-cover"
                  />
                </div>

                <!-- Nội dung -->
                <div class="px-1 pt-4 pb-6 flex flex-col flex-1">
                  <h3 class="text-[20px] font-semibold leading-tight">
                    {{ guide.title }}
                  </h3>
                  <p
                    class="text-gray-600 text-[15px] leading-relaxed mt-2"
                  >
                    {{ guide.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <!-- Arrow phải -->
      <button
        class="hidden md:flex absolute right-0 top-[160px] translate-x-1/2 h-11 w-11 rounded-full border bg-white shadow
               items-center justify-center text-xl hover:bg-gray-100 disabled:opacity-40"
        @click="nextSlide"
        :disabled="currentSlide === maxSlide"
      >
        ›
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
  data() {
    return {
      currentSlide: 0,
      perPage: 3,
    }
  },
  computed: {
    // Chia items thành các slide, mỗi slide 3 card
    slides() {
      const chunks = []
      for (let i = 0; i < this.items.length; i += this.perPage) {
        chunks.push(this.items.slice(i, i + this.perPage))
      }
      return chunks
    },
    maxSlide() {
      return this.slides.length - 1
    },
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.maxSlide) {
        this.currentSlide++
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
  },
}
</script>