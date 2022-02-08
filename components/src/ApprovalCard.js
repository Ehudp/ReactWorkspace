import React from 'react';
import styles from './test.module.scss';
//import cn from 'classnames';
//style={{ backgroundColor: 'blue' }}
const ApprovalCard = (props) => {
  //console.log(styles);
  const classs = styles.extraContent;
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className={styles.extraContent}>
        <div className="ui two buttons">
          <div className="item1">Approve</div>
          <div className="item2">
            <span className="sp1">
              <span className="sp2">Reject</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
