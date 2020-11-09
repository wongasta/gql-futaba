import React, { useState, useEffect  } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styles from './App.module.css';
import Header from "./components/Header";
import PostsContainer from "./components/posts/PostsContainer";
import initUser from "./util/initUser";
import PostViewContainer from "./components/post/PostViewContainer";
import {GlobalContext} from "./GlobalContext";
import typeof EnvironmentType from "./util/relayEnv";

type Props={
  environment: EnvironmentType
}

function App({environment}: Props) {
  const [userObj, updateUser]=useState({
    user: null,
    user_id: null
  });
  useEffect(()=>{
    if(!userObj.user || !userObj.user_id) initUser(environment,(newUser,newUserId)=>{
      updateUser({
        user: newUser,
        user_id: newUserId
      });
    });
  })

  return (
    <GlobalContext.Provider value={userObj}>
      <div className={styles.main}>
        <Router>
          <Header />
          <Route exact path={'/'}>
            <Redirect to={'/posts'} />
          </Route>
          <Route exact path={'/posts'}>
            <PostsContainer environment={environment} />
          </Route>
          <Route path={'/post/:post_id'}>
            <PostViewContainer environment={environment} />
          </Route>
        </Router>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
