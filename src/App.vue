<template>
  <div id="app" style="text-align:center">
    <NameSet/>
    <hr/>
    <NameShow/>
  </div>
</template>

<script>
import NameSet from '@/components/NameSet.vue'
import NameShow from '@/components/NameShow.vue'

export default {
  name: 'app',
  components: {
    NameSet,
    NameShow
  }
}
</script>
