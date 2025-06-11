


import React, { useContext } from 'react';
import './SideBar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Content/Context';

const SideBar = () => {
  const [extended, setExtended] = React.useState(true);
  const { prevpromts, onsent,newcht } = useContext(Context); 

  return (
    <div className="sidebar">
      <div className="top">
        <img
          className="Menu"
          src={assets.menu_icon}
          alt=""
          onClick={() => setExtended((prev) => !prev)}
        />
        <div onClick={()=>newcht()} className="newchat">
          <img className="plus" src={assets.plus_icon} alt="" />
          {extended ? <p>New chat</p> : null}
        </div>

        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevpromts.length === 0 && (
              <div className="recent-entr">
                <p style={{ color: '#aaa' }}>No recent chats</p>
              </div>
            )}
            {prevpromts.map((item, idx) => (
              <div
                className="recent-entr"
                key={idx}
                onClick={() => onsent(item)} 
                title={item} 
                style={{ cursor: 'pointer' }}
              >
                <img src={assets.message_icon} alt="" />
                <p
                  style={{
                    maxWidth: '120px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    margin:'0px'
                  }}
                >
                  {item.length > 21 ? `${item.slice(0, 18)}...` : item}
                </p>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="bottom">
        <div className={`bottom-item recent-entry ${extended ? 'extended' : 'collapsed'}`}>
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className={`bottom-item recent-entry ${extended ? 'extended' : 'collapsed'}`}>
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className={`bottom-item recent-entry ${extended ? 'extended' : 'collapsed'}`}>
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default SideBar;

