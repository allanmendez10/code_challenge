import Rank from "models/modules/Rank.interface";

export default interface RankState{
    ranks: Rank[] | null
    loaded: false
    currentRank: Rank| null
    rankError: null
}