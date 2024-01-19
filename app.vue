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
  box-sizing: border-box;
}

*::before,
*::after {
  box-sizing: border-box;
}

body {
  position: relative;
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