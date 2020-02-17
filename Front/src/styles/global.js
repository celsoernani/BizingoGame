import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Sriracha&display=swap');
  body {
    background-color: #BC97CC;
    font-family: 'Sriracha', cursive;
    margin: 0;
  }
  button {
    cursor: pointer;
  }

/* width */
::-webkit-scrollbar {
  width: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #201A23 ;
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #631d76;
}
`;
