import Rank from './modules/Rank.interface';
import User from './modules/User.interface';

export default interface Action {
  type: string;
  payload?: null | boolean | number | User | Rank | Rank[];
}