<template>
  <div id="setName" style="margin-top: 50px;">
    <input type="text" v-model="nameValue">
    <br/>
    <input type="text" v-model="surnameValue">
    <br/>
    <button @click="setData">set name</button> |
    <button @click="addPrefix">add prefix</button>
  </div>
</template>

<script>
export default {
  name: 'NameSet',
  data () {
    return {
      nameValue: '',
      surnameValue: ''
    }
  },
  methods: {
    setData () {
      const data = { name: this.nameValue, surname: this.surnameValue }
      console.log(data)
      this.$store.dispatch('setUserData', data)
    },
    addPrefix () {
      this.$store.dispatch('addPrefix')
    }
  }
}
</script>
