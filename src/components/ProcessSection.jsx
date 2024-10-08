import { faCopy, faFile, faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import { faBasketShopping } from '@fortawesome/free-solid-svg-icons/faBasketShopping';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ProcessSection = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-20 text-white" style={{ backgroundImage: `url('./images/bg121-com.jpg')` }}>
      {/* Main Title */}
      <h1 className="text-4xl font-bold mb-4 text-center">LEARNING WITH OUR PROCESS</h1>
      <p className="text-center text-lg mb-12">
        Easy for taking part in courses. Let follow our flow to select courses suitable for you.
      </p>

      {/* Process Steps */}
      <div className="grid md:grid-cols-4 grid-cols-1 items-center max-w-5xl mx-auto ">
        {/* Step 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="flex justify-center items-center bg-white text-black rounded-full w-20 h-20 mb-4 shadow-lg">
            <FontAwesomeIcon icon={faFile} className="text-3xl" />
          </div>
          <h3 className="text-lg font-semibold">Select for your course</h3>
          <p className="text-sm">Find your favorite course from the menu...</p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center p-4">
          <div className="flex justify-center items-center bg-white text-black rounded-full w-20 h-20 mb-4 shadow-lg">
            <FontAwesomeIcon icon={faCopy} className="text-3xl" />
          </div>
          <h3 className="text-lg font-semibold">Preview the Syllabus</h3>
          <p className="text-sm">Preview the syllabus to see if it's a good fit...</p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center p-4">
          <div className="flex justify-center items-center bg-white text-black rounded-full w-20 h-20 mb-4 shadow-lg">
            <FontAwesomeIcon icon={faFolderOpen} className="text-3xl" />
          </div>
          <h3 className="text-lg font-semibold">Choose the Lesson</h3>
          <p className="text-sm">Pick a lesson to start your learning journey...</p>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center p-4">
          <div className="flex justify-center items-center bg-white text-black rounded-full w-20 h-20 mb-4 shadow-lg">
            <FontAwesomeIcon icon={faBasketShopping} className="text-3xl" />
          </div>
          <h3 className="text-lg font-semibold">Purchase the Course</h3>
          <p className="text-sm">If you like the course, you can purchase it...</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
