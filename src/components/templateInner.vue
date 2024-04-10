<template>
  <div>{{ spanValue }}</div>
</template>

<script>
export default {
  data() {
    return {
      spanValue: 'Hello Vue',
    };
  },
  created() {
    setInterval(() => {
      this.spanValue = Math.random();
    }, 1000);
  }
};
</script>