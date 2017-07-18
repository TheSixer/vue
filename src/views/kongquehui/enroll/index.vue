<template>
  <div class="enroll">
    <header class="header">
      <button id="back" class="back">
        <img src="../../../assets/images/goBack.png" >
      </button>
      <span>报名参与</span>
    </header>

    <Form ref="formEnroll" :model="formEnroll">
        <Form-item prop="user">
            <i class="name">
              姓名
            </i>
            <Input type="text" v-model="formEnroll.user" placeholder="Username">
            </Input>
        </Form-item>
        <Form-item prop="password">
            <i class="phoneNumber">
              手机号
            </i>
            <Input type="text" v-model="formEnroll.password" placeholder="Password">
            </Input>
        </Form-item>
        <Form-item prop="words" class="textarea">
            <i class="words">
              参赛宣言
            </i>
            <Input type="textarea" v-model="formEnroll.value6" :rows="4" placeholder="请输入..."></Input>
        </Form-item>
        <Form-item prop="video" class="uploadVideo">
          <i class="upload">
            参赛视频 <br>
            <span>不超过5M</span>
          </i>
          <div class="item-list">
            <div class="demo-upload-list" v-for="item in uploadList">
                <template v-if="item.status === 'finished'">
                    <img :src="item.url">
                    <div class="demo-upload-list-cover">
                        <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                        <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                    </div>
                </template>
                <template v-else>
                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                </template>
            </div>
            <Upload
                ref="upload"
                :show-upload-list="false"
                :default-file-list="defaultList"
                :on-success="handleSuccess"
                :format="['jpg','jpeg','png']"
                :max-size="2048"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                :before-upload="handleBeforeUpload"
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/"
                style="display: inline-block;width:58px;">
                <div style="width: 58px;height:58px;line-height: 58px;">
                    <Icon type="camera" size="20"></Icon>
                </div>
            </Upload>
            <Modal title="查看图片" v-model="visible">
                <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
            </Modal>
          </div>
        </Form-item>
        <Form-item prop="video" class="uploadVideo">
          <i class="upload">
            <p>参赛美照</p>
            <span>不少于一张 <br> 不超过27张</span>
          </i>
          <div class="item-list">
            <div class="demo-upload-list" v-for="item in uploadList">
                <template v-if="item.status === 'finished'">
                    <img :src="item.url">
                    <div class="demo-upload-list-cover">
                        <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                        <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                    </div>
                </template>
                <template v-else>
                    <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
                </template>
            </div>
            <Upload
                ref="upload"
                :show-upload-list="false"
                :default-file-list="defaultList"
                :on-success="handleSuccess"
                :format="['jpg','jpeg','png']"
                :max-size="2048"
                :on-format-error="handleFormatError"
                :on-exceeded-size="handleMaxSize"
                :before-upload="handleBeforeUpload"
                multiple
                type="drag"
                action="//jsonplaceholder.typicode.com/posts/"
                style="display: inline-block;width:58px;">
                <div style="width: 58px;height:58px;line-height: 58px;">
                    <Icon type="camera" size="20"></Icon>
                </div>
            </Upload>
            <Modal title="查看图片" v-model="visible">
                <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
            </Modal>
          </div>
        </Form-item>

        <div class="btn-item">
          <button class="enrollBtn" @click="enrollSubmit('formEnroll')" long>登录</button>
        </div>
    </Form>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          formEnroll: {
            user: '',
            password: ''
          },
          ruleInline: {
            user: [
              { required: true, message: '请填写用户名', trigger: 'blur' }
            ],
            password: [
              { required: true, message: '请填写密码', trigger: 'blur' },
              { type: 'string', min: 6, message: '密码长度不能小于6位', trigger: 'blur' }
            ]
          },
          defaultList: [
            {
              'name': 'a42bdcc1178e62b4694c830f028db5c0',
              'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
            },
            {
              'name': 'bc7521e033abdd1e92222d733590f104',
              'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
            }
          ],
          imgName: '',
          visible: false,
          uploadList: []
        }
      },
      methods: {
        enrollSubmit (name) {
          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$Message.success('提交成功!')
            } else {
              this.$Message.error('表单验证失败!')
            }
          })
        },
        handleView (name) {
          this.imgName = name
          this.visible = true
        },
        handleRemove (file) {
          // 从 upload 实例删除数据
          const fileList = this.$refs.upload.fileList
          this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
        },
        handleSuccess (res, file) {
          // 因为上传过程为实例，这里模拟添加 url
          file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
          file.name = '7eb99afb9d5f317c912f08b5212fd69a'
        },
        handleFormatError (file) {
          this.$Notice.warning({
            title: '文件格式不正确',
            desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
          })
        },
        handleMaxSize (file) {
          this.$Notice.warning({
            title: '超出文件大小限制',
            desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
          })
        },
        handleBeforeUpload () {
          const check = this.uploadList.length < 5
          if (!check) {
            this.$Notice.warning({
              title: '最多只能上传 5 张图片。'
            })
          }
          return check
        }
      },
      mounted () {
        this.uploadList = this.$refs.upload.fileList
      }
    }
