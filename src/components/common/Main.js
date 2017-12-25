/* eslint-disable react/no-children-prop */
import React from 'react';
import {Route/*, Switch*/} from 'react-router-dom';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ProjectsPage from '../projects/ProjectsPage';
import PropTypes from 'prop-types';
import PageAnimationWrapper from './PageAnimationWrapper';
import NotFoundPage from './NotFoundPage.js';

const Main = (props) => {
  let found = false;
  return (
    <main className={props.isHome?"home":""}>
      <Route exact path="/" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={true} page="Home">
          <HomePage setHome={props.setHome} unsetHome={props.unsetHome} {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route exact path="/about" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false} page="About">
          <AboutPage {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route path="/projects" children={({ match, ...rest }) => {
        if(match) found = true;
        return (
        <PageAnimationWrapper mounted={match?true:false} home={false} page="Projects">
          <ProjectsPage {...rest}/>
        </PageAnimationWrapper>
      );}}/>
      <Route children={({ ...rest }) => {
        return (
        <PageAnimationWrapper mounted={!found} home={false} page="Error 404 (Not Found!)">
          <NotFoundPage projects={false} {...rest}/>
        </PageAnimationWrapper>
      );}}/>
    </main>
  );
}

Main.propTypes = {
  setHome: PropTypes.func.isRequired,
  unsetHome: PropTypes.func.isRequired,
  isHome: PropTypes.bool.isRequired
};

export default Main;
