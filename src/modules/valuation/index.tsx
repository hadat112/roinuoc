import { Tabs } from 'antd';
import { useState } from 'react';

export default function Valuation() {
  const [activeKey, setActiveKey] = useState('1');

  const giatri = {
    lichsu:
      'Là một loại hình nghệ thuật cổ truyền vốn ăn sâu và bám rễ trong đời sống của dân tộc, rối cạn Tế Tiêu mang đậm giá trị lịch sử phản ánh đời sống văn hóa, xã hội liên quan qua các thời kỳ. Sân khấu rối cạn trước hết là những tác phẩm nghệ thuật nhỏ đơn sơ ca ngợi cái thú làm ruộng, câu cá, chăn trâu, dệt cửi, xay thóc; những thú vui hội hè, đình đám như: đánh đu, múa lân, múa tứ linh. Qua những trò rối này, người xem như được trở về với không gian làng quê, với cuộc sống nông thôn bình dị, êm đềm. Ở đó là hình ảnh những lão nông phúc hậu, bác nông dân dắt trâu ra đồng, chàng trai xay lúa vất vả mà khỏe khoắn, cô thôn nữ duyên dáng trong ngày hội làng, thợ cày, thợ cấy thoăn thoắt làm việc… Bóng dáng của hoạt động sản xuất, của nền văn minh nông nghiệp lúa nước được ghi lại trong các hình tượng rối vừa bình dị, vừa tươi nguyên sức sống khỏe khoắn của người lao động. Với truyền thống làm lúa nước và sống dựa vào thiên nhiên nên các cư dân nông nghiệp đã hình thành nên ý thức tôn trọng, sống hòa hợp, thuận với tự nhiên. Về nguyên tắc tổ chức cộng đồng, con người nông nghiệp ưa tổ chức xã hội theo nguyên tắc trọng tình cảm. Hàng xóm nương tựa vào nhau “hàng xóm láng giềng tắt lửa tối đèn có nhau”, như câu chuyện trong trò diễn “Xóm chài nhỏ biết đoàn kết” của Phường rối cạn Tế Tiêu về một cuộc sống hòa thuận, lấy tình nghĩa làm đầu. Nhiều trò rối tái hiện cảnh sinh hoạt, lao động giúp đỡ nhau trong lúc khó khăn, hoạn nạn đã thể hiện sinh động truyền thống đoàn kết,',
    giaoduc:
      'Rối cạn Tế Tiêu đem đến giá trị giáo dục, thẩm mỹ, giải trí cho nhiều lứa tuổi, đặc biệt là lớp tuổi thiếu niên, nhi đồng. Múa rối cạn Tế Tiêu phục vụ trong các dịp lễ hội truyền thống của làng thường không có doanh thu. Phường tự bỏ tiền dựng các trò, tích trò rối phục vụ bà con làng xóm, hay vào các dịp lễ hội, với mục đích trước để thờ Thần, thờ Thánh, sau để phục vụ nhân dân, hướng đến những ước nguyện tốt đẹp cho mùa màng tươi tốt, cuộc sống yên bình. Là một loại hình nghệ thuật dân gian truyền thống của người lao động, phản ánh tâm tư, tình cảm của cộng đồng nên múa rối cạn đã trở thành nguồn giải trí, vui chơi, sinh hoạt tinh thần, giáo dục thẩm mỹ cho bà con. Nhất là trong những ngày hội làng, đình đám, những sự kiện trọng đại của cộng đồng thì múa rối cạn là hoạt động không thể thiếu. Khán giả đến xem múa rối, cả người lớn, trẻ em đều với tâm trạng náo nức, vui tươi vì được thưởng thức cái hay, cái lạ của trò rối, ban đầu là giải trí, rồi qua đó khán giả tự tiếp nhận và thẩm thấu những giá trị thẩm mỹ, giáo dục phù hợp với nhận thức của mình. Đáng chú ý là yếu tố giải trí và thưởng thức trong nghệ thuật rối cạn được kết hợp hài hòa với tính giáo dục. Các ẩn ý đạo đức của cha ông được truyền tải trong rối cạn thường bình dị, nhẹ nhàng và sinh động. Vì vậy, trong truyền thống cũng như trong thời hiện đại, nghệ thuật Rối cạn Tế Tiêu đã góp phần phục vụ đắc lực cho công cuộc sản xuất, chiến đấu và xây dựng cuộc sống của nhân dân, đặc biệt có sức thu hút, giáo dục đối với lứa tuổi thanh thiếu nhi. Vì vậy, nhiều nhà nghiên cứu đều thống nhất rằng: nghệ thuật Rối chính là một phương tiện giáo dục thẩm mỹ sắc bén và hấp dẫn cho lứa tuổi thiếu niên, nhi đồng. Do những đặc trưng riêng biệt, sân khấu múa rối cạn có khả năng khai thác nhiều loại đề tài: cổ tích, ngụ ngôn, thần thoại, huyền thoại, khoa học viễn tưởng, hiện đại. Nhiều vở múa rối đã gieo vào tâm hồn trẻ thơ những giá trị nhân bản, từ tình yêu kính ông bà, cha mẹ, đến tình yêu quê hương, đất nước và góp phần khơi gợi cho các em những ước mơ, khát vọng đẹp đẽ.',
    vanhoa:
      'Múa rối cạn Tế Tiêu đã tạo dựng nhiều giá trị văn hóa đặc sắc của dân tộc về phương thức biểu diễn và nghệ thuật biểu diễn. Nghệ thuật Rối cạn mang đặc tính của sự hồn nhiên, cụ thể. Đó là ngôn ngữ cuộc sống thường ngày của những người nông dân, tuy bình dị song lại mang vẻ đẹp tươi nguyên sức sống khỏe khoắn của người lao động. Ngoài ra, con rối nhỏ bé nhưng lại có tính tượng trưng, khoa trương, cách điệu, với sự tương phản rõ rệt như màu trắng và màu đen, giữa cái tốt và cái xấu, cái lành và cái ác. Ở múa rối có nhân vật dù to nhưng phải thu nhỏ lại như con voi, có nhân vật nhỏ phải làm to ra như con kiến…khi tạo hình và đặc điểm này còn thấy cả trong diễn xuất. Con rối không quen giải thích cuộc sống, trình bày cuộc sống với người xem, mọi hành động đều chắt lọc từ hiện thực, được phóng đại lên cho người xem dễ thấy. Vì vậy, con rối thường không thích hợp với những vai kịch có nhiều diễn biến tâm lý phức tạp, nhiều xúc cảm sôi nổi, sâu sắc. Khả năng diễn đạt của nó là ở các động tác ở tay, chân, đầu và nét mặt luôn luôn cố định. Sự cố định của nét mặt làm cho con rối có vẻ nghiêm trang bình thản trong mọi hoàn cảnh nhưng cũng chính vì vậy mà ở một phương diện nào đó, nó có sức thuyết phục.',
  };
  const handleChange = (value) => {
    setActiveKey(value);
  };

  return (
    <>
      <div className="max-w-[960px] text-left mx-auto text-lg leading-10 my-16 bg-white px-8 py-4">
        <Tabs activeKey={activeKey} onChange={handleChange}>
          <Tabs.TabPane key="1" tab="Lịch sử">
            <p className="Tabs.TabPane">{giatri.lichsu}</p>
          </Tabs.TabPane>
          <Tabs.TabPane key="2" tab="Giáo dục" force-render>
            <p className="Tabs.TabPane">{giatri.giaoduc}</p>
          </Tabs.TabPane>
          <Tabs.TabPane key="3" tab="Văn hoá">
            <p className="Tabs.TabPane">{giatri.vanhoa}</p>
          </Tabs.TabPane>
          <Tabs.TabPane key="4" tab="Khoa học">
            <p className="Tabs.TabPane">{giatri.vanhoa}</p>
          </Tabs.TabPane>
          <Tabs.TabPane key="5" tab="Kinh tế, du lịch">
            <p className="Tabs.TabPane">{giatri.vanhoa}</p>
          </Tabs.TabPane>
          <Tabs.TabPane key="6" tab="Tính cộng đồng">
            <p className="Tabs.TabPane">{giatri.vanhoa}</p>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}
