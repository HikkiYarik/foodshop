<template>
  <div class="in-soup-item">
    <img src="" alt="img">
    <p>Item 1</p>
    <p>Price: 100$</p>
    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
    name: 'InSoup'
}
</script>

<style>
.in-soup-item {
  flex-basis: 15%;
  box-shadow: black;
  padding: 16px;
  margin-bottom: 8px;
  border-style: solid;
  border-color: black;
  padding: 5px;
}
</style>