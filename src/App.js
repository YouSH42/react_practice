import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let [subTitle, subTitleSet] = useState(['여자 코트 추천', '칠곡 맛집 추천', '여행 코스 추천']);
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            {subTitle.map(function (name, i) {
                return (
                    <div className='list' key={i}>
                        <h4 onClick={() => { setModal(true); setTitle(i); }}>{subTitle[i]}</h4>
                        <span onClick={() => {
                            let newLike = [...like];
                            newLike[i] += 1;
                            setLike(newLike)
                        }}>👍</span>{like[i]}
                        <p>2월 24일 발행</p>
                    </div>
                )
            })}
            {
                modal == true ? <Modal subTitle={subTitle} title={title} /> : null
            }
        </div>
    );
}

function Modal(props) {
    return (
        <div className='modal'>
            <h4>{props.subTitle[props.title]}</h4>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
