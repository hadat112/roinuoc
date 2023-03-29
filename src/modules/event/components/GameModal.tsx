import { CloseIcon } from '@/components/icons';
import { Modal } from 'antd';
import Game from './Game';

const QUESTION = [
  {
    time: 10000,
    question: 'Siapakah presiden Negara Republik Indonesia ke-1?',
    answer: 'Ir. Soekarno',
    choices: ['WR. Soepratman', 'Soeharto', 'Puan Maharani', 'Ir. Soekarno'],
  },
  {
    time: 5000,
    question: 'Kerusuhan Banjarmasin terjadi pada tahun berapa?',
    answer: 1997,
    choices: [1997, 2002, 2013, 1945],
  },
  {
    time: 20000,
    question: 'Kepanjangan DPR adalah?',
    answer: 'Dewan Perwakilan Rakyat',
    choices: [
      'Dewan Perwakilan Daerah',
      'Dewan Perwakilan Rakyat',
      'Dewan Pribumi Rahasia',
      'Dewan Pengkhianat Rakyat',
    ],
  },
  {
    time: 10000,
    question: 'Kepanjangan TNI adalah?',
    answer: 'Tentara Nasional Indonesia',
    choices: [
      'Tentara Nasional Indonesia',
      'Tau Nama Indonesia',
      'Takutnya Negara Indonesia',
      'Tinggal Nama Ini',
    ],
  },
];

export default function GameModal({ open, onCancel }) {
  const title = (
    <>
      <CloseIcon className="text-2xl absolute right-[10px] hover:cursor-pointer" onClick={onCancel} />
      <p className="w-full text-center font-semibold">Trò chơi</p>
    </>
  );
  return (
    <Modal height width={'90%'} open={open} closable={false} onCancel={onCancel} footer={null} title={title}>
      <Game question={QUESTION}></Game>
    </Modal>
  );
}
