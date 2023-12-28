<template>
  <AppHeader />
  
  <NuxtPage />

  <AppFooter />
</template>

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