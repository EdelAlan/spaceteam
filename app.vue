<template>
  <AppHeader :items="headerItems" />
  
  <NuxtPage />

  <AppFooter />
</template>

<script setup>
const route = useRoute()
const headerItems = computed(() => {
  return route.name.includes('calendar')
    ? [
      {
        title: 'Глваная',
        to: '/',
      },
      {
        title: 'Instagram',
        link: 'https://www.instagram.com/spaceteamalmaty/',
      },
    ]
    : [
      {
        title: 'Расписание',
        to: '/calendar',
      },
      {
        title: 'Instagram',
        link: 'https://www.instagram.com/spaceteamalmaty/',
      },
    ]
})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Space+Grotesk&display=swap');

* {
  font-family: 'Montserrat', sans-serif;
  user-select: none;
}

body {
  margin: 0;
  background: #000;

  & a {
    text-decoration: none;

    &:visited {
      text-decoration: none;
    }
  }
}
</style>