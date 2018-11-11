import {
  SMALLINCREMENT,
  MEDIUMINCREMENT,
  LARGEINCREMENT,
  BOXINCREMENT,
  SMALLDECREMENT,
  MEDIUMDECREMENT,
  LARGEDECREMENT,
  BOXDECREMENT,
  SMALLCHANGE,
  MEDIUMCHANGE,
  LARGECHANGE,
  BOXCHANGE,
  BOXESCOUNT,
} from '../constants';


export const smallIncrement = () => ({ type: SMALLINCREMENT });
export const mediumIncrement = () => ({ type: MEDIUMINCREMENT });
export const largeIncrement = () => ({ type: LARGEINCREMENT });
export const boxIncrement = () => ({ type: BOXINCREMENT });

export const smallDecrement = () => ({ type: SMALLDECREMENT });
export const mediumDecrement = () => ({ type: MEDIUMDECREMENT });
export const largeDecrement = () => ({ type: LARGEDECREMENT });
export const boxDecrement = () => ({ type: BOXDECREMENT });

export const smallCountChange = value => ({ type: SMALLCHANGE, value });
export const mediumCountChange = value => ({ type: MEDIUMCHANGE, value });
export const largeCountChange = value => ({ type: LARGECHANGE, value });
export const boxLengthChange = value => ({ type: BOXCHANGE, value });

export const boxesCount = value => ({ type: BOXESCOUNT, value });
