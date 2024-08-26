import React from 'react';

const Tutor = () => {
  return (
    <div className="Tutor" style={{width: 1440, height: 1024, position: 'relative', background: 'white'}}>
      <div className="TUTOR" style={{left: 226, top: 136.86, position: 'absolute', color: 'black', fontSize: 32, fontFamily: 'Pretendard', fontWeight: '700', wordWrap: 'break-word'}}>TUTOR</div>
      <div className="Group1000001762" style={{width: 943.57, height: 660.62, left: 247.94, top: 432.40, position: 'absolute'}}>
        {/* Tutor activity list */}
        <div style={{left: 36.78, top: 0, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word'}}>게시일자</div>
        <div style={{left: 258.33, top: 0, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word'}}>튜터활동명</div>
        <div style={{left: 788.69, top: 0, position: 'absolute', color: 'black', fontSize: 24, fontFamily: 'Pretendard', fontWeight: '600', wordWrap: 'break-word'}}>팀장</div>
        {/* Add more tutor activity items here */}
      </div>
    </div>
  );
};

export default Tutor;