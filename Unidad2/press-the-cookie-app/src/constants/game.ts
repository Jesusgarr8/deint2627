export type Difficulty = 'facil' | 'normal' | 'dificil';

export const GAME_TIME: Record<Difficulty, number> = {
  facil: 15,
  normal: 10,
  dificil: 5,
};