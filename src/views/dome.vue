<template>
  <div>
    <h1>dome</h1>
  </div>
</template>

<script>
function get(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1);
}
console.log(get([]));
export default {};
</script>

<style></style>
