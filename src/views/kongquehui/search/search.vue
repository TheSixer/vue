<template>
  <div class="search">
    <header class="header">
      <button id="back" class="back">
        <img src="../../assets/images/goBack.png" >
      </button>
      <Form ref="formSearch" :model="formSearch" :rules="ruleInline" inline>
        <Form-item class="input">
            <Input v-model="formSearch.keyword" placeholder="请输入"></Input>
        </Form-item>
        <Form-item  class="button">
            <Button @click="handleSubmit('formSearch')">
              <img src="../../assets/images/search.png" >
            </Button>
        </Form-item>
      </Form>
    </header>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          formSearch: {
            keyword: ''
          },
          ruleInline: {
            formSearch: [
              { required: true, message: '请填写用户名', trigger: 'blur' }
            ]
          }
        }
      },
      methods: {

      }
    }
</script>

<style lang="less">
@pxtorem: 20rem;

.search {
  height: 100%;
  background: #f0f0f0;
  .header {
    display: flex;
    position: relative;
    height: 100 / @pxtorem;
    line-height: 100 / @pxtorem;
    background: #FFFFFF;
    margin-bottom: 20 / @pxtorem;
    button.back {
      height: 60 / @pxtorem;
      padding: 11.5 / @pxtorem 20 / @pxtorem;
      margin: 20 / @pxtorem 0;
      background: none;
      img {
        width: 21 / @pxtorem;
        height: 37 / @pxtorem;
        vertical-align: top;
      }
    }
    .ivu-form {
      margin-left: 20 / @pxtorem;
      display: flex;
      width: 100%;
      padding-right: 20 / @pxtorem;
      align-items:center;
      justify-content:center;
      .ivu-form-item {
        display: inline-flex;
        margin: 0;
        .ivu-form-item-content {
          width: 100%;
          .ivu-input {
            outline: none;
            box-shadow: none;
            height: 65 / @pxtorem;
            background: #eee;
            border: none;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;
          }
          button {
            width: 100%;
            height: 65 / @pxtorem;
            background: #eee;
            border: none;
            display: flex;
            align-items:center;
            justify-content:center;
          }
        }
      }
      .ivu-form-item.input {
        width: 70%;
      }
      .ivu-form-item.button {
        width: 30%;
        .ivu-form-item-content {
          position: relative;
          padding-left: 20 / @pxtorem;
          background: #EEE;
          border-top-right-radius: 4 / @pxtorem;
          border-bottom-right-radius:  4 / @pxtorem;
        }
        .ivu-form-item-content:before {
          content: '';
          position: absolute;
          top: 10 / @pxtorem;
          left: 0;
          display: inline-block;
          width: 1px;
          height: 45 / @pxtorem;
          background: #BBB;
        }
        img {
          display: inline-flex;
          width: 36 / @pxtorem;
          height: 36 / @pxtorem;
          vertical-align: bottom;
        }
      }
    }
  }
}
</style>
