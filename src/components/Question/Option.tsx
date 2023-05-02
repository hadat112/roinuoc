import { Card } from 'antd';
import cx from 'classnames';

// Parse HTML entities in string
export const parseEntities = (content) =>
  new DOMParser().parseFromString(content, 'text/html').body.innerText;

const Option = ({ content, isSelected, onClickHandler, bg }) => {
  return (
    <>
      <Card
        bodyStyle={{ background: bg, color: '#151515', width: '100%', height: '100%', borderRadius: '1rem' }}
        className={cx(
          ' text-[#151515] cursor-pointer h-[10rem] w-[8rem] border-0 border-solid border-white rounded-2xl',
          {
            'border-[0.4rem]': isSelected,
          }
        )}
        onClick={onClickHandler}
      >
        {content}
      </Card>
    </>
  );
};

export default Option;
