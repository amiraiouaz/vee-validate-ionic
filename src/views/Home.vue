<template>
  <ion-page>
    <ion-content>
      <Form @submit="onSubmit">
        <!-- email -->
        <ion-item>
          <ion-label position="floating">
            Email
          </ion-label>
          <Field v-slot="{ field }" name="email" rules="required|email">
            <ion-input v-bind="field" type="email" clear-input />
          </Field>
        </ion-item>
        <ErrorMessage name="email" />
        <ion-button type="submit" @submit="onSubmit"> Submit </ion-button>
      </Form>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/vue";
import { defineComponent } from "vue";

import { Form, Field, ErrorMessage } from "vee-validate";

export default defineComponent({
  name: "Home",
  components: {
    IonPage,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    Form,
    Field,
    ErrorMessage,
  },
  setup() {
    const onSubmit = (data: any, { resetForm }: { resetForm: any }) => {
      console.log(data);
      resetForm()
    };

    return {
      onSubmit,
    };
  },
});
</script>
