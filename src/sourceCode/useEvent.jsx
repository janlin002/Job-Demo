import React from 'react'

const UseEvent = () => {
    const useEvent = (handler) => {
        const handlerRef = useRef(null);
      
        // In a real implementation, this would run before layout effects
        useLayoutEffect(() => {
          handlerRef.current = handler;
        });
      
        return useCallback((...args) => {
          // In a real implementation, this would throw if called during render
          const fn = handlerRef.current;
          return fn(...args);
        }, []);
      }
  return (
    <div>UseEvent</div>
  )
}

export default UseEvent

// React RFC 的 useEvent 源碼