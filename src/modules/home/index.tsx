import { Button, Carousel } from 'antd';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="home w-full bg-bg-body bg-[#ECEFF1]">
      <Carousel>
        <div>
          <img
            className="block w-[100%] h-[520px] min-h-[520px] max-w-full object-cover"
            src="https://lh3.google.com/u/0/d/1Ikd8vPkIM1gEcaxgo88aa4uJJFCGhbwr=w2880-h1642-iv1"
            alt=""
          />
        </div>
        <div>
          <img
            className="block w-[100%] h-[520px] min-h-[520px] max-w-full object-cover"
            src="https://lh3.google.com/u/0/d/1y4FGcotLnddFi5dW1kIxcRWlJqzxHO-3=w2880-h1192-iv1"
            alt=""
          />
        </div>
        <div>
          <img
            className="block w-[100%] h-[520px] min-h-[520px] max-w-full object-cover"
            src="https://lh3.google.com/u/0/d/1VVFeC2YpgIu34NAjyY7k2tR0WjBLwT2W=w2880-h1192-iv1"
            alt=""
          />
        </div>
        <div>
          <img
            className="block w-[100%] h-[520px] min-h-[520px] max-w-full object-cover"
            src="https://lh3.google.com/u/0/d/1Ikd8vPkIM1gEcaxgo88aa4uJJFCGhbwr=w2880-h1642-iv1"
            alt=""
          />
        </div>
      </Carousel>
      <div className="font-STXinwei w-[70%] mx-auto mt-12 p-4 bg-white rounded-xl">
        <h1
          className="font-[500] text-2xl text-[#8B4513] relative leading-10"
          style={{ fontFamily: 'Tinos' }}
        >
          <RiDoubleQuotesL className=" text-3xl mr-2" />
          Rối cạn Tế Tiêu là một loại hình nghệ thuật sân khấu dân gian truyền thống của Việt Nam, nổi tiếng
          với các màn múa rối đẹp mắt và kịch tính. Nghệ thuật này được coi là biểu tượng của văn hoá dân gian
          Việt Nam và là một phần không thể thiếu trong các lễ hội truyền thống của đất nước. Nghệ thuật rối
          cạn Tế Tiêu được truyền lại từ đời này sang đời khác và đã có hơn 400 năm lịch sử. Các màn múa rối
          đa dạng và phong phú, thể hiện rõ nét các cảnh vật, nhân vật và tình huống khác nhau trong cuộc
          sống. Với giá trị giải trí, giáo dục và giáo dục đạo đức cho người xem, nghệ thuật rối cạn Tế Tiêu
          là một phần quan trọng của văn hoá dân gian Việt Nam.
          <RiDoubleQuotesR className=" text-3xl ml-2" />
        </h1>
      </div>
      <div className="w-full mx-auto mt-32">
        <video className="w-full" controls>
          <source src="https://drive.google.com/uc?id=1JW1PVOYYg5QcGOisqVfuHVFY9N_8vCic" type="video/mp4" />{' '}
        </video>
      </div>
      <div className="flex flex-col items-center bg-white mt-32 p-4">
        <h1>BLOG</h1>
        <div className="flex items-center">
          <FaChevronLeft className="text-yellow" />
          <Carousel className="bg-white flex-1" effect="fade" autoplay>
            <div>
              <div className="flex items-center gap-6 w-full justify-center">
                <div className="max-w-[300px] flex bg-white p-2 flex-col flex-1">
                  <h3 className="text-base mb-[2px] font-bold text-yellow">
                    Quá trình ra đời và tồn tại của nghệ thuật rối cạn Tế Tiêu
                  </h3>
                  <p className="text-[12px] mb-3">06/10/2022 - 10h11</p>
                  <p className="text-sm text-justify max-h-[66px] overflow-clip leading-6">
                    Ở nước ta, rối cạn là loại hình nghệ thuật truyền thống, là đặc sản văn hóa Việt đã được
                    hình thành từ bao đời nay, với đặc trưng sử dụng con rối biểu diễn các trò và các tích trò
                    trên sân khấu cạn (khác với rối nước là con rối được biểu diễn ở dưới nước). Múa rối cạn
                    cũng như múa rối nước đã phát triển phong phú và đạt trình độ nghệ thuật khá cao vào thời
                    Lý, Trần (thế kỷ XI-XII). Trong công trình nghiên cứu ... “Nghệ thuật múa rối Việt Nam”
                    (1974, trang 37-43), Nguyễn Huy Hồng nhận định cả múa rối cạn và múa rối nước đều có chung
                    một lịch sử ra đời. Vào thế kỷ XI (thời Lý), nhiều trò diễn rối cạn và rối nước đã được
                    biểu diễn mừng ngày sinh nhật đức vua Lý Thái Tổ. Các con rối chim bay, muông chạy ở núi
                    giả Vạn Thọ Nam Sơn, các con rối cô tiên múa trong tiếng hát ca, tôn vinh vận nước hưng
                    thịnh v.v., …
                  </p>
                  <Button className="text-yellow border-none self-end outline-none">Xem thêm</Button>
                </div>
                <div className="max-w-[300px] flex bg-white p-2 flex-col flex-1">
                  <h3 className="text-base mb-[2px] font-bold text-yellow">
                    Quá trình ra đời và tồn tại của nghệ thuật rối cạn Tế Tiêu
                  </h3>
                  <p className="text-[12px] mb-3">06/10/2022 - 10h11</p>
                  <p className="text-sm text-justify max-h-[66px] overflow-clip leading-6">
                    Ở nước ta, rối cạn là loại hình nghệ thuật truyền thống, là đặc sản văn hóa Việt đã được
                    hình thành từ bao đời nay, với đặc trưng sử dụng con rối biểu diễn các trò và các tích trò
                    trên sân khấu cạn (khác với rối nước là con rối được biểu diễn ở dưới nước). Múa rối cạn
                    cũng như múa rối nước đã phát triển phong phú và đạt trình độ nghệ thuật khá cao vào thời
                    Lý, Trần (thế kỷ XI-XII). Trong công trình nghiên cứu ... “Nghệ thuật múa rối Việt Nam”
                    (1974, trang 37-43), Nguyễn Huy Hồng nhận định cả múa rối cạn và múa rối nước đều có chung
                    một lịch sử ra đời. Vào thế kỷ XI (thời Lý), nhiều trò diễn rối cạn và rối nước đã được
                    biểu diễn mừng ngày sinh nhật đức vua Lý Thái Tổ. Các con rối chim bay, muông chạy ở núi
                    giả Vạn Thọ Nam Sơn, các con rối cô tiên múa trong tiếng hát ca, tôn vinh vận nước hưng
                    thịnh v.v., …
                  </p>
                  <Button className="text-yellow border-none self-end outline-none">Xem thêm</Button>
                </div>
                <div className="max-w-[300px] flex bg-white p-2 flex-col flex-1">
                  <h3 className="text-base mb-[2px] font-bold text-yellow">
                    Quá trình ra đời và tồn tại của nghệ thuật rối cạn Tế Tiêu
                  </h3>
                  <p className="text-[12px] mb-3">06/10/2022 - 10h11</p>
                  <p className="text-sm text-justify max-h-[66px] overflow-clip leading-6">
                    Ở nước ta, rối cạn là loại hình nghệ thuật truyền thống, là đặc sản văn hóa Việt đã được
                    hình thành từ bao đời nay, với đặc trưng sử dụng con rối biểu diễn các trò và các tích trò
                    trên sân khấu cạn (khác với rối nước là con rối được biểu diễn ở dưới nước). Múa rối cạn
                    cũng như múa rối nước đã phát triển phong phú và đạt trình độ nghệ thuật khá cao vào thời
                    Lý, Trần (thế kỷ XI-XII). Trong công trình nghiên cứu ... “Nghệ thuật múa rối Việt Nam”
                    (1974, trang 37-43), Nguyễn Huy Hồng nhận định cả múa rối cạn và múa rối nước đều có chung
                    một lịch sử ra đời. Vào thế kỷ XI (thời Lý), nhiều trò diễn rối cạn và rối nước đã được
                    biểu diễn mừng ngày sinh nhật đức vua Lý Thái Tổ. Các con rối chim bay, muông chạy ở núi
                    giả Vạn Thọ Nam Sơn, các con rối cô tiên múa trong tiếng hát ca, tôn vinh vận nước hưng
                    thịnh v.v., …
                  </p>
                  <Button className="text-yellow border-none self-end outline-none">Xem thêm</Button>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center w-full gap-6 justify-center">
                <div className="max-w-[300px] flex bg-white p-2 flex-col flex-1">
                  <h3 className="text-base mb-[2px] font-bold text-yellow">
                    Quá trình ra đời và tồn tại của nghệ thuật rối cạn Tế Tiêu
                  </h3>
                  <p className="text-[12px] mb-3">06/10/2022 - 10h11</p>
                  <p className="text-sm text-justify max-h-[66px] overflow-clip leading-6">
                    Ở nước ta, rối cạn là loại hình nghệ thuật truyền thống, là đặc sản văn hóa Việt đã được
                    hình thành từ bao đời nay, với đặc trưng sử dụng con rối biểu diễn các trò và các tích trò
                    trên sân khấu cạn (khác với rối nước là con rối được biểu diễn ở dưới nước). Múa rối cạn
                    cũng như múa rối nước đã phát triển phong phú và đạt trình độ nghệ thuật khá cao vào thời
                    Lý, Trần (thế kỷ XI-XII). Trong công trình nghiên cứu ... “Nghệ thuật múa rối Việt Nam”
                    (1974, trang 37-43), Nguyễn Huy Hồng nhận định cả múa rối cạn và múa rối nước đều có chung
                    một lịch sử ra đời. Vào thế kỷ XI (thời Lý), nhiều trò diễn rối cạn và rối nước đã được
                    biểu diễn mừng ngày sinh nhật đức vua Lý Thái Tổ. Các con rối chim bay, muông chạy ở núi
                    giả Vạn Thọ Nam Sơn, các con rối cô tiên múa trong tiếng hát ca, tôn vinh vận nước hưng
                    thịnh v.v., …
                  </p>
                  <Button className="text-yellow border-none self-end outline-none">Xem thêm</Button>
                </div>
                <div className="max-w-[300px] flex bg-white p-2 flex-col flex-1">
                  <h3 className="text-base mb-[2px] font-bold text-yellow">
                    Quá trình ra đời và tồn tại của nghệ thuật rối cạn Tế Tiêu
                  </h3>
                  <p className="text-[12px] mb-3">06/10/2022 - 10h11</p>
                  <p className="text-sm text-justify max-h-[66px] overflow-clip leading-6">
                    Ở nước ta, rối cạn là loại hình nghệ thuật truyền thống, là đặc sản văn hóa Việt đã được
                    hình thành từ bao đời nay, với đặc trưng sử dụng con rối biểu diễn các trò và các tích trò
                    trên sân khấu cạn (khác với rối nước là con rối được biểu diễn ở dưới nước). Múa rối cạn
                    cũng như múa rối nước đã phát triển phong phú và đạt trình độ nghệ thuật khá cao vào thời
                    Lý, Trần (thế kỷ XI-XII). Trong công trình nghiên cứu ... “Nghệ thuật múa rối Việt Nam”
                    (1974, trang 37-43), Nguyễn Huy Hồng nhận định cả múa rối cạn và múa rối nước đều có chung
                    một lịch sử ra đời. Vào thế kỷ XI (thời Lý), nhiều trò diễn rối cạn và rối nước đã được
                    biểu diễn mừng ngày sinh nhật đức vua Lý Thái Tổ. Các con rối chim bay, muông chạy ở núi
                    giả Vạn Thọ Nam Sơn, các con rối cô tiên múa trong tiếng hát ca, tôn vinh vận nước hưng
                    thịnh v.v., …
                  </p>
                  <Button className="text-yellow border-none self-end outline-none">Xem thêm</Button>
                </div>
                <div className="max-w-[300px] flex bg-white p-2 flex-col flex-1">
                  <h3 className="text-base mb-[2px] font-bold text-yellow">
                    Quá trình ra đời và tồn tại của nghệ thuật rối cạn Tế Tiêu
                  </h3>
                  <p className="text-[12px] mb-3">06/10/2022 - 10h11</p>
                  <p className="text-sm text-justify max-h-[66px] overflow-clip leading-6">
                    Ở nước ta, rối cạn là loại hình nghệ thuật truyền thống, là đặc sản văn hóa Việt đã được
                    hình thành từ bao đời nay, với đặc trưng sử dụng con rối biểu diễn các trò và các tích trò
                    trên sân khấu cạn (khác với rối nước là con rối được biểu diễn ở dưới nước). Múa rối cạn
                    cũng như múa rối nước đã phát triển phong phú và đạt trình độ nghệ thuật khá cao vào thời
                    Lý, Trần (thế kỷ XI-XII). Trong công trình nghiên cứu ... “Nghệ thuật múa rối Việt Nam”
                    (1974, trang 37-43), Nguyễn Huy Hồng nhận định cả múa rối cạn và múa rối nước đều có chung
                    một lịch sử ra đời. Vào thế kỷ XI (thời Lý), nhiều trò diễn rối cạn và rối nước đã được
                    biểu diễn mừng ngày sinh nhật đức vua Lý Thái Tổ. Các con rối chim bay, muông chạy ở núi
                    giả Vạn Thọ Nam Sơn, các con rối cô tiên múa trong tiếng hát ca, tôn vinh vận nước hưng
                    thịnh v.v., …
                  </p>
                  <Button className="text-yellow border-none self-end outline-none">Xem thêm</Button>
                </div>
              </div>
            </div>
          </Carousel>
          <FaChevronRight className="text-yellow" />
        </div>
      </div>

      <div className="flex px-16 mt-8 pb-8 pt-8"></div>
    </div>
  );
}
