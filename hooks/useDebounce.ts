import { useEffect, useState } from "react";

function useDebounce(fn, delay) {
    let timer;
  
    return function (...args) {
      if (timer) {
        clearTimeout(timer);
      }
  
      timer = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }

export default useDebounce;