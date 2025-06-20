export type CellType =
  | 'Start'
  | 'Cash'
  | 'VIP'
  | 'Box'
  | 'Gold'
  | 'Star'
  | 'Pickaxe'
  | 'Truck'
  | 'Dice'
  | 'Finish'  
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