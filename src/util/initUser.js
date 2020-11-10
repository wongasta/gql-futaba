//@flow
import add_user from "../mutations/add_user";
import type {Environment as EnvironmentType} from 'relay-runtime';
type InitUserCb = (string, string)=>void

export default (function initUser(environment:EnvironmentType,cb:InitUserCb){
  const LSUser = localStorage.getItem("user"), LSUserId = localStorage.getItem("user_id");
  if(LSUser && LSUserId) return cb(LSUser, LSUserId);
  add_user(environment, ({id:user, user_id})=>{
    localStorage.setItem('user',user);
    localStorage.setItem('user_id',user_id);
    return cb(user,user_id);
  });
}: (EnvironmentType, InitUserCb)=>void)