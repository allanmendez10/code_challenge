import User from "models/modules/User.interface";

export default interface UserState{
    user: User | null
    loggedIn:false
    userError:null
}