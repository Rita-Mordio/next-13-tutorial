'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Update = ({ params }: { params: { id: string } }) => {
  const router = useRouter();

  const [boardObj, setBoardObj] = useState({
    title: '',
    content: '',
  });

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBoardObj({
      ...boardObj,
      [event.target.name]: event.target.value,
    });
  };

  const onClickUpdateHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    void fetch(`http://localhost:9999/content/${params.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(boardObj),
    })
      .then(response => response.json())
      .then(response => {
        router.refresh();
        router.push('/');
      });
  };

  const fetchData = () => {
    void fetch(`http://localhost:9999/content/${params.id}`)
      .then(response => response.json())
      .then(response => {
        setBoardObj({
          title: response.title,
          content: response.content,
        });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <input type="text" name="title" value={boardObj.title} onChange={onChangeInputHandler} placeholder="title" />
      <br />
      <br />
      <input type="text" name="content" value={boardObj.content} onChange={onChangeInputHandler} placeholder="content" />
      <br />
      <br />
      <button onClick={onClickUpdateHandler}>update</button>
    </>
  );
};

export default Update;
