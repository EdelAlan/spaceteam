<template>
  <header
    ref="header"
    class="header"
  >
    <div class="header-links">
      <NuxtLink 
        v-for="(item, idx) in items"
        :key="`${item.to ?? item.link}${idx}`"
        :to="item.to ?? item.link"
        :target="item.to ? '' : '_blank'"
      >
        {{ item.title }} →
      </NuxtLink>
    </div>
    <div>
      <a href="/">
        Space Team
      </a>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
const { items } = props
</script>

<style lang="scss">
a {
  color: #eeece7;
}

.header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 46px 20px 0 20px;
  font-size: 60px;
  line-height: 56px;
  z-index: 11;

  &-links {
    position: absolute;
    left: 20px;
    display: flex;
    gap: 20px;
    font-size: 12px;
    line-height: 1.15;
    text-transform: uppercase;
  }
}
</style>