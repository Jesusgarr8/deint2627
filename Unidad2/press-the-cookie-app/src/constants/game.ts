export type Difficulty = 'facil' | 'normal' | 'dificil' | 'extremo';

export const GAME_TIME: Record<Difficulty, number> = {
  facil: 15,
  normal: 8,
  dificil: 5,
  extremo: 3,
};