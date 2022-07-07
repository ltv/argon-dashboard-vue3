<template>
  <div class="w-full">
    <el-card class="items-center border-white">
      <template #header>
        <div class="flex justify-between py-2">
          <h3>Edit Profile</h3>
          <el-button class="text-sky-700" size="small" type="primary">Settings</el-button>
        </div>
      </template>
      <!-- USER INFORMATION -->
      <div class="user-info">
        <div class="user-form">
          <!-- form title -->
          <h6 class="text-xs text-muted py-1 -tracking-tighter uppercase mb-6 leading-6">
            USER INFORMATION
          </h6>
          <div class="lg:pl-6">
            <el-form :model="userForm" label-position="top">
              <el-form-item label="Name">
                <el-input v-model="userForm.name" placeholder="Admin" />
              </el-form-item>
              <el-form-item label="Email">
                <el-input v-model="userForm.mail" placeholder="admin@argon.com" />
              </el-form-item>

              <el-form-item label="Profile photo">
                <el-upload class="w-full" action="#">
                  <el-input placeholder="demo.png" class="input-upload">
                    <template #append>Browse</template>
                  </el-input>
                </el-upload>
              </el-form-item>
            </el-form>
            <div class="flex justify-center mt-13.25">
              <el-button type="success">Save</el-button>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <!-- Password -->
      <div class="pass-info">
        <div class="pass-form">
          <!-- Form title -->
          <h6 class="text-xs text-muted py-1 -tracking-tighter uppercase mb-6 leading-6">
            PASSWORD
          </h6>
          <div class="lg:pl-6">
            <el-form :model="passForm" label-position="top" show-password>
              <el-form-item label="Current Password">
                <el-input
                  v-model="passForm.oldPass"
                  type="password"
                  placeholder="Current Password"
                />
              </el-form-item>
              <el-form-item label="New Password">
                <el-input v-model="passForm.newPass" type="password" placeholder="New Password" />
              </el-form-item>
              <el-form-item label="Confirm New Password">
                <el-input
                  v-model="passForm.confirmPass"
                  type="password"
                  placeholder="Confirm New Password"
                />
              </el-form-item>
            </el-form>
            <div class="flex justify-center mt-13.25">
              <el-button type="success">Change password</el-button>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'EditProfileForm',
  setup() {
    const userForm = reactive({
      name: '',
      mail: '',
    })

    const passForm = reactive({
      oldPass: '',
      newPass: '',
      confirmPass: '',
    })

    return {
      userForm,
      passForm,
    }
  },
})
</script>

<style lang="scss" scoped>
::v-deep(.el-input.el-input--default.el-input-group.el-input-group--append):focus-within {
  @apply border border-blue-500 rounded #{!important};
  &.input-upload .el-input__inner {
    @apply focus:border-t-0 focus:border-l-0 focus:border-b-0;
  }
  &.input-upload .el-input-group__append {
    @apply border-0 #{!important};
  }
}
</style>
