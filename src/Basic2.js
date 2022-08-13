import React , {Fragment} from 'react';
import './basic2.css';

function App() {
    const name = '리액트';
    const style = {
        backgroundColor : 'black', //backgroud-color은 -가 사라지고 카멜표현식으로 작성됨
        color : 'aqua',
        fontSize : '48px',
        fontWeight : 'bold',
        padding : 16 //단위는 생략하면px가 기본으로 붙음
    };

    return (
        <>
            <h1>----------------------------------------------------------------------------------------------</h1>
            <h2>p70~p73</h2>
            <div style={style}>{name} 변수에서 스타일지정해서 사용</div>
            <div style={{
                backgroundColor : 'blue',
                color : 'aqua',
                fontSize : '48px',
                fontWeight : 'bold',
                padding : 16
            }}
            >리액트 JSX에 직접 스타일 지정</div>
            <div className="react">{name} css파일 로드하여 지정</div>
        </>
    );
}
export default App;
