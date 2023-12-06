<template>
  <AppHeader />
  
  <NuxtPage />

  <AppFooter />
</template>

<style lang="scss">
* {
  font-family: Monument Grotesk Semi-Mono,Helvetica Neue,Helvetica;
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