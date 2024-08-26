import React from 'react';

const Register = () => {
  return (
    <div style={{width: 1440, height: 1024, position: 'relative', background: 'black'}}>
      <div className="Group1000001760" style={{width: 509.17, height: 770.55, left: 465.42, top: 126.73, position: 'absolute'}}>
        <div className="SignIn" style={{left: 12.13, top: 0, position: 'absolute', color: 'white', fontSize: 23.92, fontFamily: 'Pretendard', fontWeight: '500', wordWrap: 'break-word'}}>Sign In</div>
        <div className="Line9" style={{width: 73.38, height: 0, left: 12.13, top: 31.94, position: 'absolute', border: '1.33px #B9FF82 solid'}}></div>
        <form>
          <input type="text" placeholder="아이디" style={{width: 509.17, height: 51, left: 0, top: 54.07, position: 'absolute', background: 'white', borderRadius: 11}} />
          <input type="password" placeholder="비밀번호" style={{width: 509.17, height: 51, left: 0, top: 105.07, position: 'absolute', background: 'white', borderRadius: 11}} />
          {/* Add more form fields here */}
          <button type="submit" style={{width: 509.17, height: 59.14, left: 0, top: 711.41, position: 'absolute', background: '#B9FF82', borderRadius: 11, color: 'black', fontSize: 20, fontFamily: 'Pretendard', fontWeight: '600'}}>가입하기</button>
        </form>
      </div>
    </div>
  );
};

export default Register;