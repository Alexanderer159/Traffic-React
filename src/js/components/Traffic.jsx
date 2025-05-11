import React, { useEffect, useState } from 'react';

const Traffic = () => {
  const [light, setLight] = useState();

  useEffect(() => {
    const switchLight = () => {
      setLight('🟢');

      setTimeout(() => {
        setLight('🟡');
      }, 3000);

      setTimeout(() => {
        setLight('🔴');
      }, 6000);
    };

 switchLight();
    const interval = setInterval(switchLight, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="display-1 text-center d-flex justify-content-center align-items-center">
      <div className=" rounded-5 bg-dark w-10 p-3 m-5">
      <div>{light === '🟢' ? '🟢' : '⚪'}</div>
      <div>{light === '🟡' ? '🟡' : '⚪'}</div>
      <div>{light === '🔴' ? '🔴' : '⚪'}</div>
      </div>
    </div>
  );
};

export default Traffic;