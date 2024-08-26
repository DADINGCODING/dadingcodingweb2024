import React from 'react';

const MyPage = () => {
  return (
    <div className="Mypage1" style={{width: 1440, height: 1024, position: 'relative', background: 'white'}}>
      <div className="Rectangle89" style={{width: 995.64, height: 119.61, left: 222.18, top: 173.98, position: 'absolute', background: 'black', borderRadius: 367}}>
        <div style={{left: 621, top: 195.78, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '700', lineHeight: 38, wordWrap: 'break-word'}}>
          튜터님의 면접 일정은<br/>
          <span style={{color: '#B9FF82'}}>!!!월 !!!일</span> 입니다.
        </div>
      </div>
      <div style={{left: 226.44, top: 354.23, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}>지난 활동 일지</div>
      <div className="Group1000001762" style={{width: 943.57, height: 660.62, left: 247.94, top: 432.40, position: 'absolute'}}>
        {/* Past activity list */}
        <div style={{left: 36.78, top: 0, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word'}}>게시일자</div>
        <div style={{left: 258.33, top: 0, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word'}}>제목</div>
        <div style={{left: 788.69, top: 0, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word'}}>작성자</div>
        {/* Add more past activity items here */}
      </div>
    </div>
  );
  
};

export default MyPage;