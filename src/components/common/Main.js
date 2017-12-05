/* eslint-disable react/no-children-prop */
import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
// import {Switch} from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ProjectsPage from '../projects/ProjectsPage';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import PageAnimationWrapper from './PageAnimationWrapper';
import NotFoundPage from './NotFoundPage.js';

const Main = withRouter((props) => (
  <main className={props.isHome?"home":""}>
    <TransitionGroup>
      <CSSTransition key={props.location.key} classNames='fade' timeout={240}>
        <Switch location={props.location}>
            <Route exact path="/" render={(rest) => <HomePage setHome={props.setHome} unsetHome={props.unsetHome} {...rest}/>}/>
            <Route exact path="/about" render={(rest) => <AboutPage unsetHome={props.unsetHome} {...rest}/>}/>
            <Route path="/projects" render={(rest) => <ProjectsPage unsetHome={props.unsetHome} {...rest}/>}/>
            <Route component={NotFoundPage}/>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
        {/* <Route exact path="/" children={({ match, ...rest }) => (
          <PageAnimationWrapper mounted={match} home={true} page="Home">
            <HomePage setHome={props.setHome} unsetHome={props.unsetHome} {...rest}/>
          </PageAnimationWrapper>
        )}/>
        <Route exact path="/about" children={({ match, ...rest }) => (
          <PageAnimationWrapper mounted={match} home={false} page="About">
            <AboutPage {...rest}/>
          </PageAnimationWrapper>
        )}/>
        <Route path="/projects" children={({ match, ...rest }) => (
          <PageAnimationWrapper mounted={match} home={false} page="Projects">
            <ProjectsPage {...rest}/>
          </PageAnimationWrapper>
        )}/>
        <Route path="/404" children={({ match, ...rest }) => (
          <PageAnimationWrapper mounted={match} home={false} page="Error 404 (Not Found!)">
            <NotFoundPage {...rest}/>
          </PageAnimationWrapper>
        )}/> */}
  </main>
));

Main.propTypes = {
  setHome: PropTypes.func.isRequired,
  unsetHome: PropTypes.func.isRequired,
  isHome: PropTypes.bool.isRequired
};

export default Main;
