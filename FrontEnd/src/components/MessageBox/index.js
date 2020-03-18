import React from 'react';
import './styles.css';
import ReactEmoji from 'react-emoji';

const MessageBox = ({ message: { text, name }, sameName }) => {
  let isSentByCurrentPlayer = false;

  const trimmedName = sameName.trim().toLowerCase();

  if (name !== trimmedName) {
    isSentByCurrentPlayer = true;
  }

  return isSentByCurrentPlayer ? (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorRed">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText">{name}</p>
    </div>
  ) : (
    <div className="messageContainer justifyEnd">
      <div className="messageBox backgroundPurple">
        <p className="messageText colorPurple">{ReactEmoji.emojify(text)}</p>
      </div>
      <p className="sentText">{'eu  '}</p>
    </div>
  );
};

export default MessageBox;
