import React from 'react';

const Allergy = () => {
  return (
    <div className="menuInfo allergy">
      <h4 className="h4Tit">알레르기</h4>
      <div className="allergyWrap tabling">
        <div className="list01 cell">
          <dl className="dl">
            <dt>난류</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>우유</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>메밀</dt>
            <dd className="making">
              <span className="blind">포함</span>
            </dd>
          </dl>
        </div>

        <div className="list02 cell">
          <dl className="dl">
            <dt>난류</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>우유</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>{' '}
          <dl>
            <dt>메밀</dt>
            <dd className="making">
              <span className="blind">포함</span>
            </dd>
          </dl>
        </div>

        <div className="list03 cell">
          <dl className="dl">
            <dt>난류</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>우유</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>메밀</dt>
            <dd className="making">
              <span className="blind">포함</span>
            </dd>
          </dl>
        </div>

        <div className="list04 cell">
          <dl className="dl">
            <dt>난류</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>우유</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>메밀</dt>
            <dd className="making">
              <span className="blind">포함</span>
            </dd>
          </dl>
        </div>

        <div className="list05 cell">
          <dl className="dl">
            <dt>난류</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>우유</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>메밀</dt>
            <dd className="making">
              <span className="blind">포함</span>
            </dd>
          </dl>
        </div>

        <div className="list06 cell">
          <dl className="dl">
            <dt>난류</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>우유</dt>
            <dd className="true">
              <span className="blind">포함</span>
            </dd>
          </dl>
          <dl>
            <dt>메밀</dt>
            <dd className="making">
              <span className="blind">포함</span>
            </dd>
          </dl>
        </div>
      </div>
      <div className="classify">
        <ul>
          <li className="list01 list">해당 알레르기 성분이 포함되어 있음</li>
          <li className="list02 list">
            해당 알레르기 성분이 직접적으로 포함되어 있지 않지만, 해당 성분을
            가공하는 시설에서 가공/제조 하였음
          </li>
          <li className="list03 list">
            해당 알레르기 성분이 포함되어 있지 않음
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Allergy;
