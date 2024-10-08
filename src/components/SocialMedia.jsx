import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://twitter.com/CHRISTOPHERZUL9">
        <BsTwitter />
      </a>
    </div>
    <div>
      <a href="https://www.facebook.com/christopher.zulu.355744">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
