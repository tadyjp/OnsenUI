import Vue from 'vue';

Vue.filter('myCapitalize', function (value) {
  return value[0].toUpperCase() + value.slice(1)
})

