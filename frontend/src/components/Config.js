export const bot = {
  
  introMessage: [
    {
nameEmailRequest:["Hi, welcome to Sia chatbot, please tell us your name and email address"]
    },
    {
      message: "How can I help you today",
    },
  ],

  regularOptions: ["I want to learn javascript", "I want to learn python"],
  possibleAnswers: [
    {
      javascript: [""],
      preOptions: [
        "Learn javascript Data-types",
        "How to create variable in Javascript",
        "How to create functions in Javascript",
      ],
    },
    {
      python: [""],
      preOptions: [
        "Learn Python Data-types",
        "How to create variable in Python",
        "How to create functions in Python",
      ],
    },
  ],

  learnJavascriptDataTypes: [
    {
      javascript: [""],
      preOptions: [
        "Boolean type",
        "Null type",
        "Undefined type",
        "Number type",
        "BigInt type",
        "String type",
        "Symbol type",
        "Objects",
      ],
    },
  ],
  learnPythonDataTypes: [
    {
      python: [""],
      preOptions: [
        "Boolean type",
        "Null type",
        "Undefined type",
        "Number type",
        "String type",
        "Objects",
      ],
    },
  ],

  possibleAnswersJavascriptDataTypes: [
    {
      javascript: [""],
      booleanExplanation: [
        "Javascript Booleans",
        "Boolean Data Type (Visual Basic) contain two-state values such as true/false, yes/no, or on/off.",
        "In computer science, the Boolean (sometimes shortened to Bool) is a data type that has one of two possible values (usually denoted true and false) which is intended to represent the two truth values of logic and Boolean algebra.",
        "Example:",
        "var YES = true",
        "var NO = false",
        "if(YES) {",
        'alert("This code block will be executed")',
        "}",
        "if(NO) {",
        '    alert("This code block will not be executed") ',
        "}",
      ],
    },
    {
    python: [""],
      booleanExplanation: [
        "Javascript Booleans",
        "Boolean Data Type (Visual Basic) contain two-state values such as true/false, yes/no, or on/off.",
        "In computer science, the Boolean (sometimes shortened to Bool) is a data type that has one of two possible values (usually denoted true and false) which is intended to represent the two truth values of logic and Boolean algebra.",
        "Example:",
        "var YES = true",
        "var NO = false",
        "if(YES) {",
        'alert("This code block will be executed")',
        "}",
        "if(NO) {",
        '    alert("This code block will not be executed") ',
        "}",
      ],
    },

    {
      javascript: [""],
      nullExplanation: [
        "Javascript Null",
        "In JavaScript null is \"nothing\". It is supposed to be something that doesn't exist. Unfortunately, in JavaScript, the data type of null is an object. You can consider it a bug in JavaScript that typeof null is an object." 
      ],
    },
    {
    python: [""],
      nullExplanation: [
        "Javascript Booleans",
        "Boolean Data Type (Visual Basic) contain two-state values such as true/false, yes/no, or on/off.",
        "In computer science, the Boolean (sometimes shortened to Bool) is a data type that has one of two possible values (usually denoted true and false) which is intended to represent the two truth values of logic and Boolean algebra.",
        "Example:",
        "var YES = true",
        "var NO = false",
        "if(YES) {",
        'alert("This code block will be executed")',
        "}",
        "if(NO) {",
        '    alert("This code block will not be executed") ',
        "}",
      ],
    },
     ],
  possibleAnswersPythonDataTypes: [
    {
      preOptions: [],
    },
  ],
};
