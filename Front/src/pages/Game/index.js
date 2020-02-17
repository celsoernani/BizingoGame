import React, {useEffect, useState} from 'react';
import Board from './../../components/Board';
import {toast} from 'react-toastify';
import socket from '../../conection/socket';

export default function Game({player, initialPieces, initialTriangles}) {
  const [selectedPiece, setSelectedPiece] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [stateGame, setstateGame] = useState({
    players: [],
    pieces: initialPieces,
    triangles: initialTriangles
  });

useEffect(() => {
  socket.on('players', ({players}) => {
    const indexPlayer0 = players.findIndex(p => p.side === 0)
    players[indexPlayer0].turn = true;
    if(players.length > 1 ){
      const indexPlayer1 = players.findIndex(p => p.side === 1)
      players[indexPlayer1].turn = false;
      toast.info(`O jogador ${players[indexPlayer0].name} quem começa o jogo.`);
    }
    setstateGame({...stateGame, players});
  });
  socket.on('MOVE_PIECES', ({gameState}) => {
    setstateGame(gameState);
  });

  socket.on('OVER', ({gameState}) => {
    setGameOver(true);
    setstateGame(gameState);
  });
  socket.on('RESET', ({gameState}) => {
    setstateGame(gameState);
    setGameOver(false);
    toast.success('Jogo reiniciado com sucesso.')
  });
  return () => {
    socket.emit('disconnect');
    socket.off();
  }
});
const restartGame = () => {
  setstateGame({...stateGame, gameOver: false});
  setGameOver(false);
  const reset = ({
    ...stateGame,
    gameOver:false,
    triangles:[{available:false,label:0,top:40,left:405,side:0},{available:false,label:1,top:40,left:455,side:1},{available:false,label:2,top:40,left:505,side:0},{available:false,label:3,top:40,left:555,side:1},{available:false,label:4,top:40,left:605,side:0},{available:false,label:5,top:85,left:355,side:0},{available:false,label:6,top:85,left:405,side:1},{available:false,label:7,top:85,left:455,side:0},{available:false,label:8,top:85,left:505,side:1},{available:false,label:9,top:85,left:555,side:0},{available:false,label:10,top:85,left:605,side:1},{available:false,label:11,top:85,left:655,side:0},{available:false,label:12,top:130,left:305,side:0},{available:false,label:13,top:130,left:355,side:1},{available:false,label:14,top:130,left:405,side:0,piece:{id:0,alive:true,captain:false,side:0,labelPosition:14}},{available:false,label:15,top:130,left:455,side:1},{available:false,label:16,top:130,left:505,side:0,piece:{id:1,alive:true,captain:false,side:0,labelPosition:16}},{available:false,label:17,top:130,left:555,side:1},{available:false,label:18,top:130,left:605,side:0,piece:{id:2,alive:true,captain:false,side:0,labelPosition:18}},{available:false,label:19,top:130,left:655,side:1},{available:false,label:20,top:130,left:705,side:0},{available:false,label:21,top:175,left:255,side:0},{available:false,label:22,top:175,left:305,side:1},{available:false,label:23,top:175,left:355,side:0,piece:{id:3,alive:true,captain:false,side:0,labelPosition:23}},{available:false,label:24,top:175,left:405,side:1},{available:false,label:25,top:175,left:455,side:0,piece:{id:4,alive:true,captain:false,side:0,labelPosition:25}},{available:false,label:26,top:175,left:505,side:1},{available:false,label:27,top:175,left:555,side:0,piece:{id:5,alive:true,captain:false,side:0,labelPosition:27}},{available:false,label:28,top:175,left:605,side:1},{available:false,label:29,top:175,left:655,side:0,piece:{id:6,alive:true,captain:false,side:0,labelPosition:29}},{available:false,label:30,top:175,left:705,side:1},{available:false,label:31,top:175,left:755,side:0},{available:false,label:32,top:220,left:205,side:0},{available:false,label:33,top:220,left:255,side:1},{available:false,label:34,top:220,left:305,side:0,piece:{id:7,alive:true,captain:false,side:0,labelPosition:34}},{available:false,label:35,top:220,left:355,side:1},{available:false,label:36,top:220,left:405,side:0,piece:{id:8,alive:true,captain:false,side:0,labelPosition:36}},{available:false,label:37,top:220,left:455,side:1},{available:false,label:38,top:220,left:505,side:0,piece:{id:9,alive:true,captain:false,side:0,labelPosition:38}},{available:false,label:39,top:220,left:555,side:1},{available:false,label:40,top:220,left:605,side:0,piece:{id:10,alive:true,captain:false,side:0,labelPosition:40}},{available:false,label:41,top:220,left:655,side:1},{available:false,label:42,top:220,left:705,side:0,piece:{id:11,alive:true,captain:false,side:0,labelPosition:42}},{available:false,label:43,top:220,left:755,side:1},{available:false,label:44,top:220,left:805,side:0},{available:false,label:45,top:265,left:155,side:0},{available:false,label:46,top:265,left:205,side:1},{available:false,label:47,top:265,left:255,side:0,piece:{id:12,alive:true,captain:false,side:0,labelPosition:47}},{available:false,label:48,top:265,left:305,side:1},{available:false,label:49,top:265,left:355,side:0,piece:{id:13,alive:true,captain:true,side:0,labelPosition:49}},{available:false,label:50,top:265,left:405,side:1},{available:false,label:51,top:265,left:455,side:0,piece:{id:14,alive:true,captain:false,side:0,labelPosition:51}},{available:false,label:52,top:265,left:505,side:1},{available:false,label:53,top:265,left:555,side:0,piece:{id:15,alive:true,captain:false,side:0,labelPosition:53}},{available:false,label:54,top:265,left:605,side:1},{available:false,label:55,top:265,left:655,side:0,piece:{id:16,alive:true,captain:true,side:0,labelPosition:55}},{available:false,label:56,top:265,left:705,side:1},{available:false,label:57,top:265,left:755,side:0,piece:{id:17,alive:true,captain:false,side:0,labelPosition:57}},{available:false,label:58,top:265,left:805,side:1},{available:false,label:59,top:265,left:855,side:0},{available:false,label:60,top:310,left:105,side:0},{available:false,label:61,top:310,left:155,side:1},{available:false,label:62,top:310,left:205,side:0},{available:false,label:63,top:310,left:255,side:1},{available:false,label:64,top:310,left:305,side:0},{available:false,label:65,top:310,left:355,side:1},{available:false,label:66,top:310,left:405,side:0},{available:false,label:67,top:310,left:455,side:1},{available:false,label:68,top:310,left:505,side:0},{available:false,label:69,top:310,left:555,side:1},{available:false,label:70,top:310,left:605,side:0},{available:false,label:71,top:310,left:655,side:1},{available:false,label:72,top:310,left:705,side:0},{available:false,label:73,top:310,left:755,side:1},{available:false,label:74,top:310,left:805,side:0},{available:false,label:75,top:310,left:855,side:1},{available:false,label:76,top:310,left:905,side:0},{available:false,label:77,top:355,left:55,side:0},{available:false,label:78,top:355,left:105,side:1},{available:false,label:79,top:355,left:155,side:0},{available:false,label:80,top:355,left:205,side:1,piece:{id:18,alive:true,captain:false,side:1,labelPosition:80}},{available:false,label:81,top:355,left:255,side:0},{available:false,label:82,top:355,left:305,side:1,piece:{id:19,alive:true,captain:true,side:1,labelPosition:82}},{available:false,label:83,top:355,left:355,side:0},{available:false,label:84,top:355,left:405,side:1,piece:{id:20,alive:true,captain:false,side:1,labelPosition:84}},{available:false,label:85,top:355,left:455,side:0},{available:false,label:86,top:355,left:505,side:1,piece:{id:21,alive:true,captain:false,side:1,labelPosition:86}},{available:false,label:87,top:355,left:555,side:0},{available:false,label:88,top:355,left:605,side:1,piece:{id:22,alive:true,captain:false,side:1,labelPosition:88}},{available:false,label:89,top:355,left:655,side:0},{available:false,label:90,top:355,left:705,side:1,piece:{id:23,alive:true,captain:true,side:1,labelPosition:90}},{available:false,label:91,top:355,left:755,side:0},{available:false,label:92,top:355,left:805,side:1,piece:{id:24,alive:true,captain:false,side:1,labelPosition:92}},{available:false,label:93,top:355,left:855,side:0},{available:false,label:94,top:355,left:905,side:1},{available:false,label:95,top:355,left:955,side:0},{available:false,label:96,top:400,left:5,side:0},{available:false,label:97,top:400,left:55,side:1},{available:false,label:98,top:400,left:105,side:0},{available:false,label:99,top:400,left:155,side:1},{available:false,label:100,top:400,left:205,side:0},{available:false,label:101,top:400,left:255,side:1,piece:{id:25,alive:true,captain:false,side:1,labelPosition:101}},{available:false,label:102,top:400,left:305,side:0},{available:false,label:103,top:400,left:355,side:1,piece:{id:26,alive:true,captain:false,side:1,labelPosition:103}},{available:false,label:104,top:400,left:405,side:0},{available:false,label:105,top:400,left:455,side:1,piece:{id:27,alive:true,captain:false,side:1,labelPosition:105}},{available:false,label:106,top:400,left:505,side:0},{available:false,label:107,top:400,left:555,side:1,piece:{id:28,alive:true,captain:false,side:1,labelPosition:107}},{available:false,label:108,top:400,left:605,side:0},{available:false,label:109,top:400,left:655,side:1,piece:{id:29,alive:true,captain:false,side:1,labelPosition:109}},{available:false,label:110,top:400,left:705,side:0},{available:false,label:111,top:400,left:755,side:1,piece:{id:30,alive:true,captain:false,side:1,labelPosition:111}},{available:false,label:112,top:400,left:805,side:0},{available:false,label:113,top:400,left:855,side:1},{available:false,label:114,top:400,left:905,side:0},{available:false,label:115,top:400,left:955,side:1},{available:false,label:116,top:400,left:1005,side:0},{available:false,label:117,top:445,left:5,side:1},{available:false,label:118,top:445,left:55,side:0},{available:false,label:119,top:445,left:105,side:1},{available:false,label:120,top:445,left:155,side:0},{available:false,label:121,top:445,left:205,side:1},{available:false,label:122,top:445,left:255,side:0},{available:false,label:123,top:445,left:305,side:1,piece:{id:31,alive:true,captain:false,side:1,labelPosition:123}},{available:false,label:124,top:445,left:355,side:0},{available:false,label:125,top:445,left:405,side:1,piece:{id:32,alive:true,captain:false,side:1,labelPosition:125}},{available:false,label:126,top:445,left:455,side:0},{available:false,label:127,top:445,left:505,side:1,piece:{id:33,alive:true,captain:false,side:1,labelPosition:127}},{available:false,label:128,top:445,left:555,side:0},{available:false,label:129,top:445,left:605,side:1,piece:{id:34,alive:true,captain:false,side:1,labelPosition:129}},{available:false,label:130,top:445,left:655,side:0},{available:false,label:131,top:445,left:705,side:1,piece:{id:35,alive:true,captain:false,side:1,labelPosition:131}},{available:false,label:132,top:445,left:755,side:0},{available:false,label:133,top:445,left:805,side:1},{available:false,label:134,top:445,left:855,side:0},{available:false,label:135,top:445,left:905,side:1},{available:false,label:136,top:445,left:955,side:0},{available:false,label:137,top:445,left:1005,side:1},{available:false,label:138,top:490,left:55,side:1},{available:false,label:139,top:490,left:105,side:0},{available:false,label:140,top:490,left:155,side:1},{available:false,label:141,top:490,left:205,side:0},{available:false,label:142,top:490,left:255,side:1},{available:false,label:143,top:490,left:305,side:0},{available:false,label:144,top:490,left:355,side:1},{available:false,label:145,top:490,left:405,side:0},{available:false,label:146,top:490,left:455,side:1},{available:false,label:147,top:490,left:505,side:0},{available:false,label:148,top:490,left:555,side:1},{available:false,label:149,top:490,left:605,side:0},{available:false,label:150,top:490,left:655,side:1},{available:false,label:151,top:490,left:705,side:0},{available:false,label:152,top:490,left:755,side:1},{available:false,label:153,top:490,left:805,side:0},{available:false,label:154,top:490,left:855,side:1},{available:false,label:155,top:490,left:905,side:0},{available:false,label:156,top:490,left:955,side:1}],
    pieces:  [
      //player 1 InitialState
      {
        id: 0,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 14
      },
      {
        id: 1,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 16
      },
      {
        id: 2,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 18
      },
      {
        id: 3,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 23
      },
      {
        id: 4,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 25
      },
      {
        id: 5,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 27
      },
      {
        id: 6,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 29
      },

      {
        id: 7,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 34
      },
      {
        id: 8,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 36
      },
      {
        id: 9,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 38
      },
      {
        id: 10,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 40
      },
      {
        id: 11,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 42
      },
      {
        id: 12,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 47
      },
      {
        id: 13,
        alive:true,
        captain:true,
        side: 0,
        labelPosition: 49
      },
      {
        id: 14,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 51
      },
      {
        id: 15,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 53
      },
      {
        id: 16,
        alive:true,
        captain:true,
        side: 0,
        labelPosition: 55
      },
      {
        id: 17,
        alive:true,
        captain:false,
        side: 0,
        labelPosition: 57
      },

      //player 2 InitialState
      {
        id: 18,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 80
      },
      {
        id: 19,
        alive:true,
        captain:true,
        side: 1,
        labelPosition: 82
      },
      {
        id: 20,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 84
      },
      {
        id: 21,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 86
      },
      {
        id: 22,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 88
      },
      {
        id: 23,
        alive:true,
        captain:true,
        side: 1,
        labelPosition: 90
      },
      {
        id: 24,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 92
      },

      {
        id: 25,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 101
      },
      {
        id: 26,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 103
      },
      {
        id: 27,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 105
      },
      {
        id: 28,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 107
      },
      {
        id: 29,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 109
      },
      {
        id: 30,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 111
      },
      {
        id: 31,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 123
      },
      {
        id: 32,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 125
      },
      {
        id: 33,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 127
      },
      {
        id: 34,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 129
      },
      {
        id: 35,
        alive:true,
        captain:false,
        side: 1,
        labelPosition: 131
      },

    ]
  })
  setstateGame(reset);
  socket.emit('RESET_GAME', reset);
  toast.success('Jogo reiniciado com sucesso.')
};
const checkKill = (newTriangle,piecesAux,pieceIndex) => {
    const trianglesAux = stateGame.triangles;
    const triangleDown = trianglesAux.find(t => t.top === newTriangle.top + 45 && newTriangle.left === t.left);
    const triangleTop = trianglesAux.find(t => t.top === newTriangle.top - 45 && newTriangle.left === t.left);
    const triangleRight = trianglesAux.find(t => t.left === newTriangle.left - 50 && newTriangle.top === t.top);
    const triangleLeft = trianglesAux.find(t => t.left === newTriangle.left + 50 && newTriangle.top === t.top);

    if('piece' in triangleTop && 'piece' in triangleDown  &&
       'piece' in triangleLeft && 'piece' in triangleRight){
        piecesAux[pieceIndex].alive = false;
        toast.info('Você perdeu a peça movimentada.')
    }else{
      return true
    }
};
const checkKillAll = () => {
  const auxPieces = stateGame.pieces;
  const auxTriangles = stateGame.triangles;
  stateGame.triangles.forEach((triangle)=> {
    if('piece' in triangle) {
      const triangleDown =  stateGame.triangles.find(t => t.top === triangle.top + 45 && triangle.left === t.left);
      const triangleTop =  stateGame.triangles.find(t => t.top === triangle.top - 45 && triangle.left === t.left);
      const triangleRight =  stateGame.triangles.find(t => t.left === triangle.left - 50 && triangle.top === t.top);
      const triangleLeft =  stateGame.triangles.find(t => t.left === triangle.left + 50 && triangle.top === t.top);
    if(triangleDown && triangleTop && triangleRight && triangleLeft){
      if('piece' in triangleTop && 'piece' in triangleDown  &&
          'piece' in triangleLeft && 'piece' in triangleRight){
          const killPiece =  stateGame.pieces.find(p => p.labelPosition === triangle.label);
          delete triangle.piece;
          killPiece.alive = false;
          setstateGame({...stateGame, pieces: [...auxPieces,killPiece ], triangles: [...auxTriangles, triangle] })
          socket.emit('CHANGE_GAME', stateGame);
          toast.info("Peça morta");
      }else{

      }
    }
  }
})
};
const alterPositionPiece = (newPiece, newTriangle) => {
    const pieceIndex = stateGame.pieces.findIndex(p => p.id === newPiece.id);
    let piecesAux = stateGame.pieces;
    piecesAux[pieceIndex] = newPiece;
    //mudando o turno
    const playerIndexTurn = stateGame.players.findIndex(pl => pl.side === player.side);
    let playersAux = stateGame.players;
    if(playersAux.length > 1){
      if(playerIndexTurn === 0){
        playersAux[0].turn = false;
        playersAux[1].turn = true;
      }else{
        playersAux[0].turn = true;
        playersAux[1].turn = false;
      }
    checkKill(newTriangle,piecesAux,pieceIndex);
    setstateGame({...stateGame, pieces: piecesAux, players:playersAux })
    }else{
      toast.error('Espere seu amigo para jogar.');
    }

};
const removePieceInTriangle = (triangleWithPiece, positionPieceOld) => {
    positionPieceOld.labelPosition = -1;
    const triangleIndex = stateGame.triangles.findIndex(t => t.label === triangleWithPiece.label);
    const trianglesAux = stateGame.triangles;
    delete trianglesAux[triangleIndex].piece;
    setstateGame({
      ...stateGame,
       triangles: trianglesAux
      });
};
const prepMove = (positionTriangle, positionPiece) => {
  const activatePlayer = stateGame.players.findIndex(p => p.turn);
  if(player.side ===  stateGame.players[activatePlayer].side && stateGame.players[activatePlayer].turn){
    if(positionPiece){
      if(positionPiece.side === activatePlayer) {
        setSelectedPiece(positionPiece);
        removePieceInTriangle(positionTriangle,positionPiece);
        verifyGameOver();
      }else{
        toast.error("Você só pode se movimentar suas peças.")
      }

    }else{
      if('id' in selectedPiece){
          if(selectedPiece.side === positionTriangle.side){
            selectedPiece.labelPosition = positionTriangle.label;
            alterPositionPiece(selectedPiece, positionTriangle);
          }else{
            toast.error("Você só pode se movimentar para triangulos da mesma cor.")
          }
          socket.emit('CHANGE_GAME', stateGame);
          checkKillAll();
          verifyGameOver();

        }else{
          toast.error('Selecione uma peça.');
        }
    }
  }else{
    toast.error('Não é sua vez.')
  }

};
const verifyGameOver = () =>{
  const auxPieces = stateGame.pieces;
  var count = 0; //tem que ser 17 para dar game over
  for(var i = 0; i < auxPieces.length; i++) {
    if (auxPieces[i].alive == false && auxPieces[i].side == player.side ) {
        count = count + 1;
        if(count === 18){
          setstateGame({...stateGame, gameOver: true})
          setGameOver(true)
          socket.emit('GAME_OVER', stateGame);
          toast.warn('Você perdeu o jogo.')
        }
    }
  }
}
  return (
    <div style = {{flex: 1, flexDirection: 'column'}}>

      { gameOver === true  ? <h4 style = {{ margin: 0, alignSelf: 'center', color: 'white', marginLeft: '42%'}}>
              O JOGO ACABOU ! </h4>: null }
      {
       stateGame.triangles.length > 0 && stateGame.pieces.length > 0 &&
       <Board triangles = {stateGame.triangles} restartGame = {restartGame} movePiece = {prepMove}
              pieces = {stateGame.pieces}  />
      }
    </div>
  );
}
