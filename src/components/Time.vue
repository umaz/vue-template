<template>
  <div>
    <p>現在時刻: {{to_s}}</p>
    <Calc :jst="jst" v-on:updateTime="getTime"></Calc>
    <router-link to="/helloworld">
      HelloWorld
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import Calc from './modules/Calc'
import mixin from './modules/mixin'
import * as types from '../store/mutation-types'

export default {
  name: 'Time',
  components: {
    Calc
  },
  mixins: [mixin],
  computed: {
    // ステートの読み込み
    ...mapState({
      unixtime: state => state.unixtime
    }),
    ...mapGetters({
      jst: types.GET_JST
    }),
    to_s () {
      return this.to_string(this.jst)
    }
  },
  methods: {
    ...mapActions({
      getTime: types.GET_UNIX_TIME
    })
  },
  created () {
    this.getTime()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
