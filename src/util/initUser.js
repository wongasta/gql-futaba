import add_user from "../mutations/add_user";

export default function initUser(environment,cb){
  const LSUser = localStorage.getItem("user"), LSUserId = localStorage.getItem("user_id");
  if(LSUser && LSUserId) return cb(LSUser, LSUserId);
  add_user(environment, ({id:user, user_id})=>{
    localStorage.setItem('user',user);
    localStorage.setItem('user_id',user_id);
    return cb(user,user_id);
  });
}