<template>
  <header class="w-full">
    <div class="max-w-6xl mx-auto flex items-center justify-between py-4 px-4">
      
        <div class="flex items-center gap-2">
        <div class="h-8 w-8 bg-emerald-500 rounded-full"></div>
        <span class="font-semibold text-lg"></span>
      </div>

      <div class="flex-1 mx-8">
        <input
          type="text"
          :placeholder="searchPlaceholder"
          class="w-full border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      <nav class="flex items-center gap-4">
        <ul class="flex items-center gap-6 text-sm font-medium">
          <li
            class="text-emerald-600 border-b-2 border-emerald-600 pb-1 cursor-pointer"
          >
            {{ labels.news }}
          </li>
          <li class="cursor-pointer text-gray-700">
            {{ labels.explore }}
          </li>
          <li class="cursor-pointer text-gray-700">
            {{ labels.guides }}
          </li>
          <li class="cursor-pointer text-gray-700">
            {{ labels.food }}
          </li>
          <li class="cursor-pointer text-gray-700">
            {{ labels.stay }}
          </li>
        </ul>

        <button
          @click="toggleLang"
          class="text-xs border border-gray-300 rounded-full px-3 py-1 hover:bg-gray-100 transition"
        >
          <span v-if="lang === 'vi'">VI / <span class="text-gray-500">EN</span></span>
          <span v-else>EN / <span class="text-gray-500">VI</span></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script>
    export default {
        props: {
            lang: {
                type: String,
                required: true,
            },
            labels: {
                type: Object,
                required: true,
            },
            searchPlaceholder: {
                type: String,
                required: true,
            },
        },
        emits: ['change-lang'],
        methods: {
            toggleLang() {
                const next = this.lang === 'vi' ? 'en' : 'vi'
                this.$emit('change-lang', next)
            },
        },
    }
</script>