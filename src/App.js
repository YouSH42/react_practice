import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    let [subTitle, setSubtitle] = useState(['여자 코트 추천', '칠곡 맛집 추천', '여행 코스 추천']);
    let [like, setLike] = useState([0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [title, setTitle] = useState(0);
    let [inputValue, setInputValue] = useState('');

    return (
        <div className="App">
            <div className="black-nav">
                <h4>ReactBlog</h4>
            </div>
            {subTitle.map(function (name, i) {
                return (
                    <div className='list' key={i}>
                        <h4 onClick={() => { setModal(true); setTitle(i); }}>{subTitle[i]}
                            <span onClick={(e) => {
                                e.stopPropagation();
                                let newLike = [...like];
                                newLike[i] += 1;
                                setLike(newLike)
                            }}>👍</span>{like[i]}</h4>
                        <p>2월 24일 발행</p>
                        <button onClick={()=>{
                            let tmp = subTitle.splice(i)
                            setSubtitle(tmp)
                        }}>삭제</button>
                    </div>
                )
            })}
            <input onChange={(e) => {
                setInputValue(e.target.value);
                console.log(e.target.value);
            }} />
            <button onClick={(e) => {
                setSubtitle(subTitle.concat(inputValue));
                setLike(like.concat(0));
            }}>등록</button>

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
