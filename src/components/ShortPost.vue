<script setup lang="ts">
import {ref} from 'vue'
import {
  Button as DButton,
  Divider,
  Dropdown as DDropdown,
  Menu as DMenu,
  Modal as DModal,
} from "ant-design-vue";
import { EllipsisOutlined } from "@ant-design/icons-vue";
const DMenuItem = DMenu.Item;

interface IProps {
  data: {
    title: string;
    content: string;
    slug: string;
    _id: string;
  };
}

const showDeleteModal = ref<boolean>(false)
const props = defineProps<IProps>();

async function deletePost(params: any) {
  const url = "http://localhost:3000/" + params.id;
  console.log(url);
  const response = await fetch(url, {
    method: "DELETE",
  });

  console.log(response);
}

const handleDelete = () => {
  deletePost({ id: props.data._id });
};
</script>

<template>
  <div
    class="max-w-[900px] bg-white px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col items-center relative"
  >
    <d-dropdown>
      <span
        class="text-2xl absolute top-3 right-4 cursor-pointer hover:bg-bg-body rounded-full p-1 w-[36px] h-[36px] flex items-center justify-center text-center"
      >
        <ellipsis-outlined />
      </span>
      <template #overlay>
        <d-menu>
          <d-menu-item>
            <a href="javascript:;" @click.prevent="showDeleteModal=true">Delete</a>
          </d-menu-item>
        </d-menu>
      </template>
    </d-dropdown>

    <h1 class="text-3xl font-bold text-center leading-10 mb-4">
      {{ props.data.title }}
    </h1>
    <span class="">06/10/2022 - Rối nước tế tiêu - 0 Bình luận</span>
    <div class="w-[60px]">
      <Divider style="height: 2px; background-color: #7cb305" />
    </div>
    <p
      class="text-lg leading-10 text-justify mb-8 max-h-[200px] overflow-hidden"
    >
      {{ props.data.content }}
    </p>
    <DButton>
      <router-link :to="props.data.slug"> Đọc thêm </router-link>
    </DButton>
  </div>

  <DModal
    :visible="showDeleteModal"
    :closable="true"
    class="modal-web"
    :width="720"
    @cancel="showDeleteModal = false"
  >
    <template #title>
      <div class="relative flex items-center py-2">
      </div>
    </template>
    <p class="m-0 flex justify-center flex-1">
      <span> Ban co muon xoa bai viet nay </span>
    </p>
    <template #footer>
      <div class="flex justify-end gap-x-3">
        <DButton size="small" @click="showDeleteModal = false">Huy</DButton>
        <DButton size="small" @click="handleDelete">Co</DButton>
      </div>
    </template>
  </DModal>
</template>
