import React from 'react';
import Link from 'next/link';
import type { I_board } from '@/interface/board';

interface I_boardItemProps {
  item: I_board;
}

const BoardItem = ({ item }: I_boardItemProps) => {
  return (
    <>
      <li>
        <Link href={`/board/${item.id}`}>{item.title}</Link>
      </li>
    </>
  );
};

export default BoardItem;
