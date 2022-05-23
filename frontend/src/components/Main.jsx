import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getData,
  getIntroMessage,
  getOptionsMessage,
  getSubOptions,
  updateSubOption,
  updateSolution,
  clearState,
} from "../redux/Actions/index";
import DisplayChatbot from "./ChatbotDisplay";

function Main() {
  const [show, setShow] = useState(false);
  const [speakToAgent, setSpeakToAgent] = useState(false);
  const [selected, setSelected] = useState({});
  const [comment, setComment] = useState([]);

  let chatbotData = useSelector((state) => state.user.data);
  let dispatch = useDispatch();

  useEffect(() => {
    getApiData();
  }, []);

  const showChatbot = () => {
    setShow(true);
    setTimeout(() => {
      getIntroMessages();
    }, 1500);
    setTimeout(() => {
      getOptionMessages();
    }, 2000);
  };

  const getApiData = () => {
    dispatch(getData());
  };

  const handleOptionsIndex = (field, id) => {
    let newSelectedId = { ...selected };
    newSelectedId[`${field}`] = id;
    setSelected(newSelectedId);
  };

  const getIntroMessages = () => {
    dispatch(getIntroMessage(["Hi, welcome to Sia bot, how can i help you?"]));
  };

  const getOptionMessages = () => {
    // let IntroMessage = chatbotData;
    let subOptions = chatbotData.map((item) => {
      return item.options;
    });
    setTimeout(() => {
      dispatch(getOptionsMessage(subOptions));
      // dispatch(getOptionsMessage(subOptions));
    }, 1000);
  };

  const handleOptions = (item) => {
    let cantLogIn = chatbotData[0].options;
    let problemWithJava = chatbotData[1].options;
    let systemIsDown = chatbotData[2].options;
    let cantLogInOptions = chatbotData[0].subOption.solutions;
    let problemWithJavaOptions = chatbotData[1].subOption.solutions;
    let systemIsDownOptions = chatbotData[2].subOption.solutions;
    switch (item) {
      case cantLogIn:
        return setTimeout(() => {
          dispatch(getSubOptions(cantLogInOptions));
          var scroll = document.getElementById("chatbotBody");
          scroll.scrollTop = scroll.scrollHeight;
        }, 1000);
      case problemWithJava:
        return setTimeout(() => {
          dispatch(getSubOptions(problemWithJavaOptions));
          var scroll = document.getElementById("chatbotBody");
          scroll.scrollTop = scroll.scrollHeight;
        }, 2000);
      case systemIsDown:
        return setTimeout(() => {
          dispatch(getSubOptions(systemIsDownOptions));
          var scroll = document.getElementById("chatbotBody");
          scroll.scrollTop = scroll.scrollHeight;
        }, 2000);
      default:
        return item;
    }
  };

  const handleUbdateOption = (item) => {
    let internetConnection = chatbotData[0].subOption.solutions[2].option;
    let correctEmail = chatbotData[0].subOption.solutions[3].option;
    let passwordReset = chatbotData[0].subOption.solutions[4].option;
    let internetConnectionOption =
      chatbotData[0].subOption.solutions[2].subOptions.sub;
    let correctEmailOption = chatbotData[0].subOption.solutions[3].subOptions.sub;
    let passwordResetOption = chatbotData[0].subOption.solutions[4].sub;
    let NullPointerException = chatbotData[1].subOption.solutions[2].option;
    let usingComparisonOperator = chatbotData[1].subOption.solutions[3].option;
    let comfusingComparisonOperator =
      chatbotData[1].subOption.solutions[4].option;
    let NullPointerExceptionOption = chatbotData[1].subOption.solutions[2].sub;
    let usingComparisonOperatorOption =
      chatbotData[1].subOption.solutions[3].sub;
    let confusingComparisonOperatorOption =
      chatbotData[1].subOption.solutions[4].sub;
    let systemIsDownMessage = chatbotData[2].subOption.solutions[1].message;
    let webOption = chatbotData[2].subOption.solutions[2].option;
    let mobileOption = chatbotData[2].subOption.solutions[3].option;
    let overloadOption = chatbotData[2].subOption.solutions[4].option;
    let webSubOptions = chatbotData[2].subOption.solutions[2].sub;
    let mobileSubOptions = chatbotData[2].subOption.solutions[3].sub;
    let overloadSubOption = chatbotData[2].subOption.solutions[4].sub;

    console.log("correctEmail", correctEmail);
    console.log("correctEmailOption", correctEmailOption);

    switch (item.option) {
      case internetConnection:
        return setTimeout(() => {
          dispatch(updateSubOption(internetConnectionOption));
          var scroll = document.getElementById("chatbotBody");
          scroll.scrollTop = scroll.scrollHeight;
        }, 2000);
      case correctEmail:
        return setTimeout(() => {
          dispatch(updateSubOption(correctEmailOption));
          var scroll = document.getElementById("chatbotBody");
          scroll.scrollTop = scroll.scrollHeight;
        }, 2000);
      // case passwordReset:
      //   return setTimeout(() => {
      //     dispatch(updatePasswordOption(passwordResetOption));
      //     var scroll = document.getElementById("chatbotBody");
      //     scroll.scrollTop = scroll.scrollHeight;
      //   }, 2000);
      // case NullPointerException:
      //   return setTimeout(() => {
      //     dispatch(updatePasswordOption(NullPointerExceptionOption));
      //     var scroll = document.getElementById("chatbotBody");
      //     scroll.scrollTop = scroll.scrollHeight;
      //   }, 2000);
      // case comfusingComparisonOperator:
      //   return setTimeout(() => {
      //     dispatch(updatePasswordOption(confusingComparisonOperatorOption));
      //     var scroll = document.getElementById("chatbotBody");
      //     scroll.scrollTop = scroll.scrollHeight;
      //   }, 2000);
      // case usingComparisonOperator:
      //   return setTimeout(() => {
      //     dispatch(updatePasswordOption(usingComparisonOperatorOption));
      //     var scroll = document.getElementById("chatbotBody");
      //     scroll.scrollTop = scroll.scrollHeight;
      //   }, 2000);
      // case webOption:
      //   return setTimeout(() => {
      //     dispatch(updatePasswordOption(webSubOptions));
      //     var scroll = document.getElementById("chatbotBody");
      //     scroll.scrollTop = scroll.scrollHeight;
      //   }, 2000);
      // case mobileOption:
      //   return setTimeout(() => {
      //     dispatch(updatePasswordOption(mobileSubOptions));
      //     var scroll = document.getElementById("chatbotBody");
      //     scroll.scrollTop = scroll.scrollHeight;
      //   }, 2000);
      // case overloadOption:
      //   return setTimeout(() => {
      //     dispatch(updatePasswordOption(overloadSubOption));
      //     var scroll = document.getElementById("chatbotBody");
      //     scroll.scrollTop = scroll.scrollHeight;
      //   }, 2000);
      default:
        return item;
    }
  };

  const handleSubOptions = (item) => {
    // console.log('item', item)
    let mobileSub =
      chatbotData[0].subOption.solutions[2].subOptions.sub[0].option;
    // let webSub = chatbotData.data[2].internetConnection[1];
    let mobileSubOptions =
      chatbotData[0].subOption.solutions[2].subOptions.sub[0].subSolutions;
    // let webSubOptions = chatbotData.data[2].fixWiFiproblems;
    // console.log("mobileSubOptions", mobileSubOptions);
    // console.log('mobileSubOptions', mobileSubOptions)
    // console.log('mobileSub', mobileSub)
    console.log("item", item.option);
    switch (item.option) {
      case mobileSub:
        return setTimeout(() => {
          dispatch(updateSolution(mobileSubOptions));
          var scroll = document.getElementById("chatbotBody");
          scroll.scrollTop = scroll.scrollHeight;
        }, 1000);
      //   case webSub:
      //     return setTimeout(() => {
      //       dispatch(updateSubOption(webSubOptions));
      //       var scroll = document.getElementById("chatbotBody");
      //       scroll.scrollTop = scroll.scrollHeight;
      //       document.getElementById("solutionsId0").style.backgroundColor =
      //         "#90ca07";
      //       document.getElementById("solutionsId1").style.display = "none";
      //       document.getElementById("didWeHelp").style.display = "block";
      //     }, 2000);
      default:
        return item;
    }
  };

  const handleChange = (e) => {
    //   setComment([e.target.value]);
    //   console.log("sdsd", e.target.value);
    // };
    // const handleClear = () => {
    //   dispatch(clearState());
    //   getApiData();
    //   setTimeout(() => {
    //     getIntroMessages();
    //   }, 1500);
    //   setTimeout(() => {
    //     getOptionMessages();
    //   }, 3000);
  };

  const showSpeakToAgent = () => {
    setSpeakToAgent(true);
  };

  const handleClear = () => {
    let subOptions = chatbotData.map((item) => {
      return item.options;
    });
    dispatch(clearState());
    getApiData();
    setTimeout(() => {
      dispatch(getOptionsMessage(subOptions));
    }, 2500);
    setTimeout(() => {
      getIntroMessages();
    }, 1500);
  };

  return (
    <div>
      <DisplayChatbot
        show={show}
        showChatbot={showChatbot}
        handleOptionsIndex={handleOptionsIndex}
        handleUbdateOption={handleUbdateOption}
        handleSubOptions={handleSubOptions}
        handleClear={handleClear}
        showSpeakToAgent={showSpeakToAgent}
        speakToAgent={speakToAgent}
        // handleChange={handleChange}
        handleOptions={handleOptions}
        selected={selected}
      />
    </div>
  );
}

export default Main;
