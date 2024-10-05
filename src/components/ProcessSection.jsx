import React from 'react';

const ProcessSection = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat py-20 text-white" style={{ backgroundImage: `url('./images/bg121-com.jpg')` }}>
      {/* Overlay */}
      <div>
        {/* Main Title */}
        <h1 className="text-3xl font-bold mb-2 text-center">LEARNING WITH OUR PROCESS</h1>
        <p className="text-center text-lg mb-8">
          Easy for taking part in courses. Let follow our flow to select courses suitable for you.
        </p>

        {/* Process Steps */}
        <div className="flex justify-center items-center relative space-x-12">
          {/* Step 1 */}
          <div className="relative">
            <div className="flex justify-center items-center bg-white text-black rounded-full w-16 h-16 mb-4">
              <i className="fas fa-file-alt text-2xl"></i> {/* Font Awesome icon */}
            </div>
            <h3 className="text-lg font-semibold text-center">Select for your course</h3>
            <p className="text-center text-sm">Find your favorite course from the menu...</p>
          </div>

          {/* Blue line between step 1 and 2 */}
          <div className="absolute left-1/4 top-1/2 transform -translate-y-1/2 w-24 h-1 bg-blue-400"></div>

          {/* Step 2 */}
          <div className="relative">
            <div className="flex justify-center items-center bg-white text-black rounded-full w-16 h-16 mb-4">
              <i className="fas fa-folder-open text-2xl"></i> {/* Font Awesome icon */}
            </div>
            <h3 className="text-lg font-semibold text-center">Preview the Syllabus</h3>
            <p className="text-center text-sm">Preview the syllabus to see if it's a good fit...</p>
          </div>

          {/* Blue line between step 2 and 3 */}
          <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 w-24 h-1 bg-blue-400"></div>

          {/* Step 3 */}
          <div className="relative">
            <div className="flex justify-center items-center bg-white text-black rounded-full w-16 h-16 mb-4">
              <i className="fas fa-book text-2xl"></i> {/* Font Awesome icon */}
            </div>
            <h3 className="text-lg font-semibold text-center">Choose the Lesson</h3>
            <p className="text-center text-sm">Pick a lesson to start your learning journey...</p>
          </div>

          {/* Blue line between step 3 and 4 */}
          <div className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-24 h-1 bg-blue-400"></div>

          {/* Step 4 */}
          <div className="relative">
            <div className="flex justify-center items-center bg-white text-black rounded-full w-16 h-16 mb-4">
              <i className="fas fa-shopping-cart text-2xl"></i> {/* Font Awesome icon */}
            </div>
            <h3 className="text-lg font-semibold text-center">Purchase the Course</h3>
            <p className="text-center text-sm">If you like the course, you can purchase it...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
