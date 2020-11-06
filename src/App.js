import React, { useState, useEffect  } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styles from './App.module.css';
import Header from "./components/Header";
import PostsContainer from "./components/posts/PostsContainer";
import initUser from "./util/initUser";

export const GlobalContext = React.createContext({
  user: null,
  user_id: null
});

function App() {
  const [userObj, updateUser]=useState({
    user: null,
    user_id: null
  });
  useEffect(()=>{
    if(!userObj.user || !userObj.user_id) initUser((newUser,newUserId)=>{
      updateUser({
        user: newUser,
        user_id: newUserId
      });
    });
  })

  return (
    <GlobalContext.Provider value={userObj}>
      <div className={styles.main}>
        <Header />
        <Router>
          <Route exact path={'/'}>
            <Redirect to={'/posts/1'} />
          </Route>
          <Route exact path={'/posts/:page'}>
            <PostsContainer />
          </Route>
          <Route path={'/post/:post_id'} />
        </Router>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
