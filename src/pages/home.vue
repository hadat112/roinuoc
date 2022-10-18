<script lang="ts" setup>
import { Carousel } from "ant-design-vue";
</script>
<template>
  <div class="home w-full">
    <Carousel>
      <div>
        <img
          class="block w-[100%] h-[520px] min-h-[520px] max-w-full"
          src="https://sodulich.hanoi.gov.vn/storage/nh-cac-nghe-nhan-dieu-khien-con-roi-to-nuoc.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          class="block w-[100%] h-[520px] min-h-[520px] max-w-full"
          src="https://media.hanoitv.vn/thumb_x600x314/upload/2013/12/14/doc-dao-phuong-roi-co-te-tieu.jpg"
          alt=""
        />
      </div>
      <!-- <div><h3>1</h3></div>
      <div><h3>2</h3></div>
      <div><h3>3</h3></div>
      <div><h3>4</h3></div> -->
    </Carousel>

  </div>
</template>

<style scoped>
/* For demo */
.home :deep(.slick-slide) {
  text-align: center;
  height: 520px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.home :deep(.slick-slide h3) {
  color: #fff;
}
</style>
