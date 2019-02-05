<template>
  <div>
    <div v-if="finish_time - jst > 0">
      新元号まであと{{time}}
    </div>
    <div v-else>
      新元号から{{time}}
    </div>
    <v-btn @click="$emit('updateTime')">更新</v-btn>
  </div>
</template>

<script>
import mixin from './mixin'
export default {
  name: 'Calc',
  mixins: [mixin],
  props: ['jst'],
  data () {
    return {
      finish: '2019-05-01'
    }
  },
  computed: {
    finish_time () {
      return new Date(this.finish)
    },
    time () {
      const diff = this.finish_time.getTime() - this.jst.getTime()
      const date = Math.floor(diff / (24*60*60*1000))
      let surplus = diff % (24*60*60*1000)
      const hour = Math.floor(surplus / (60*60*1000))
      surplus = surplus % (60*60*1000)
      const min = Math.floor(surplus / (60*1000))
      return `${date}日${hour}時間${min}分`
    }
  },
  methods: {
    add () {
      this.num += 6
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.v-move {
  transition: transform 300ms ease-out;
}
</style>
