import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [subTitle, subTitleSet] = useState(['여자 코트 추천', '남자 코트 추천', '아동 코트 추천']);
  let [like, likeSet] = useState(0);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">

      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...subTitle];
        copy[0] = '파이썬';
        subTitleSet(copy);
      }}>변경</button>

      <button onClick={() => {
        let sortArr = [...subTitle];
        sortArr = sortArr.sort();
        subTitleSet(sortArr)
      }}>가나다 순 정렬</button>

      <div className='list'>
        <h4>{subTitle[0]} <span onClick={() => { likeSet(like + 1) }}>👍</span>{like}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className='list'>
        <h4 onClick={() => {
          if(modal == false){
            setModal(true)
          }
          else{
            setModal(false)
          }
        }}> {subTitle[1]} </h4>
        <p>2월 20일 발행</p>
      </div>

      <div className='list'>
        <h4>{subTitle[2]}</h4>
        <p>2월 24일 발행</p>
      </div>

      {
        modal == true ? <Modal /> : null
      }

    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
