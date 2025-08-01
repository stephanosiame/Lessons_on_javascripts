// create a new  high score board
function createScoreBoard(){
    return {
        'The Best Ever': 1000000
    };
}

// To add player to a score board.
function addPlayer(scoreBoard, player, score){
    scoreBoard[player] = score;
    return scoreBoard;
}

// Remove   player from score board.
function removePlayer(scoreBoard, player){
    delete scoreBoard[player];
    return scoreBoard;
}

// Increase player's score
function updateScore(scoreBoard, player, scoreToAdd){
    if(scoreBoard.hasOwnProperty(player)){
        scoreBoard[player] += scoreToAdd;
    }
    return scoreBoard;
}

// Apply Monday Bonus Points.
function applyMondayBonus(scoreBoard){
    for(const player in scoreBoard){
        scoreBoard[player] += 100;
    }
    return scoreBoard;
}
// Test cases
function runTests() {
    // Test createScoreBoard
    const board1 = createScoreBoard();
    console.assert(board1['The Best Ever'] === 1000000, 'Test createScoreBoard failed');
  
    // Test addPlayer
    const board2 = addPlayer({ 'Dave Thomas': 0 }, 'José Valim', 486373);
    console.assert(board2['José Valim'] === 486373 && board2['Dave Thomas'] === 0, 'Test addPlayer failed');
  
    // Test removePlayer - player exists
    const board3 = removePlayer({ 'Dave Thomas': 0 }, 'Dave Thomas');
    console.assert(!('Dave Thomas' in board3), 'Test removePlayer (existing player) failed');
  
    // Test removePlayer - player does not exist
    const board4 = removePlayer({ 'Dave Thomas': 0 }, 'Rose Fanaras');
    console.assert(board4['Dave Thomas'] === 0, 'Test removePlayer (non-existing player) failed');
  
    // Test updateScore
    const board5 = updateScore({ 'Freyja Ćirić': 12771008 }, 'Freyja Ćirić', 73);
    console.assert(board5['Freyja Ćirić'] === 12771081, 'Test updateScore failed');
  
    // Test applyMondayBonus
    const board6 = {
      'Dave Thomas': 44,
      'Freyja Ćirić': 539,
      'José Valim': 265,
    };
    applyMondayBonus(board6);
    console.assert(
      board6['Dave Thomas'] === 144 &&
      board6['Freyja Ćirić'] === 639 &&
      board6['José Valim'] === 365,
      'Test applyMondayBonus failed'
    );
  
    console.log('✅ All tests passed!');
  }
  
  // Run the tests
  runTests();