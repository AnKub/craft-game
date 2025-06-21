export type CellType =
  | 'start'
  | 'cash'
  | 'vip'
  | 'box'
  | 'gold'
  | 'star'
  | 'pickaxe'
  | 'truck'
  | 'dice'
  | ''


  export interface CellData {
  id: number;
  type: CellType;
  position: { row: number; col: number };
}

export interface PlayerState {
  position: number;
  rollsLeft: number;
}