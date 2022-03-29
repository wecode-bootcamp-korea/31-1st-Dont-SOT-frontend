import React from 'react';
import '../Join/Join.scss';

const Join = () => {
  return (
    <section className="join">
      <div className="inner">
        <div className="wrap">
          <div className="joinForm">
            <h2>회원가입</h2>
            <p>필수입력사항</p>
            <form>
              <dl className="fst">
                <dt>아이디</dt>
                <dd>
                  <input placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합" />
                  <button>중복확인</button>
                </dd>
                <dt>비밀번호</dt>
                <dd>
                  <input placeholder="비밀번호를 입력해주세요" />
                </dd>
                <dt>비밀번호 확인</dt>
                <dd>
                  <input placeholder="비밀번호를 한번 더 입력해주세요" />
                </dd>
                <dt>이름</dt>
                <dd>
                  <input placeholder="이름을 입력해주세요" />
                </dd>
                <dt>이메일</dt>
                <dd>
                  <input placeholder="예: Sot.jimayo.com" />
                  <button>중복확인</button>
                </dd>
              </dl>
              <div className="formSubmit">
                <button>가입하기</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
