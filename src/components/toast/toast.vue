<template>
    <transition
      name="fade"
      :v-if="isShow">
        <i>{{ type }}</i>
        {{ content }}
    </transition>
</template>
<script>
    export default {
      props: {
        content: {
          type: String,
          default: prefixCls
        },
        isShow: {
          type: Boolean,
          default: false
        },
        type: {
          type: String
        }
      },
      data () {
        return {
          notices: []
        }
      },
      computed: {
        classes () {
          return [
            `${this.prefixCls}`,
            {
              [`${this.className}`]: !!this.className
            }
          ]
        }
      },
      methods: {
        create (notice) {
          const name = notice.name || getUuid()

          let _notice = Object.assign({
            isShow: notice.isShow,
            content: '',
            duration: 1.5,
            closable: false,
            name: name
          }, notice)
        },
        close (name) {
          const notices = this.notices
          for (let i = 0; i < notices.length; i++) {
            if (notices[i].name === name) {
              this.notices.splice(i, 1)
              break
            }
          }
        },
        closeAll () {
          this.notices = []
        },
        clearCloseTimer () {
          if (this.closeTimer) {
            clearTimeout(this.closeTimer)
            this.closeTimer = null
          }
        },
        close () {
          this.clearCloseTimer()
          this.onClose()
          this.$parent.close(this.name)
        }
      },
      mounted () {
        this.clearCloseTimer()

        if (this.duration !== 0) {
          this.closeTimer = setTimeout(() => {
            this.close()
          }, this.duration * 1000)
        }

        // check if with desc in Notice component
        if (this.prefixCls === 'ivu-notice') {
          this.withDesc = this.$refs.content.querySelectorAll(`.${this.prefixCls}-desc`)[0].innerHTML !== ''
        }
      },
      beforeDestroy () {
        this.clearCloseTimer()
      }
    }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
