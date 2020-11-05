import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import styles from './App.module.css';
import Header from "./components/Header";
import PostsContainer from "./components/posts/PostsContainer";

function App() {
  return (
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
  );
}

export default App;
