<template>
  <div class="register-container">
    <el-form
      :model="registerForm"
      :rules="regidterRules"
      label-width="150px"
      ref="registerForm"
    >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="registerForm.email"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="registerForm.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="comparePassword">
        <el-input v-model="registerForm.comparePassword"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      registerForm: {
        email: '',
        password: '',
        comparePassword: ''
      },
      regidterRules: {
        email: {
          type: 'email',
          required: true,
          message: '请输入邮箱地址',
          trigger: 'blur'
        },
        password: {
          type: 'string',
          required: true,
          message: '密码不能为空',
          trigger: 'blur'
        },
        comparePassword: {
          type: 'string',
          required: true,
          trigger: 'blur',
          validator: function (rule, value, callback) {
            if (value === '') {
              callback(new Error('请再次数日密码'))
            } else if (value !== this.password) {
              callback(new Error('两次输入的密码不一致'))
            } else {
              callback()
            }
          }
        }
      }
    }
  }
}
</script>

<style></style>
