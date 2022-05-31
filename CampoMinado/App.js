import React, {useReducer} from 'react';
import {StyleSheet, View, Alert} from 'react-native';
import params from './src/params';
import MineField from './src/components/MineField';
import Header from './src/components/Header';
import LevelSelection from './src/screens/LevelSelection';
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines,
  invertFlag,
  flagsUsed,
} from './src/functions';

export default () => {
  const cols = params.getColumnsAmount();
  const rows = params.getRowsAmount();

  const minesAmount = () => {
    // const rows = params.getRowsAmount();
    // const cols = params.getColumnsAmount();
    return Math.ceil(cols * rows * params.difficultLevel);
  };

  // const [showLevelSelection, setShowLevelSelection] = useState(false);
  // const [lost, setLost] = useState(false);
  // const [won, setWon] = useState(false);
  // const [board, setBoard] = useState(
  //   createMinedBoard(rows, cols, minesAmount()),
  // );
  const inicialState = {
    board: createMinedBoard(rows, cols, minesAmount()),
    won: false,
    lost: false,
    showLevelSelection: false,
  };

  const [state, updateState] = useReducer(
    (state, updates) => ({
      ...state,
      ...updates,
    }),
    inicialState,
  );

  const createState = () => {
    // const cols = params.getColumnsAmount();
    // const rows = params.getRowsAmount();
    updateState({
      board: createMinedBoard(rows, cols, minesAmount()),
      won: false,
      lost: false,
      showLevelSelection: false,
    });
  };

  const onOpenField = (row, column) => {
    const board = cloneBoard(state.board);
    openField(board, row, column);
    const lost = hadExplosion(board);
    const won = wonGame(board);

    if (lost) {
      showMines(board);
      Alert.alert('Perdeeeeu!', 'Que buuuurro!');
    }

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!');
    }

    updateState({board, lost, won});
  };

  const onSelectField = (row, column) => {
    const board = cloneBoard(state.board);
    invertFlag(board, row, column);
    const won = wonGame(board);

    if (won) {
      Alert.alert('Parabéns', 'Você Venceu!');
    }
    updateState({board, won});
  };

  const onLevelSelected = level => {
    params.difficultLevel = level;
    createState();
  };

  return (
    <View style={styles.container}>
      <LevelSelection
        isVisible={state.showLevelSelection}
        onLevelSelected={onLevelSelected}
        onCancel={() => updateState({showLevelSelection: false})}
      />
      <Header
        flagsLeft={minesAmount() - flagsUsed(state.board)}
        onNewGame={createState}
        onFlagPress={() => updateState({showLevelSelection: true})}
      />
      <View style={styles.board}>
        <MineField
          board={state.board}
          onOpenField={onOpenField}
          onSelectField={onSelectField}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA',
  },
});
