import React from 'react';
import ProjectsLink from './ProjectsLink';

const ProjectsDisplay = () => {
  return (
    <div className="columns projectsPage is-mobile">
      <div className="column is-6-mobile is-offset-2-tablet is-4-tablet is-offset-2-desktop is-2-desktop">
        <ProjectsLink to="/projects/zerorobotics" text="ZeroRobotics 2014 HS Tournament">
          <img src={require('../../images/project-tiles/min/zerorobotics.min.jpg')}/>
        </ProjectsLink>
      </div>
      <div className="column is-6-mobile is-4-tablet is-2-desktop">
        <ProjectsLink to="/projects/findr" text="FindR">
          <img src={require('../../images/project-tiles/min/findr.min.png')}/>
        </ProjectsLink>
      </div>
      <div className="column is-6-mobile is-offset-2-tablet is-4-tablet is-2-desktop">
        <ProjectsLink to="/projects/recyclo" text="Recyclo">
          <img src={require('../../images/project-tiles/min/recyclo.min.png')}/>
        </ProjectsLink>
      </div>
      <div className="column is-6-mobile is-4-tablet is-2-desktop">
        <ProjectsLink to="/projects/moveover" text="MoveOver">
          <img src={require('../../images/project-tiles/min/moveover.min.png')}/>
        </ProjectsLink>
      </div>
      <div className="column is-6-mobile is-offset-2-tablet is-4-tablet is-offset-2-desktop is-2-desktop">
        <ProjectsLink to="/projects/clhsorchestra" text="CLHS Orchestra">
          <img src={require('../../images/project-tiles/min/clhsorch.min.png')}/>
        </ProjectsLink>
      </div>
      <div className="column is-6-mobile is-4-tablet is-2-desktop">
        <ProjectsLink to="/projects/polymap" text="Polymap">
          <img src={require('../../images/project-tiles/min/polymap.min.png')}/>
        </ProjectsLink>
      </div>
      <div className="column is-6-mobile is-offset-2-tablet is-4-tablet is-2-desktop">
        <ProjectsLink to="/projects/personalwebsite" text="Personal Website">
          <img src={require('../../images/project-tiles/min/personalweb.min.png')}/>
        </ProjectsLink>
      </div>
    </div>
  )
};

export default ProjectsDisplay;
