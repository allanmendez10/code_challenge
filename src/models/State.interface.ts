import RankState from "./states/RankState.interface";
import UserState from "./states/UserState.interface";

export default interface State {
    ranks: RankState
    user: UserState
}