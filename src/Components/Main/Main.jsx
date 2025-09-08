

import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../Content/Context";

const Main = () => {
  const {
    onsent,
    recentprompts,
    showresults,
    loading,
    resultdata,
    input,
    setInput,
  } = React.useContext(Context);

  return (
    <div className="Main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showresults ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Rajul</span>
              </p>
              <p>How can I Help u today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Suggest Beautiful Places to see an upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Explain AI</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest Food Places</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Stock Market Prediction</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentprompts}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <p>Loading</p>
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a Prompt here"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onsent(input);
                }
              }}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />

              {input ? (
                <img
                  onClick={() => onsent(input)}
                  src={assets.send_icon}
                  alt=""
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may generate inaccurate information about people, places, or
            facts. Gemini may also produce harmful instructions or biased
            content. Always verify the information provided by Gemini.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
