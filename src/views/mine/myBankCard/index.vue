<template>
  <div class="chooseback">
    <Heade title="我的银行卡"></Heade>
    <div class="bank">
      <ul>
        <li v-for="item in memberBankList" :key="item.id">
          <h2>{{ item.bankName }}</h2>
          <p>{{ item.cardNo }}</p>
          <button type="primary" @click="deleteCard(item.id)">删除</button>
        </li>
      </ul>
    </div>

    <div class="nobank" v-if="!memberBankList.length">
        <p>尚未添加银行卡</p>
    </div>

    <div class="add-btn">
      <button @click="addBankCard">添加银行卡</button>
    </div>

    <Modal
      v-model="modal"
      :loading="true"
      title="删除银行卡"
      @on-ok="ok">
      <p>确定删除此银行卡吗？</p>
    </Modal>
  </div>
</template>

<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;

  .chooseback{
    .bank{
        padding: 20 / @pxtorem;
      li{
            background: url('../../../assets/images/bg1.png');
            background-size: 100% 100%;
            padding: 40 / @pxtorem 30 / @pxtorem;
            border-radius:6 / @pxtorem;
            height:248 / @pxtorem;
            position:relative;

        h2{
            font-size:34 / @pxtorem;
            color:#fff;
            font-weight:normal;
            margin-bottom:40 / @pxtorem;
        }
        p{
          color:#fff;
          font-size:34 /@pxtorem;
        }
        button{
            width:120 /@pxtorem;
            height:60 /@pxtorem;
            line-height:60 /@pxtorem;
            text-align: center;
            background:#dad4a2;
            color:#715e33;
            border-radius:6 / @pxtorem;
            font-size:28  / @pxtorem;
            position: absolute;
            right:40 / @pxtorem;
            top:30 / @pxtorem;
        }
      }
    }
    .nobank{
            margin: 30 / @pxtorem;
            background:#fff;
            border-radius:6 / @pxtorem;
            height:248 / @pxtorem;
        p{
          line-height:248 / @pxtorem;
          text-align: center;
          color:#999;
          font-size:32 / @pxtorem;
        }
    }
    .add-btn{
        position: fixed;
        width: 100%;
        padding: 4.5rem 1rem;
        left: 0;
        bottom: 0;
      button{
        height: 90 / @pxtorem;
        width: 100%;
        font-size: 34 / @pxtorem;
        color: #715e33;
        background: #dad4a2;
        border-radius: 6 / @pxtorem;
      }
    }
  }
</style>

<script>
import Heade from '@/components/wordHeader/wordHeader'
import { mapState, mapActions } from 'vuex'
import { getBankCards, deleteBankCard } from '@/api/service'
export default {
  data () {
    return {
      memberBankList: [],
      modal: false,
      delBankId: null
    }
  },
  components: {
    Heade
  },
  computed: {
    ...mapState([
      'memberId'
    ])
  },
  mounted () {
    this.getUserMemberId()
    this.initData()
  },
  methods: {
    ...mapActions([
      'getUserMemberId'
    ]),
    async initData () {
      await getBankCards({
        memberId: this.memberId
      }).then(res => {
        if (res.data.code === '200') {
          this.memberBankList = res.data.memberBankList
        }
      })
    },
    addBankCard () {
      this.$router.push({
        path: 'my-bank-card/add-bank-card'
      })
    },
    deleteCard (id) {
      this.delBankId = id
      this.modal = true
    },
    async ok () {
      await deleteBankCard({
        bankId: this.delBankId
      }).then(res => {
        if (res.data.code === '200') {
          this.$Message.success('删除成功！')
          this.modal = false
          this.initData()
        }
      })
    }
  }
}
</script>
