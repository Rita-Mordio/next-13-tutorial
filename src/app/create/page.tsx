'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const Create = () => {
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

  const onClickSaveHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    void fetch('http://localhost:9999/content', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(boardObj),
    })
      .then(response => response.json())
      .then(response => {
        router.refresh();
        router.push('/');
      });
  };

  return (
    <>
      <input type="text" name="title" onChange={onChangeInputHandler} placeholder="title" />
      <br />
      <br />
      <input type="text" name="content" onChange={onChangeInputHandler} placeholder="content" />
      <br />
      <br />
      <button onClick={onClickSaveHandler}>save</button>
    </>
  );
};

export default Create;
