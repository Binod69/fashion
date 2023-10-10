// 'use client';
// import { useSelector } from 'react-redux';
// import { redirect } from 'next/navigation';

// const Private = ({ children }) => {
//   const { userInfo } = useSelector((state) => state.auth);

//   if (!userInfo) {
//     typeof window !== 'undefined' && redirect('/auth');
//     return null;
//   }

//   return <>{children}</>;
// };

// export default Private;

'use client';
import { useSelector } from 'react-redux';
import { useEffect } from 'react'; // Import useEffect
import { redirect } from 'next/navigation';

const Private = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    // Use useEffect for side effects, like redirection
    if (!userInfo) {
      redirect('/auth');
    }
  }, [userInfo]); // Add userInfo as a dependency

  if (!userInfo) {
    // You can return a loading indicator or null here
    return null;
  }

  return <>{children}</>;
};

export default Private;
