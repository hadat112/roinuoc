/* eslint-disable max-len */
import { Button, Timeline } from 'antd';
import { ClockCircleOutlined, ClockCircleFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import cx from 'classnames';
import { FaRegHandPointRight } from 'react-icons/fa';
import GameModal from './components/GameModal';

const histories = {
  '1945': [
    {
      year: '1927',
      content:
        'Cụ Lê Năng Nhượng đã tổ chức lại phường rối. Các thành viên lúc đó bao gồm những người họ Lê như: Lê Văn Dụy, Lê Văn Lao, Lê Năng Tiệp, Lê Văn Tâm. Các nghệ nhân đã tập hợp lại cùng tạo hình con rối, luyện tập và trình diễn các trò múa rối cạn và rối nước, leo dây, tung dao và làm ảo thuật. Trong đó, các trò rối cạn được người dân yêu thích nhất gồm có các trò như: Múa rồng, Đấu vật, Đánh đu, Quan Vũ trảm lục tướng, Kết nghĩa vườn đào v.v.',
    },
    {
      year: '1930',
      content:
        'Dưu cao thuế nặng, nạn đói xảy ra liên miên, cuộc sống vô cùng khó khăn, vất vả, một số nghệ nhân đã phải bỏ làng, bỏ con rối đi mưu sinh ở nơi khác, chỉ còn một mình nghệ nhân Lê Năng Nhượng mang theo một số con rối cạn xuống Hải Phòng biểu diễn cho các làng và các trường học để duy trì nghề và kiếm sống qua ngày',
    },
  ],
  '1986': [
    {
      year: '1948',
      content:
        'Khi giặc Pháp tràn qua xâm chiếm, đóng bốt tại làng Tế Tiêu, các gia đình phải tản cư, phường rối Tế Tiêu bị tan vỡ hoàn toàn. Các nghệ nhân rối phải xếp lại đam mê của họ, tham gia vào cuộc chiến đấu chống kẻ thù chung của dân tộc.',
    },
    {
      year: '1952',
      content:
        'Đoàn Văn công Nhân dân Tổng hợp được thành lập bao gồm các tổ: ca múa, chèo và kịch nói được mở rộng',
    },
    {
      year: '1956',
      content:
        'Cơ sở múa rối chuyên nghiệp đầu tiên trong Đoàn Văn công Nhân dân Trung ương ra đời. Đồng thời, nghệ thuật múa rối dân gian tiếp tục được khuyến khích phục hồi, các liên hoan múa rối thuộc phong trào văn nghệ quần chúng liên tục được tổ chức và lớn mạnh cả về lượng và chất.',
    },
    {
      year: '1960',
      content:
        'Ủy Ban xã Đại Nghĩa cho phép ông Phạm Văn Bể thành lập Phường Rối cạn Tế Tiêu, do ông làm trưởng phường và cụ Lê Năng Nhượng làm cố vấn. Với sự chỉ dẫn của cụ Lê Năng Nhượng, nghệ nhân Phạm Văn Bể đã tập hợp được 12 diễn viên cho Phường Rối cạn Tế Tiêu, bao gồm những người làng có tâm huyết với nghệ thuật múa rối. Đó là các ông, bà: Nguyễn Tiết Nhiễu, Lê Sơn Tùng, Nguyễn Thế Lừng, Nguyễn Thế Bảo, Nguyễn Thị Tâm, Nguyễn Thị Chín, Phạm Văn Chuông và một số anh chị em thanh niên trong làng. Cùng với thầy Ba Nhượng, nghệ nhân Phạm Văn Bể đã tạo hình các con rối để diễn theo tích cổ và sáng tạo nhiều con rối mới phản ánh hoạt động sản xuất, chiến đấu đương thời của quân dân huyện nhà.',
    },
    {
      year: '1959',
      content:
        'Phường đi biểu diễn phục vụ Triển lãm Thủ công nghiệp tại thị xã Hà Đông và nhận được Bằng khen của Ủy ban Nhân dân tỉnh Hà Tây. Cùng năm này, Phường cũng biểu diễn giao lưu với Nhà hát múa rối Trung ương tại thôn Tế Tiêu.',
    },
    {
      year: '1961',
      content:
        'Phường tổ chức lớp truyền dạy Rối cạn cho một đội thiếu nhi gồm: Phạm Văn Đăng, Phạm Văn Sơn, Nguyễn Văn Điều, Lê Thị Dem, Lê Thị Tràn... đưa các học viên này tham dự Liên hoan Múa rối tại Hà Nội và được Cục Nghệ thuật tặng giấy khen',
    },
    {
      year: '1962',
      content: 'Phường tham dự Hội diễn Nghệ thuật toàn miền Bắc.',
    },
    {
      year: '1963',
      content:
        'Phường đi dự Hội nghị Liên hoan Múa rối Việt Nam lần thứ 4 được Bộ Văn hóa cấp bằng khen cho tiết mục rối cạn “Bái công khởi nghĩa”',
    },
    {
      year: '1964',
      content:
        'Phường rối Tế Tiêu được Bộ Văn hóa, Vụ Nghệ thuật tặng Giấy khen trong Đại hội Liên hoan Múa rối Miền Bắc lần thứ II',
    },
    {
      year: '1971',
      content:
        'Nghệ nhân Phạm Văn Bể được Bộ Văn hóa tặng Bằng khen về thành tích góp phần phát triển ngành và Huy chương Kỷ niệm 15 năm hoạt động ngành Văn hóa (1955-1970)',
    },
    {
      year: '1975',
      content:
        'Ngày Tổ quốc thống nhất năm 1975, bom đạn ngừng rơi, người trong phường rối Tế Tiêu kẻ mất người còn, tản mát khắp nơi. Ai trở về làng thì ngổn ngang chuyện “tái thiết” hậu chiến, phường rối không tập hợp lại được.',
    },
  ],
  '2023': [
    {
      year: '1986',
      content:
        'Nghệ nhân Phạm Văn Bể được Sở Thông tin Hà Sơn Bình trao tặng Huy chương vàng cho tiết mục rối do ông dàn dựng và đạo diễn tại Hội diễn nghệ thuật quần chúng',
    },
    {
      year: '1990',
      content:
        'Nghệ nhân Phạm Văn Bể được Sở Văn hóa Thông tin tỉnh Hà Sơn Bình trao tặng huy chương vàng cho tiết mục “Giặc đến nhà cả nhà cùng đánh” trong Hội thi Thông tin Cổ động và Hội diễn Nghệ thuật Quần chúng toàn tỉnh',
    },
    {
      year: '1991',
      content: 'phường tham gia Hội du lịch làng nghề truyền thống Hà Tây được tặng một giấy khen',
    },
    {
      year: '1994',
      content:
        'Phường tham gia Liên hoan Rối cạn Toàn quốc tại Hà Nội với hai tiết mục: “Chém tá” và “Trí khôn ở đâu”, được trao tặng hai huy chương bạc.',
    },
    {
      year: '1995',
      content:
        'Phường Rối cạn Tế Tiêu đã gia nhập và trở thành một Chi hội trong Liên chi hội Múa rối UNIMA Việt Nam',
    },
    {
      year: '2000',
      content:
        'Phường tham dự Liên hoan Múa Rối cạn Quốc tế chào mừng 990 năm Thăng Long - Hà Nội tại Bảo tàng Dân tộc học Việt Nam và được tặng bằng khen',
    },
    {
      year: '2001',
      content:
        'Phường đi biểu diễn tại Liên hoan Múa rối Truyền thống Việt Nam lần thứ nhất ngày 15 tháng 4 năm 2001, nhận được bằng khen của Hội Nghệ sĩ Việt Nam, Trung tâm UNIMA Việt Nam.',
    },
    {
      year: '2003',
      content:
        'Phường rối tham gia Hội du lịch làng nghề thủ công Hà Tây chào Seagames 22 và được Tổng cục Du lịch tặng bằng khen.',
    },
    {
      year: '2004',
      content:
        'Phường rối tham gia Liên hoan múa rối tổ chức ở Festival Huế do Cục Nghệ Thuật Biểu diễn tổ chức và nhận được một bằng khen.',
    },
    {
      year: '2005',
      content:
        'Phường rối được Ban Chấp hành Hiệp hội Làng nghề Việt Nam tặng bằng khen do đã có thành tích trưng bày, biểu diễn Nghệ thuật Rối Tế Tiêu tại “Ngày hội người cao tuổi với phát triển làng nghề Việt Nam”.',
    },
    {
      year: '2008',
      content:
        'Ban chấp hành Hiệp Hội Làng nghề Việt Nam phong tặng ông Phạm Văn Bể danh hiệu Nghệ nhân Làng nghề Việt Nam.',
    },
    {
      year: '2011',
      content:
        'Phường đã tham dự Liên hoan Múa rối tại Hải Dương và đạt được thành tích xuất sắc (với vở Sơn Hậu, trích đoạn Chém Tá)',
    },
    {
      year: '2014',
      content:
        'Trong chương trình “Mùa xuân tôn vinh văn hóa dân tộc 2014”, Ban Tổ chức (gồm: Hội Nhà báo Việt Nam, Hiệp hội Làng nghề Việt Nam, Hiệp hội Quảng cáo Việt Nam, Hiệp hội Doanh nghiệp Nhỏ và Vừa Việt Nam) đã trao bằng vinh danh nghệ nhân Phạm Văn Bể vì đã có những đóng góp xuất sắc vào thành công của chương trình.',
    },
    {
      year: '2016',
      content:
        'Phường tham gia Liên hoan Múa rối do thành phố Hà Nội tổ chức tại huyện Đông Anh, đạt giải Ba toàn đoàn và giải Đặc Biệt về tạo hình quân rối.',
    },
    {
      year: '2017',
      content:
        'Phường được Bảo tàng tỉnh Kon Tum mời tham gia biểu diễn trong chương trình Sắc Xuân Đinh Dậu, phục vụ cho đồng bào Tây Nguyên. Phường đã nhận được giấy khen và thư cám ơn của Giám đốc Sở Văn hóa, Thể thao và Du lịch tỉnh Kon Tum.',
    },
    {
      year: '2018',
      content:
        'Nghệ nhân Phạm Công Bằng (con trai nghệ nhân Phạm Văn Bể) được Ban chấp hành Đảng bộ Thành phố Hà Nội trao tặng Bằng khen (Quyết định số 3748 QQĐ/TƯ) vì đã có thành tích xuất sắc trong việc triển khai, thực hiện Nghị quyết số 23 – NQ/TW ngày 16/6/2008 của Bộ Chính trị (khóa X) về “Tiếp tục xây dựng và phát triển văn học, nghệ thuật trong thời kỳ mới”.',
    },
  ],
};

export default function History() {
  const [current] = useState<string>('1945');
  const [activeYear, setActiveYear] = useState<number>(0);
  const [openGame, setOpenGame] = useState<boolean>(false);

  useEffect(() => {
    setActiveYear(0);
  }, [current]);
  return (
    <div>
      <div className="w-full relative">
        <h1 className="text-center mx-auto mt-16">Lịch sử phát triển của rối cạn Tế Tiêu</h1>
        <div className="flex mx-auto gap-6 flex-wrap justify-center mt-14">
          <img
            className="flex-1 max-w-[240px]"
            src="https://lh3.google.com/u/0/d/1oj6jL3M_igAGYHmraN74DDRrzJl2D-q-=w2880-h1192-iv1"
          />
          <img
            className="flex-1 max-w-[240px]"
            src="https://lh3.google.com/u/0/d/16VXsTHUKFB0RJc3kouzAEPTIegCfSR48=w2880-h1192-iv1"
          />
          <img
            className="flex-1 max-w-[240px]"
            src="https://lh3.google.com/u/0/d/1OWFixLqSHg_eCw8cbr11deIOXJTXt7IX=w2880-h1192-iv1"
          />
          <img
            className="flex-1 max-w-[240px]"
            src="https://lh3.google.com/u/0/d/1e-_0z-zlrnJfrJIoqhjVsi-j0yHE_17C=w2880-h1192-iv1"
          />
        </div>
        <div className="flex max-w-[70%] mx-auto mt-8">
          <div className="flex flex-col w-[20%] border border-0 border-solid border-r border-grey-100 p-4">
            {histories?.[current]?.map((i, index) => {
              return (
                <div
                  key={index}
                  className={cx('flex items-center relative border-none cursor-pointer px-4 py-3', {
                    'text-yellow': activeYear === index,
                  })}
                  onClick={() => setActiveYear(index)}
                >
                  {activeYear === index ? (
                    <FaRegHandPointRight className="absolute -left-6 text-2xl" />
                  ) : null}{' '}
                  <span className="font-[900] text-2xl">{i?.year}</span>
                </div>
              );
            })}
          </div>
          <div className="flex-1 text-lg p-4 self-start">
            <p>{histories?.[current]?.[activeYear]?.content}</p>
          </div>
          <div className="p-6 timeline">
            <Timeline className="z-index-200" mode="left">
              <Timeline.Item>Lịch sử hình thành</Timeline.Item>
              <Timeline.Item
                dot={
                  current === '1945' ? (
                    <ClockCircleFilled className="text-[16px] text-yellow" />
                  ) : (
                    <ClockCircleOutlined className="text-[16px]" />
                  )
                }
                className="cursor-pointer"
                // onClick={() => setCurrent('1945')}
              >
                Trước 1945
              </Timeline.Item>
              <Timeline.Item
                dot={
                  current === '1986' ? (
                    <ClockCircleFilled className="text-[16px] text-yellow" />
                  ) : (
                    <ClockCircleOutlined className="text-[16px]" />
                  )
                }
                className="cursor-pointer"
                // onClick={() => setCurrent('1986')}
              >
                1945 đến 1986
              </Timeline.Item>
              <Timeline.Item
                dot={
                  current === '2023' ? (
                    <ClockCircleFilled className="text-[16px] text-yellow" />
                  ) : (
                    <ClockCircleOutlined className="text-[16px]" />
                  )
                }
                className="cursor-pointer"
                // onClick={() => setCurrent('2023')}
              >
                1986 đến nay
              </Timeline.Item>
            </Timeline>
            <Button onClick={() => setOpenGame(true)} className="mt-4">
              Trò chơi
            </Button>
          </div>
        </div>
      </div>
      <GameModal open={openGame} onCancel={() => setOpenGame(false)} />
    </div>
  );
}
