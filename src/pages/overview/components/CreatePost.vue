<script lang="ts" setup>
import { Modal, Button, Input as DInput } from "ant-design-vue";
import { QuillEditor as DEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import "@vueup/vue-quill/dist/vue-quill.bubble.css";
import { reactive } from "vue";

interface IProps {
  visible?: boolean;
  title?: string;
}

const props = defineProps<IProps>();
const emits = defineEmits(["ok", "cancel"]);
const PostState = reactive({
  title: "",
  content: "",
});

const handleFinished = () => {
  emits("ok", PostState.title, PostState.content);
};
</script>

<template>
  <Modal
    :visible="props.visible"
    :closable="true"
    class="modal-web"
    :width="720"
    @cancel="emits('cancel')"
  >
    <template #title>
      <div class="relative flex items-center py-2">
        <p class="m-0 flex justify-center flex-1">
          <span> Create new post </span>
        </p>
      </div>
    </template>
    <d-input
      v-model:value="PostState.title"
      class="mb-6"
      placeholder="Title"
      label=""
    />
    <div class="post-content">
      <DEditor v-model:content="PostState.content" theme="snow" toolbar="full" />
    </div>
    <template #footer>
      <div class="flex justify-end gap-x-3">
        <Button size="small" @click="handleFinished">Post</Button>
      </div>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
.ant-modal.modal-web {
  width: 720px;
}

.post-content:deep(.ql-container) {
  height: 160px;
}

.modal-web:deep(.ql-container.ql-snow) {
  height: 160px;
}

.modal-web .ant-modal-content {
  border-radius: 16px;
}

.modal-web .ant-modal-content .ant-modal-header {
  padding: 16px;
  border-radius: 16px 16px 0 0;

  .ant-modal-title {
    text-align: center;
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
  }
}

.modal-web .ant-modal-content .ant-modal-body,
.ant-modal-footer {
  padding: 16px;
}
</style>
