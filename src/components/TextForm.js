import React, { useState } from "react";

export default function TextForm({ heading, placeHolder, mode, setMode }) {
  const [inputText, setInputText] = useState("");

  function handleUpperCaseEvent() {
    setInputText(inputText.toUpperCase());
  }

  function handleLowerCaseEvent() {
    setInputText(inputText.toLowerCase());
  }

  function handleTexttoSpeechEvent() {
    const speech = new SpeechSynthesisUtterance();
    const message = inputText;
    speech.lang = "eng";
    speech.text = message;
    window.speechSynthesis.speak(speech);
  }

  function handleCopyEvent() {
    navigator.clipboard.writeText(inputText);
    alert("Text Copied");
  }

  let style = {};

  if (mode.displayText === "Dark") {
    style = { color: "Black", backgroundColor: "White" };
  }

  if (mode.displayText === "Light") {
    style = { color: "White", backgroundColor: "Black" };
  }

  return (
    <>
      <div
        className="container-fluid"
        style={{ color: style.color, backgroundColor: style.backgroundColor }}
      >
        <div className="container">
          <div className="mb-3">
            <br />
            <h4>{heading}</h4>
            <label for="userInputArea" className="form-label"></label>
            <textarea
              style={{
                color: style.color,
                backgroundColor: style.backgroundColor,
              }}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={placeHolder}
              className="form-control"
              id="textBox"
              rows="8"
            ></textarea>
          </div>
          <button
            className="btn btn-primary mx-2"
            onClick={handleUpperCaseEvent}
          >
            Convert to Uppercase
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={handleLowerCaseEvent}
          >
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={handleTexttoSpeechEvent}
          >
            Text to Speech
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopyEvent}>
            Copy text
          </button>
        </div>
        <div className="container my-4">
          <h4>Summary</h4>
          {!inputText ? (
            "Enter the text to get the statistics"
          ) : (
            <p>
              {inputText.replace(/\s+/g, " ").split(" ").length} words.{" "}
              {inputText.length} characters.{" "}
              {Number(inputText.replace(/\s+/g, " ").split(" ").length) * 0.008}{" "}
              minutes read
            </p>
          )}
        </div>
        <div className="container my-4">
          <h4>Preview</h4>
          {!inputText ? (
            "Enter the text to get the preview"
          ) : (
            <p>{inputText}</p>
          )}
        </div>
      </div>
    </>
  );
}
