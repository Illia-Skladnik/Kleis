<style scoped lang="scss">
  .gradient {
    // background: radial-gradient(ellipse at top, #2F94A7, transparent),
    //             radial-gradient(ellipse at bottom, #CE9F51, transparent);
    width: 1834x;
    height: 1048px;
    position: relative;
    background-color: #1E2F43;

    // background-image:
    //   radial-gradient(
    //     farthest-corner at 40px 40px,
    //     #f35 0%,
    //     #43e 100%
    //   );


    &__brown {
      // background-color: #CE9F51;
      position: absolute;
      width: 541px;
      height: 541px;
      top: 350px;
      left: 266px;
      border-radius: 50%;
      background-image: radial-gradient(#CE9F51, #1E2F43);
    }
  }
</style>

<template>
  <div class="gradient">
    <div class="gradient__brown"></div>
    <div class="gradient__steel-blue"></div>
    <div class="gradient__pale-blue"></div>
  </div>
</template>


<script setup>
</script>
