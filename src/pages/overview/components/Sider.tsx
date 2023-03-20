import { Input } from 'antd';

const recentPost = [
  'Sân khâu giản dị nhưng đặc sắc của rối cạn tế tiêu',
  'Buồng trò nơi tạo ra linh hồn cho chú rối',
  'Quân rối và quy trình, kỹ thuật chế tác',
  'Các nghiên cứu thống kê về số lượng từ m',
];
const tags = ['Sân khâu', 'Buồng trò', 'Quân rối', 'Quân rối', 'Chế tác', 'Địa chỉ'];

export default function Sider() {
  return (
    <div className="absolute right-0 top-4 w-[20%] flex flex-col mr-8 gap-8">
      <div className="p-6 bg-white">
        <Input.Search></Input.Search>
      </div>
      <div className="p-6 bg-white">
        <h1 className="text-3xl font-semibold mb-6">Bài viết gần đây</h1>

        {recentPost.map((post, index) => {
          return (
            <div key={index} className="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg">
              <a href="">{post}</a>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-white">
        <h1 className="text-3xl font-semibold mb-6">Bài viết đọc nhiều</h1>

        {recentPost.map((post, index) => {
          return (
            <div key={index} className="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg">
              <a href="">{post}</a>
            </div>
          );
        })}
      </div>

      <div className="p-6 bg-white">
        <h1 className="text-3xl font-semibold mb-6">Tags</h1>

        {tags.map((tag, index) => {
          return (
            <div key={index} className="border-0 border-solid border-grey-200 border-b p-2 mb-4 text-lg">
              <a href="">{tag}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
