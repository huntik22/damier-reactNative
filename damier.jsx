import React from 'react';
import { View, StyleSheet } from 'react-native';

const Damier = () => {
  const Row = (rowIndex) => {
    const cells = [];
    for (let colIndex = 0; colIndex < 10; colIndex++) {
      const cellColor = !((rowIndex + colIndex) % 2 === 0) ? 'white' : 'black';
      cells.push(<View key={colIndex} style={[styles.cell, { backgroundColor: cellColor }]} />);
    }
    return cells;
  };

  const Board = () => {
    const rows = [];
    for (let rowIndex = 0; rowIndex < 10; rowIndex++) {
      rows.push(<View key={rowIndex} style={styles.row}>{Row(rowIndex)}</View>);
    }
    return rows;
  };

  return <View style={styles.container}>{Board()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: 30,
    height: 30,
  },
});

export default Damier;
