import React, { useState } from "react";
import { useSelector } from "react-redux";
import Chatbot from "../asserts/DgfrJNR8oUyv.gif";

function ChatbotDisplay(props) {
  let introMsg = useSelector((state) => state.user.introMessage);
  let options = useSelector((state) => state.user.options);
  let sub = useSelector(
    (state) => state.user.subOptions && state.user.subOptions
  );
  let updatedOptions = useSelector(
    (state) => state.user.updatedOptions && state.user.updatedOptions
  );
  let solutions = useSelector(
    (state) => state.user.solution && state.user.solution
  );

  console.log("updatedOptions", updatedOptions);

  const {
    showChatbot,
    show,
    showSpeakToAgent,
    handleUbdateOption,
    handleClear,
    speakToAgent,
    handleChange,
    handleOptions,
    handleOptionsIndex,
    handleSubOptions,
    selected,
    selectedSub,
  } = props;
  return (
    <div>
      <h1 className="headerText">Chatbot</h1>
      {show ? (
        !speakToAgent ? (
          <div className="chatbotContainer">
            <div className="chatbotHeader">
              <div className="chatbotHeaderDivider">
                <button
                  style={{ color: "black" }}
                  className="btn btn-light"
                  onClick={handleClear}
                >
                  Clear chatbot
                </button>
                <h5 className="headerTitle">chat-bot!</h5>
                <button
                  style={{ float: "right", color: "black" }}
                  className="btn btn-light"
                  onClick={showSpeakToAgent}
                >
                  Speak to agent
                </button>
              </div>
            </div>
            <div id="chatbotBody" className="chatbotBody">
              <br />
              {introMsg !== undefined
                ? introMsg.map((introMessage) => {
                    return (
                      <div className="welcomeMessage">
                        <p className="welcomeMessageButton">{introMessage}</p>
                      </div>
                    );
                  })
                : null}
              <br />
              {options !== undefined || options !== undefined
                ? options &&
                  options.map((item, i) => {
                    return (
                      <div
                        className="alignMessages"
                        onClick={() => handleOptionsIndex("option1", i)}
                        style={{
                          display:
                            selected.option1 !== i && selected.option1 > -1
                              ? "none"
                              : "block",
                        }}
                      >
                        <p
                          id={i}
                          style={{
                            backgroundColor:
                              selected === i ? "rgb(112, 226, 131)" : "none",
                          }}
                          className="btn introMessage"
                          onClick={() => handleOptions(item)}
                        >
                          {item}
                        </p>
                      </div>
                    );
                  })
                : null}
              <br />
              {sub &&
                sub.map((item, i) => {
                  return (
                    <div className="mapDevider">
                      <p
                        className="buttonValue"
                        style={{ display: i > 0 ? "none" : null }}
                      >
                        {item.value}
                      </p>
                      <div
                        style={{ display: i !== 1 ? "none" : null }}
                        className="welcomeMessage"
                      >
                        <p
                          className="welcomeMessageButton"
                          style={{ display: i !== 1 ? "none" : null }}
                        >
                          {item.message}
                        </p>
                      </div>
                      <div
                        onClick={() => handleOptionsIndex("option2", i)}
                        style={{
                          display:
                            i < 2 ||
                            (selected.option2 !== i && selected.option2 > -1)
                              ? "none"
                              : "block",
                        }}
                        className="alignMessages"
                      >
                        <p
                          id={i}
                          className="btn introMessage"
                          onClick={() => handleUbdateOption(item)}
                        >
                          {item.option}
                        </p>
                      </div>
                    </div>
                  );
                })}

              {updatedOptions &&
                updatedOptions.map((item, i) => {
                  return (
                    <div className="mapDevider">
                      <div>
                        <p
                          className="buttonValue"
                          style={{ display: i > 0 ? "none" : null }}
                        >
                          {item.subSolutions[0].value}
                        </p>
                      </div>
                      <div
                        style={{ display: i !== 1 ? "none" : null }}
                        className="welcomeMessage"
                      >
                        <p
                          className="welcomeMessageButton"
                          style={{ display: i !== 1 ? "none" : null }}
                        >
                          {item.subSolutions[1].message}
                        </p>
                      </div>

                      <div></div>
                    </div>
                  );
                })}
              {updatedOptions &&
                updatedOptions.map((obj, i) => {
                  return (
                    <div
                      onClick={() => handleOptionsIndex("option3", i)}
                      style={{
                        display:
                          i < 2 &&
                          selected.option3 !== i &&
                          selected.option3 > -1
                            ? "none"
                            : "block",
                      }}
                      className="alignMessages"
                    >
                      <p
                        type="button"
                        id={i}
                        className="btn introMessage"
                        onClick={() => handleSubOptions(obj)}
                      >
                        {obj.option}
                      </p>
                    </div>
                  );
                })}
              <br />

              {solutions &&
                solutions.map((item, i) => {
                  return (
                    <div className="mapDevider">
                      <div style={{ display: i > 0 ? "none" : null }}>
                        <p className="buttonValue">{item.value}</p>
                      </div>
                      <div
                        style={{ display: i !== 1 ? "none" : null }}
                        className="welcomeMessage"
                      >
                        <p className="welcomeMessageButton">{item.message}</p>
                      </div>
                      <div
                        style={{ display: i !== 2 ? "none" : null }}
                        className="solutons"
                      >
                        <p className="solutonsParagraph">{item.solution}</p>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="chatbotFooter">
              <p style={{ color: "white", margin: "auto" }}>Command:</p>
              <input
                type="text"
                className="form-control"
                onChange={(e) => handleChange(e)}
                placeholder="Command response "
              />
              <button className="btn btn-light" type="submit">
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="chatbotContainer">
            <div className="chatbotHeader">
              <div className="chatbotHeaderDivider">
                <button
                  style={{ color: "black" }}
                  className="btn btn-light"
                  onClick={handleClear}
                >
                  Clear Messages
                </button>
                <h5 className="headerTitle">chat-bot!</h5>
                <button
                  style={{ float: "right", color: "black" }}
                  className="btn btn-light"
                  onClick={showSpeakToAgent}
                >
                  Chatbot
                </button>
              </div>
            </div>
            <div id="chatbotBody" className="chatbotBody"></div>
            <div className="chatbotFooter">
              <p style={{ color: "white", margin: "auto" }}>Command:</p>
              <input
                type="text"
                className="form-control"
                onChange={(e) => handleChange(e)}
                placeholder="Command response "
              />
              <button className="btn btn-light" type="submit">
                Send
              </button>
            </div>
          </div>
        )
      ) : (
        <div className="bubble bubble-bottom-left">
          Click me to start a chat
        </div>
      )}

      <img
        onClick={showChatbot}
        className="chatbotIcon"
        src={Chatbot}
        alt="charbotPic"
      />
    </div>
  );
}

export default ChatbotDisplay;
