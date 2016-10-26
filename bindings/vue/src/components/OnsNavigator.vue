<template>
  <ons-navigator ref="navigator">
    <div
      v-for="(page, index) in pages"
      track-by="index"
      :is="page"
      @push="push"
      @pop="pop">
    </div>
  </ons-navigator>
</template>

<script>
  import Vue from 'vue';
  const noop = () => {};

  export default {
    data() {
      return {
        pages: [],
        isRunning: false
      };
    },

    props: ['initialComponent'],

    created: function () {
      Vue.prototype._eventHub.$on('push', this.push)
      Vue.prototype._eventHub.$on('pop', this.pop)
    },

    mounted: function () {
      this.$nextTick(function () {
        if (this.initialComponent) {
          this.pages = [this.initialComponent];
        }
      })
    },

    methods: {
      push({component, ...options}) {
        if (this.isRunning) {
          return;
        }

        this.pages = [...this.pages, component];
        this.isRunning = true;
        this.$refs.navigator
          ._pushPage(options)
          .catch(noop)
          .then(() => this.isRunning = false);
      },

      pop(options = {}) {
        if (this.isRunning) {
          return;
        }

        const removePage = () => {
          this.pages = this.pages.slice(0, this.pages.length - 1);
          return Promise.resolve();
        };

        this.isRunning = true;
        this.$refs.navigator
          ._popPage(options, removePage)
          .catch(noop)
          .then(() => this.isRunning = false);
      }
    }
  };
</script>
