<template>
       <div class="addbankcard">
          <Heade title="添加银行卡"></Heade>
          <div class="bankmes">
            <ul>
              <li>
                <span>开户银行</span>
                <div class="right">
                    <input type="text" v-model="bankName" placeholder="请输入开户银行">
                </div>
              </li>
              <li>
                <span>银行卡号</span>
                <div class="right">
                    <input type="text" v-model="cardNo" placeholder="请输入银行卡号">
                </div>
              </li>
              <li>
                <span>开户人</span>
                <div class="right">
                    <input type="text" v-model="accountName" placeholder="请输入姓名">
                </div>
              </li>
              <li>
                <span>身份证号</span>
                <div class="right">
                    <input type="text" v-model="idNo" placeholder="请输入身份证号">
                </div>
              </li>
              <li>
                <span>手机号</span>
                <div class="right">
                    <input type="text" v-model="bankPhone" placeholder="请输入与银行卡绑定的手机号">
                </div>
              </li>
            </ul>
          </div>
          <div class="add-btn">
            <button @click="submitInfo">确认</button>
          </div>
       </div>
</template>
<style lang="less">
@pxtorem: 20rem;
@black: #000000;
@white: #FFFFFF;
.addbankcard{
    .bankmes{
        li{
          background:#fff;
          height:100 / @pxtorem;
          padding:0  30 / @pxtorem;
          margin-top:20 / @pxtorem;
          span{
             font-size:28 / @pxtorem;
             color:#666;
             line-height:100 / @pxtorem;
             display:block;
             float:left;
             width:20%;
          }
          .right{
             width:80%;
             float:left;
             input{
                width:100%;
                padding:20 / @pxtorem 30 / @pxtorem;
                height:100 / @pxtorem;
                line-height:100 / @pxtorem;
                font-size:28 / @pxtorem;
             }
          }
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
import { addBankCard } from '@/api/service'
export default {
  data () {
    return {
      bankName: '',
      cardNo: '',
      accountName: '',
      idNo: '',
      bankPhone: ''
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
  },
  methods: {
    ...mapActions([
      'getUserMemberId'
    ]),
    submitInfo () {
      const checked = this.checkInfo()

      if (!checked) {
        this.$Message.warning('请输入完整信息！')
        return
      }

      addBankCard({
        memberId: this.memberId,
        bankName: this.bankName,
        cardNo: this.cardNo,
        accountName: this.accountName,
        idNo: this.idNo,
        bankPhone: this.bankPhone
      }).then(res => {
        if (res.data.code === '200') {
          this.$Message.success('添加成功！')
        } else {
          this.$Message.error(res.data.message)
        }
      })
    },
    checkInfo () {
      if (this.bankName && this.cardNo && this.accountName && this.idNo && this.bankPhone) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
