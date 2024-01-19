<template>
  <header
    ref="header"
    class="header"
  >
    <div class="header-links">
      <NuxtLink 
        v-for="item in headerLinks"
        :key="item.link"
        :to="item.link"
        target="_blank"
      >
        {{ item.title }} →
      </NuxtLink>
    </div>
    <div>
      <a href="/">
        Space Community Runners
      </a>
    </div>
  </header>
</template>

<script setup>
const headerLinks = ref([
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/spaceteamalmaty/',
  }
])
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
  background-color: #000;

  &-links {
    position: absolute;
    left: 20px;
    display: flex;
    gap: 20px;
    font-size: 12px;
    line-height: 1.15;
    text-transform: uppercase;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px 5px 0;
    font-size: 16px;
    line-height: 18px;
    flex-direction: column;
  }
}
</style>