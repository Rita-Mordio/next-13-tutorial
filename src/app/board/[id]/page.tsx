'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import type { I_board } from '@/interface/board';

const Detail = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const [board, setBoard] = useState<I_board | undefined>();

  const onClickDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (confirm('정말 삭제 하겠습니끼?')) {
      void fetch(`http://localhost:9999/content/${params.id}`, {
        method: 'DELETE',
      })
        .then(response => response.json())
        .then(response => {
          router.refresh();
          router.push('/');
        });
    }
  };

  const fetchData = () => {
    void fetch(`http://localhost:9999/content/${params.id}`, { cache: 'no-cache' })
      .then(response => response.json())
      .then(response => {
        setBoard(response);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h4>{board?.title}</h4>
      <p>{board?.content}</p>
      <div className="buttons">
        <Link href={`/update/${board?.id}`}>
          <button>Update</button>
        </Link>
        <button onClick={onClickDeleteHandler}>Delete</button>
      </div>
    </>
  );
};

export default Detail;
