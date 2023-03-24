/* eslint-disable max-len */
import { Timeline } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { createMarkUp } from '../overview/components/ShortPost';

const histories = {
  '1945': [
    'Giai đoạn trước năm 1945',
    'Hình thành từ nhu cầu phục vụ nhân dân làng xã vào các dịp hội hè, lễ chạp, phường Rối Tế Tiêu diễn cả rối cạn lẫn rối nước. Rối cạn Tế Tiêu ra đời trong điều kiện trang thiết bị không có. Vào dịp Tết, không thể không diễn cho dân xem, chỉ còn cách đưa rối lên cạn. Từ đó, phường thường xuyên diễn rối cạn. Điều này khá đặc biệt đối với một làng rối ở đồng bằng.  \nSau một thời gian phường rối tan rã do nhiều nguyên nhân khách quan, vào năm 1927, cụ Lê Năng Nhượng đã tổ chức lại phường rối. Các thành viên lúc đó bao gồm những người họ Lê như: Lê Văn Dụy, Lê Văn Lao, Lê Năng Tiệp, Lê Văn Tâm. Các nghệ nhân đã tập hợp lại cùng tạo hình con rối, luyện tập và trình diễn các trò múa rối cạn và rối nước, leo dây, tung dao và làm ảo thuật. Trong đó, các trò rối cạn được người dân yêu thích nhất gồm có các trò như: Múa rồng, Đấu vật, Đánh đu, Quan Vũ trảm lục tướng, Kết nghĩa vườn đào v.v.  \nĐến năm 1930, do sưu cao thuế nặng, nạn đói xảy ra liên miên, cuộc sống vô cùng khó khăn, vất vả, một số nghệ nhân đã phải bỏ làng, bỏ con rối đi mưu sinh ở nơi khác, chỉ còn một mình nghệ nhân Lê Năng Nhượng mang theo một số con rối cạn xuống Hải Phòng biểu diễn cho các làng và các trường học để duy trì nghề và kiếm sống qua ngày.',
  ],
  '1986': [
    'Giai đoạn trước năm 1986',
    'Năm 1945, cách mạng tháng Tám thành công, đất nước giành được độc lập, nhưng không lâu sau đó thực dân Pháp quay trở lại xâm lược, cuộc kháng chiến chống Pháp lâu dài và gian khổ của nhân dân ta lại nổ ra  \nNăm 1948, khi giặc Pháp tràn qua xâm chiếm, đóng bốt tại làng Tế Tiêu, các gia đình phải tản cư, phường rối Tế Tiêu bị tan vỡ hoàn toàn. Các nghệ nhân rối phải xếp lại đam mê của họ, tham gia vào cuộc chiến đấu chống kẻ thù chung của dân tộc.  \nHòa bình lập lại năm 1954, miền Bắc được hoàn toàn giải phóng. Hoạt động văn hóa - văn nghệ được Nhà nước Dân chủ Cộng hòa chú ý phát triển. Đoàn Văn công Nhân dân Tổng hợp được thành lập vào năm 1952, bao gồm các tổ: ca múa, chèo và kịch nói được mở rộng. Tháng 7 năm 1956, cơ sở múa rối chuyên nghiệp đầu tiên trong Đoàn Văn công Nhân dân Trung ương ra đời. Đồng thời, nghệ thuật múa rối dân gian tiếp tục được khuyến khích phục hồi, các liên hoan múa rối thuộc phong trào văn nghệ quần chúng liên tục được tổ chức và lớn mạnh cả về lượng và chất (như các Liên hoan Múa rối năm 1959, 1961, 1962, 1963, 1964).  \nSau khi đi dân công phục vụ Chiến dịch Điện Biên Phủ trở về làng, ông Phạm Văn Bể đã tới gặp nghệ nhân Lê Năng Nhượng (dân làng thường gọi là cụ Ba Nhượng), một nghệ nhân còn sống của phường rối để xin theo học nghề. Sau một thời gian theo học về cách tạo hình và các tích trò biểu diễn, ông được nghệ nhân Ba Nhượng truyền nghề vì thấy ông có năng khiếu và tâm huyết với nghề rối.  \nVới sự nỗ lực của nghệ nhân Phạm Văn Bể và nghệ nhân Lê Năng Nhượng, từ năm 1956 cho đến các năm tiếp theo của thập niên 1960, phường rối Tế Tiêu đã hưng thịnh trở lại. Vào năm 1956 - năm đầu tiên hòa bình lập lại, Ủy Ban xã Đại Nghĩa cho phép ông Phạm Văn Bể thành lập Phường Rối cạn Tế Tiêu, do ông làm trưởng phường và cụ Lê Năng Nhượng làm cố vấn. Với sự chỉ dẫn của cụ Lê Năng Nhượng, nghệ nhân Phạm Văn Bể đã tập hợp được 12 diễn viên cho Phường Rối cạn Tế Tiêu, bao gồm những người làng có tâm huyết với nghệ thuật múa rối. Đó là các ông, bà: Nguyễn Tiết Nhiễu, Lê Sơn Tùng, Nguyễn Thế Lừng, Nguyễn Thế Bảo, Nguyễn Thị Tâm, Nguyễn Thị Chín, Phạm Văn Chuông và một số anh chị em thanh niên trong làng. Cùng với thầy Ba Nhượng, nghệ nhân Phạm Văn Bể đã tạo hình các con rối để diễn theo tích cổ và sáng tạo nhiều con rối mới phản ánh hoạt động sản xuất, chiến đấu đương thời của quân dân huyện nhà. Ông vừa tham gia công tác chính quyền, xã hội, vừa làm nghệ thuật. Với trình độ văn hóa chỉ hai tháng “bình dân học vụ” nhưng ông chịu khó tìm tòi, nghiên cứu, phục hồi những con rối cổ của phường rối xưa, đồng thời tiếp tục đổi mới, cải tiến để sáng tạo nên nhiều con rối mới với các trò và tích trò đa dạng. Thời kỳ này diễn ra công cuộc sửa sai, nhiều phong trào do huyện phát động lôi cuốn đông đảo nông dân, nhất là phong trào “Ba ngọn cờ hồng”. Nhiều trò rối cạn được Phường biểu diễn được nhân dân đón nhận nồng nhiệt và yêu thích như các trò: “35 ngày đêm quân và dân huyện Mỹ Đức khói lửa” (hay còn có tên gọi là “Chiến dịch Mỹ - đức” - phản ánh cuộc kháng chiến chống Pháp ở địa phương), “Bái công khởi nghĩa” “Xây dựng tổ đổi công hỗ trợ nhau sản xuất”, “Bình dân học vụ”, “Tát nước chống hạn”, “Diễn tuồng trích đoạn Tam Quốc, Sơn Hậu”, “Đào viên kết nghĩa” v.v. Phường Rối cạn Tế Tiêu đã tích cực góp phần phục vụ nhân dân, xây dựng quê hương, 10 | Lý Lịch di sản văn hóa phi vật thể “Rối cạn Tế Tiêu” - thị trấn Đại Nghĩa, huyện Mỹ Đức, thành phố Hà Nội động viên tinh thần trong lao động sản xuất, đem lại niềm vui ấm áp sau những ngày gian khổ.',
  ],
};

