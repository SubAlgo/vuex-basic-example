<template>
  <div id="nameShow">
    <h1>แสดงผลข้อมูล</h1>
    <h1>{{name}} | {{surname}}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'NameShow',
  computed: {
    /*
    name () {
      return this.$store.getters.name
    },
    surname () {
      return this.$store.getters.surname
    }
    */
    ...mapGetters([
      'name',
      'surname'
    ])
  }
}
</script>
