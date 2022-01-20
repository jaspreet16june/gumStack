import React from 'react';
import "../component/head.css"

const Heading = () => {
  return (
    <div className="heading">
      <div className="head">Meet your customers face-to-face</div>;
      <div className="yellow">Instantly on your website/app</div>
      <div className="content">
        Integrate video calling on your website/app in under 5 minutes. Showcase
        your products, assist them with their purchase or help resolve issues
        faster with video.
      </div>
      
        <button className='button' ><span className='register'>Register for a demo</span> </button>
    </div>
  );
};

export default Heading;
