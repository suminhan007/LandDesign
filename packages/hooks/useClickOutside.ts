import { useEffect, useRef } from 'react';

const useClickOutside = (ref, callback) => {
  const callbackRef = useRef(callback); // 使用 useRef 存储回调函数

  useEffect(() => {
    callbackRef.current = callback; // 更新回调函数
  }, [callback]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callbackRef.current(event);
      }
    };
    document.body.addEventListener('mousedown', handleClickOutside);
    document.body.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.body.removeEventListener('mousedown', handleClickOutside);
      document.body.removeEventListener('touchstart', handleClickOutside);
    };
  }, [ref]);
};

export default useClickOutside;
