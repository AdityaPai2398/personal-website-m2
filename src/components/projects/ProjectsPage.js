/* eslint-disable react/no-children-prop */
import React from 'react';
import {Route, Switch} from 'react-router-dom';
// import PageAnimationWrapper from '../common/PageAnimationWrapper';
import ProjectsDisplay from './ProjectsDisplay'
import ProjZR from './project-pages/ProjZR';
import ProjFindR from './project-pages/ProjFindR';
import ProjRecyclo from './project-pages/ProjRecyclo';
import ProjMoveOver from './project-pages/ProjMoveOver';
import ProjCLHSOrch from './project-pages/ProjCLHSOrch';
import ProjPolymap from './project-pages/ProjPolymap';
import ProjPersonalWebsite from './project-pages/ProjPersonalWebsite';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class ProjectsPage extends React.Component {
  render() {
    return (
    <div>
    <section className="container-fluid" id="projectsHeader">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-12-mobile is-8-tablet is-8-desktop">
            <h1><span>Projects</span></h1>
          </div>
        </div>
      </div>
    </section>
    <section className="container top-pad">
      {/* <div className="columns is-centered">
        <div className="column is-12-mobile is-8-tablet is-8-desktop">
          <h1><span>Projects</span></h1>
        </div>
      </div> */}
      <TransitionGroup>
      <CSSTransition key={this.props.location.key} classNames='fade' timeout={240}>
        <Switch location={this.props.location}>
          <Route exact path="/projects" component={ProjectsDisplay}/>
          <Route exact path="/projects/zerorobotics" component={ProjZR}/>
          <Route exact path="/projects/findr" component={ProjFindR}/>
          <Route exact path="/projects/recyclo" component={ProjRecyclo}/>
          <Route exact path="/projects/moveover" component={ProjMoveOver}/>
          <Route exact path="/projects/clhsorchestra" component={ProjCLHSOrch}/>
          <Route exact path="/projects/polymap" component={ProjPolymap}/>
          <Route exact path="/projects/personalwebsite" component={ProjPersonalWebsite}/>
        </Switch>
      </CSSTransition>
      </TransitionGroup>
      {/* <Route exact path="/projects" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={false} page="Projects">
          <ProjectsDisplay {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/ZeroRobotics" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={false} page="ZeroRobotics | Projects">
          <ProjZR {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/FindR" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={false} page="FindR | Projects">
          <ProjFindR {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/Recyclo" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={false} page="Recyclo | Projects">
          <ProjRecyclo {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/MoveOver" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={false} page="MoveOver | Projects">
          <ProjMoveOver {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/CLHSOrchestra" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={false} page="CLHS Orchestra | Projects">
          <ProjCLHSOrch {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/Polymap" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={false} page="Polymap | Projects">
          <ProjPolymap {...rest}/>
        </PageAnimationWrapper>
      )}/>
      <Route exact path="/projects/PersonalWebsite" children={({ match, ...rest }) => (
        <PageAnimationWrapper mounted={match} home={false} page="Personal Website | Projects">
          <ProjPersonalWebsite {...rest}/>
        </PageAnimationWrapper>
      )}/> */}
    </section>
    </div>
    )
  }

  componentWillMount() {
    this.props.unsetHome();
  }
}

ProjectsPage.propTypes = {
  // setHome: PropTypes.func.isRequired,
  unsetHome: PropTypes.func.isRequired,
  location: PropTypes.object
};


export default ProjectsPage;
