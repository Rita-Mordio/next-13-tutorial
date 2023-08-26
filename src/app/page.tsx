import React from 'react';
import BoardItem from '@/components/board/item';
import type { I_board } from '@/interface/board';
import Link from 'next/link';

const Home = async () => {
  const boards: I_board[] = await fetch('http://localhost:9999/content', { cache: 'no-store' }).then(response => response.json());

  return (
    <>
      <ol>
        {boards.map((item: I_board) => {
          return <BoardItem key={item.id} item={item} />;
        })}
      </ol>
      <Link href="/create">
        <button>Create</button>
      </Link>
    </>
  );
};

export default Home;
