<script lang="ts" setup>
import { mdiChevronRight } from '@mdi/js';
const emit = defineEmits(['success']);

const { login } = useAuth();

const config = useRuntimeConfig();
const formRef = ref<any>(null); // vuetify <v-form ref="formRef"
const isValidForm = ref(null);
const form = reactive({
  data: {
    username: config.public.isDebug ? 'name_' : '',
    password: config.public.isDebug ? 'password_' : '',
  },
  error: '',
  pending: false,
});

async function onLoginClick() {
  formRef.value.validate();
  if (!isValidForm.value) {
    return;
  }

  try {
    form.error = '';
    form.pending = true;

    const authUser = await login(form.data.username, form.data.password);
    if (!authUser) {
      return;
    }

    emit('success');
  } finally {
    form.pending = false;
  }
}
</script>

<template>
  <v-form ref="formRef" v-model="isValidForm">
    <v-card class="mx-auto font-weight-bold" max-width="344" title="User Login">
      <v-container>
        <v-text-field
          v-model="form.data.username"
          color="primary"
          label="Username"
          variant="underlined"
          required
        />

        <v-text-field
          v-model="form.data.password"
          color="primary"
          label="Password"
          placeholder="Enter your password"
          variant="underlined"
          required
        />
      </v-container>

      <v-divider />

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="success"
          :disabled="form.pending"
          :loading="form.pending"
          @click.prevent="onLoginClick"
        >
          Login
          <v-icon :icon="mdiChevronRight" end />
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-form>

  <br /><br /><br /><br />

  <v-card class="mx-auto px-6 py-8" max-width="344">
    <v-form ref="formRef" v-model="isValidForm">
      <v-text-field
        v-model="form.data.username"
        class="mb-2"
        required
        label="Username"
      />

      <v-text-field
        v-model="form.data.password"
        required
        label="Password"
        placeholder="Enter your password"
      />

      <br />

      <v-btn
        :disabled="isValidForm || form.pending"
        :loading="form.pending"
        block
        color="success"
        size="large"
        variant="elevated"
        @click.prevent="onLoginClick"
      >
        Login
      </v-btn>
    </v-form>
  </v-card>
</template>