</script>

<style lang="less">
@pxtorem: 20rem;
@btnColor: #dad4a2;
@baseColor: #715e33;

.enroll {
  height: 100%;
  background: #f0f0f0;
  button.back {
    position: absolute;
    top: 20 / @pxtorem;
    left: 15 / @pxtorem;
    height: 60 / @pxtorem;
    padding: 11.5 / @pxtorem 0;
    background: none;
    img {
      width: 21 / @pxtorem;
      height: 37 / @pxtorem;
      vertical-align: top;
    }
  }
  .header {
    height: 100 / @pxtorem;
    line-height: 100 / @pxtorem;
    text-align: center;
    background: #FFFFFF;
    font-size: 32 / @pxtorem;
    color: #666666;
    margin-bottom: 20 / @pxtorem;
  }
  .ivu-form {
    padding: 0;
    .ivu-form-item {
      height: 100 / @pxtorem;
      box-sizing: border-box;
      padding: 20 / @pxtorem 15 / @pxtorem;
      margin: 0 0 10 / @pxtorem 0;
      background: #FFFFFF;
      .ivu-form-item-content {
        display: flex;
        i {
          font-size: 28 / @pxtorem;
          width: 26%;
          height: 60 / @pxtorem;
          line-height: 60 / @pxtorem;
          span {
            font-size: 24 / @pxtorem;
          }
        }
        .ivu-input {
          height: 60 / @pxtorem;
          border: none;
          font-size: 28 / @pxtorem;
        }
      }
    }
    .ivu-form-item.textarea {
      height: 225 / @pxtorem;
      box-sizing: border-box;
      padding: 20 / @pxtorem 15 / @pxtorem;
      margin: 0 0 10 / @pxtorem 0;
      background: #FFFFFF;
      textarea.ivu-input {
        resize: none;
        height: 195 / @pxtorem;
        line-height: 46 / @pxtorem;
      }
    }
    .ivu-form-item.uploadVideo {
      height: auto;
      box-sizing: border-box;
      padding: 20 / @pxtorem 15 / @pxtorem 0;
      margin: 0 0 10 / @pxtorem 0;
      background: #FFFFFF;
      .upload {
        height: 97 / @pxtorem;
        line-height: 28 / @pxtorem;
      }
      .item-list {
        width: 74%;
        .demo-upload-list {
          width:  97 / @pxtorem;
          height: 97 / @pxtorem;
        }
        .ivu-upload {
          width:  97 / @pxtorem;
          height: 97 / @pxtorem;
        }
        .ivu-upload.ivu-upload-drag {
          border: 1px solid #DDD;
          border-radius: 0;
          .ivu-icon-camera:before {
            content: none;
          }
        }
        .ivu-upload-drag:before {
          content: '';
          position: absolute;
          display: inline-block;
          height: 40 / @pxtorem;
          width: 2px;
          top: 25 / @pxtorem;
          left: 43 / @pxtorem;
          background: #DDD;
        }
        .ivu-upload-drag:after {
          content: '';
          position: absolute;
          display: inline-block;
          height: 2px;
          width: 40 / @pxtorem;
          top: 43 / @pxtorem;
          left: 25 / @pxtorem;
          background: #DDD;
        }
      }
    }
    .demo-upload-list{
        display: inline-block;
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        border: 1px solid transparent;
        border-radius: 4px;
        overflow: hidden;
        background: #fff;
        position: relative;
        box-shadow: 0 1px 1px rgba(0,0,0,.2);
        margin-right: 4px;
    }
    .demo-upload-list img{
        width: 100%;
        height: 100%;
    }
    .demo-upload-list-cover{
        display: none;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
    }
    .demo-upload-list:hover .demo-upload-list-cover{
        display: block;
    }
    .demo-upload-list-cover i{
        color: #fff;
        font-size: 20px;
        cursor: pointer;
        margin: 0 2px;
    }
    .btn-item {
      padding: 80 / @pxtorem 15 / @pxtorem 60 / @pxtorem;
      width: 100%;
      button {
        font-size: 34 / @pxtorem;
        width: 100%;
        height: 90 / @pxtorem;
        border-radius: 6 / @pxtorem;
        color: @baseColor;
        background: @btnColor;
      }
    }
  }
}
</style>

