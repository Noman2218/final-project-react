import React from 'react';
import './ProcessSection.css';
import { faBasketShopping, faCopy, faFile, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProcessSection = () => {
  return (
    <div className="process-section">
      <div className="overlay">
        <h1>LEARNING WITH OUR PROCESS</h1>
        <p>Easy for taking part in courses. Let follow our flow to select courses suitable for you.</p>
        
        <div className="process-steps">
          <div className="step">
            <div className="icon-container">
              <i className="fas fa-file-alt"><FontAwesomeIcon icon={faFile} /></i>
            </div>
            <h3>Select for your course</h3>
            <p>The fastest way you can find your favorite course is going on menu...</p>
          </div>

          {/* SVG path */}
          <svg className="path" width="100" height="50">
            <line x1="0" y1="25" x2="100" y2="25" stroke="#00bfff" strokeWidth="4" />
            <circle cx="100" cy="25" r="8" fill="#00bfff" />
          </svg>

          <div className="step">
            <div className="icon-container">
              <i className="fas fa-folder-open"><FontAwesomeIcon icon={faCopy} /></i>
            </div>
            <h3>Preview the Syllabus</h3>
            <p>You can preview the syllabus to determine if it works for you...</p>
          </div>

          <svg className="path" width="100" height="50">
            <line x1="0" y1="25" x2="100" y2="25" stroke="#00bfff" strokeWidth="4" />
            <circle cx="100" cy="25" r="8" fill="#00bfff" />
          </svg>

          <div className="step">
            <div className="icon-container">
              <i className="fas fa-book"><FontAwesomeIcon icon={faFolderOpen} /></i>
            </div>
            <h3>Choose the Lesson</h3>
            <p>Each course gets many lessons inside so you can take the first lesson...</p>
          </div>

          <svg className="path" width="100" height="50">
            <line x1="0" y1="25" x2="100" y2="25" stroke="#00bfff" strokeWidth="4" />
            <circle cx="100" cy="25" r="8" fill="#00bfff" />
          </svg>

          <div className="step">
            <div className="icon-container">
              <i className="fas fa-shopping-cart"><FontAwesomeIcon icon={faBasketShopping} /></i>
            </div>
            <h3>Purchase the Course</h3>
            <p>If you like the course and the syllabus is a good choice for you...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
