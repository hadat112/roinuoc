import { Carousel, message } from 'antd';
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import { getPost } from '@/services/puppetService';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const carouselPost = useRef();
  const convertPosts = (arr, chunkSize) => {
    return arr?.reduce((acc, _, i) => {
      if (i % chunkSize === 0) {
        acc.push(arr.slice(i, i + chunkSize));
      }
      return acc;
    }, []);
  };
  const getPostList = async () => {
    const response: any = await getPost({ type: 'post' });
    if (response.error) return message.error(response.error);
    setPosts(convertPosts(response.data, 3));
  };

  useEffect(() => {
    getPostList();
  }, []);
  return (
    <div className="home w-full bg-bg-body bg-[#ECEFF1]">
      <Carousel className="w-full">
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
        <div className="flex items-center max-w-[100vw] mx-auto overflow-hidden relative">
          <FaChevronLeft
            className="text-yellow text-3xl cursor-pointer absolute left-[10%] z-10"
            // onClick={() => carouselPost.current?.prev()}
          />
          <Carousel ref={carouselPost} dots={false} className="bg-white min-w-[900px]">
            {posts?.map((post, index) => {
              return (
                <div key={index}>
                  <div className="home-slide overflow-hidden flex items-start gap-6 justify-center">
                    {post.map((p) => {
                      return (
                        <div key={p?._id} className="max-w-[300px] flex h-full bg-white p-2 flex-col flex-1">
                          <h3 className="text-base mb-[2px] font-bold text-yellow">{p?.title}</h3>
                          <p className="text-[12px] mb-3">
                            {dayjs(p?.updatedAt).format('DD-MM-YYYY MM[h]HH')}
                          </p>
                          <p className="text-sm text-justify max-h-[66px] overflow-clip leading-6">
                            Ở nước ta, rối cạn là loại hình nghệ thuật truyền thống, là đặc sản văn hóa Việt
                            đã được hình thành từ bao đời nay, với đặc trưng sử dụng con rối biểu diễn các trò
                            và các tích trò trên sân khấu cạn (khác với rối nước là con rối được biểu diễn ở
                            dưới nước). Múa rối cạn cũng như múa rối nước đã phát triển phong phú và đạt trình
                            độ nghệ thuật khá cao vào thời Lý, Trần (thế kỷ XI-XII). Trong công trình nghiên
                            cứu ... “Nghệ thuật múa rối Việt Nam” (1974, trang 37-43), Nguyễn Huy Hồng nhận
                            định cả múa rối cạn và múa rối nước đều có chung một lịch sử ra đời. Vào thế kỷ XI
                            (thời Lý), nhiều trò diễn rối cạn và rối nước đã được biểu diễn mừng ngày sinh
                            nhật đức vua Lý Thái Tổ. Các con rối chim bay, muông chạy ở núi giả Vạn Thọ Nam
                            Sơn, các con rối cô tiên múa trong tiếng hát ca, tôn vinh vận nước hưng thịnh
                            v.v., …
                          </p>
                          <Link
                            href={`overview/${p?.slug}`}
                            className="text-yellow border-none text-end outline-none"
                          >
                            Xem thêm
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
          <FaChevronRight
            className="text-yellow text-3xl cursor-pointer absolute right-[10%] z-10"
            // onClick={() => carouselPost.current?.next()}
          />
        </div>
      </div>

      <div className="flex px-16 mt-8 pb-8 pt-8"></div>
    </div>
  );
}
