import { Card } from 'antd';
import Sider from './overview/components/Sider';
// import { useEffect, useState } from 'react';

const plays = [
  {
    name: 'Trò xay lúa, giã gạo, cày, bừa.',
    src: '/xaylua.png',
  },
  {
    name: 'Thực hiện học bình dân học vụ của Bác Hồ kêu gọi. 3. Tổ đổi công vui sản xuất',
    src: '@/assets/binhdan.png',
  },
  {
    name: 'Thợ cấy hát ví với thợ cày',
    src: '../assets/thocay.png',
  },
  {
    name: 'Thạch Sanh thuận lòng chém Mãng Xà Vƣơng',
    src: '@/assets/thachsanh.png',
  },
  {
    name: 'Trí khôn của ta đây',
    src: '@/assets/trikhon.png',
  },
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

export default function Plays() {
  // const [playList, setPlayList] = useState();

  // async function getPlayList() {
  //   const response = await fetch('http://localhost:3000/', {
  //     method: 'GET',
  //   });

  //   const data = await response.json();
  //   setPlayList(data);
  // }

  // async function createPlay() {
  //   const dataForm = { name: '' };
  //   await fetch('http://localhost:3000/play', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(dataForm),
  //   });
  // }

  // useEffect(() => {
  //   getPlayList();
  // }, []);

  // const handleSubmit = () => {
  //   createPlay();
  // };

  return (
    <>
      <div className="home w-full bg-white">
        <div className="relative">
          <div className="max-w-[1200px] px-16 pt-8 pb-8 mx-auto mt-8 flex flex-col">
            <h1 className="text-3xl font-semibold p-4 border-0 border-solid border-grey-700 border-b-4 mb-6">
              Vở diễn nổi bật
            </h1>
            <div className="flex-wrap justify-between items-center flex gap-y-6">
              <Card hoverable cover={<img alt="example" src="../assets/xaylua.png" />}>
                <Card.Meta title={<h1 className="text-xl">Trò xay lúa, giã gạo, cày, bừa.</h1>}></Card.Meta>
              </Card>
            </div>
            <h1 className="text-3xl font-semibold p-4 border-0 border-solid border-grey-700 border-b-4 mb-6 mt-8">
              Vở diễn về lịch sử
            </h1>
            <div className="flex-wrap justify-between items-center flex gap-y-6">
              {plays.map((play, index) => {
                return (
                  <Card
                    key={index}
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                  >
                    <Card.Meta title={<h1 className="text-xl">{play.name}</h1>}></Card.Meta>
                  </Card>
                );
              })}
            </div>
          </div>
          <Sider></Sider>
        </div>
      </div>
    </>
  );
}