export default function History() {
  const [current, setCurrent] = useState<string>('1945');

  return (
    <div>
      <div className="w-full absolute">
        {histories[current]?.map((item, index) => {
          return (
            <div className="" key={index}>
              {!index ? (
                <h1 className="text-2xl max-w-[720px] ml-auto mr-auto w-full text-center my-8">{item}</h1>
              ) : (
                <p className="max-w-[720px] text-lg leading-10 ml-auto mr-auto w-full text-left mb-6">
                  <div dangerouslySetInnerHTML={createMarkUp(item)}></div>
                </p>
              )}
            </div>
          );
        })}
        <div className="pt-32 pr-32 timeline fixed right-0 top-0">
          <Timeline className="z-index-200" mode="left">
            <Timeline.Item>Lịch sử hình thành</Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined className="text-[16px]" />}
              className="cursor-pointer"
              onClick={() => setCurrent('1945')}
            >
              Trước 1945
            </Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined className="text-[16px]" />}
              className="cursor-pointer"
              onClick={() => setCurrent('1986')}
            >
              1945 đến 1986
            </Timeline.Item>
            <Timeline.Item
              dot={<ClockCircleOutlined className="text-[16px]" />}
              className="cursor-pointer"
              // onClick={() => setCurrent('2023')}
            >
              1986 đến nay
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    </div>
  );
}
