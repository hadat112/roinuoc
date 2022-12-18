<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { Input as DInput, Card } from "ant-design-vue";

const playName = ref("");

const plays = [
  "Trò xay lúa, giã gạo, cày, bừa.",
  "Thực hiện học bình dân học vụ của Bác Hồ kêu gọi. 3. Tổ đổi công vui sản xuất",
  "Rƣớc thóc theo kho và các hoa quả quý",
  "Thợ cấy hát ví với thợ cày",
  "Thạch Sanh thuận lòng chém Mãng Xà Vƣơng",
  "Chèo: Lƣu Bình - Dƣơng Lễ",
  "Leo dây ảo thuật",
  // "Nhiều đoạn tuồng Tam Quốc.",
  // "Em đi tìm Đảng, đƣợc nhà hát múa rối Trung ƣơng cho.",
  // "35 ngày đêm Mỹ Đức khói lửa (tức quân và dân Mỹ Đức đánh giặc ra khỏi huyện), trò diễn đã đƣợc phục vụ vào lớp sửa sai đầu tiên của huyện Mỹ Đức, kết hợp nhiều trò đƣợc Ty Văn hóa Hà Đông duyệt đi phục vụ các huyện trong tỉnh.",
  // "Trò Tây đi bắt gà của nhân dân khi nhân dân đi tản cƣ vắng, bị dân quân gài mìn muỗi, tây bị chết.",
  // "Tây bắt Trâu bị Trâu húc chết.",
  // "Anh bộ đội về phục viên làm đội trƣởng.",
  // "Tròhụihọsốđề,bƣơng,tre,gỗ,nứa.",
  // "Chống mê tín dị đoan.",
  // "Anh ba khỏe đào giếng.",
  // "ChịNghĩa,anhTìnhdânsố.",
  // "Thầy bói mù bảo núi Ba Vì không cao.",
  // "Họ Bành vỡ mộng (tiết mục này 6 huy chƣơng vàng, 2 huy chƣơng bạc), tiết mục diễn 1 chƣơng trình là 1 giờ.",
  // "Hổđòixemtríkhônngƣời.",
  // "Nữ tƣớng Trƣng Vƣơng đến thăm đơn vị kỵ mã của Lê Ngọc Chinh.",
  // "TuồngSơnHậunhiềuđoạn.",
  // "Dê, gấu qua cầu.",
  // "Thánh Gióng đánh giặc Ân.",
  // "Quân dân Mỹ Đức bắn rơi máy bay Mỹ.",
  // "Em bé đấu với đôi lân.",
  // "Múa rồng mừng ngày hội.",
  // "NữdâncôngđấuquyềnanhvớiĐờ-Cát",
  // "Đốc-tờ,thầyLývớicôĐào(chốngtiêucực).",
  // "Nữ dân công phục vụ Điện Biên tấu một bài nhị giải phóng Điện Biên.",
  // "Quách A đánh giặc Đông Hán.",
  // "Chém Liễu Thăng ở thung lũng Chi Lăng bỏ đầu vào hộp gửi đến Đông Quan cho gã Vƣơng Thông Xanh nhƣ mắt chẫu.",
  // "Quanxửkiện.",
  // "ĐàoTamXuânloạntrào",
  // "LýThƣờngKiệtđọcbàihịch",
  // "Lá cờ thêu 6 chữ vàng",
  // "Bàitấucó3cảnhSầmNghiĐốngtreocổởgòĐốngĐa,ÔMãNhi chui cọc Bạch Đằng, Thoát Hoan chui qua ống đồng chạy về nƣớc (tiết mục huy chƣơng vàng tại xã Quảng Bị, huyện Chƣơng Mỹ).",
  // "Năm 2000 vua Lý Công Uẩn cƣỡi trên 1 con rồng rời Hoa Lƣ về Thăng Long, nhân dân Thủ đô đón tiếp. Trò này đã đƣợc quốc tế nhân tại Viện bảo tàng về để triển lãm của quốc tế. Đây là bản sơ lƣợc từ năm 1956 của chi hội múa rối Tế Tiêu cho đến 1000 năm Thăng Long, Hà Nội. Dàn dựng vào tạo hình: Nghệ nhân Phạm Văn Bể",
];

async function getPlayList() {
  const response = await fetch("http://localhost:3000/", {
    method: "GET",
  });

  const data = await response.json();
  console.log(data);
  return data;
}

async function createPlay() {
  const dataForm = { name: playName.value };
  console.log(dataForm);

  const response = await fetch("http://localhost:3000/play", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataForm),
  });

  console.log(response);
}

const data = ref();
onMounted(async () => {
  data.value = await getPlayList();
});

const handleSubmit = () => {
  createPlay();
  console.log("submit");
};

watch(
  () => playName.value,
  () => {
    console.log(playName.value);
  }
);
</script>

<template>
  <div class="home w-full bg-white">
    <div class="relative">
      <div
        class="max-w-[1200px] px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col"
      >
        <h1 class="text-3xl font-semibold p-4 border-0 border-solid border-grey-700 border-b-4 mb-6">Vở diễn nổi bật</h1>
        <div class="flex-wrap justify-between items-center flex gap-y-6">
          <Card v-for="play in plays" hoverable style="width: 300px">
            <template #cover>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </template>
            <Card.Meta>
              <template #title>
                <h1 class="text-xl">
                  {{ play }}
                </h1>
              </template>
            </Card.Meta>
          </Card>
        </div>
        <h1 class="text-3xl font-semibold p-4 border-0 border-solid border-grey-700 border-b-4 mb-6 mt-8">Vở diễn về lịch sử</h1>
        <div class="flex-wrap justify-between items-center flex gap-y-6">
          <Card v-for="play in plays" hoverable style="width: 300px">
            <template #cover>
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            </template>
            <Card.Meta>
              <template #title>
                <h1 class="text-xl">
                  {{ play }}
                </h1>
              </template>
            </Card.Meta>
          </Card>
        </div>
      </div>
      <Sider class="absolute right-0 top-0 w-[20%]"></Sider>
    </div>
  </div>
</template>
