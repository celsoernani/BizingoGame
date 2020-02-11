import React from 'react';
import './styles.css';
import ReactEmoji from 'react-emoji';

const MessageBox = ({ message: { text, player }, name }) => {
  let isSentByCurrentPlayer = false;

  const trimmedName = name.trim().toLowerCase();

  if(player === trimmedName) {
    isSentByCurrentPlayer = true;
  }

  return (
    isSentByCurrentPlayer
      ? (
        <div className="messageContainer justifyEnd">
          <div className="messageBox backgroundPurple">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <div className="messageBox backgroundLight">
              <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentText">{player}</p>
          </div>
        )
  );
}

export default MessageBox;
