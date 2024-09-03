import React from 'react';
import Loading from '../components/Loading.js';
const MainLayoutBody = React.lazy(
  () => import('../components/StyledComponents/MainLayoutBody.js')
);
const NavBar = React.lazy(() => import('../components/NavBar.js'));
const ScrollFromPath = React.lazy(
  () => import('../components/ScrollFromPath.js')
);

const MainLayout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <React.Suspense fallback={<Loading sx={{ minHeight: '100vh' }} />}>
      <MainLayoutBody>
        <NavBar />
        {props.children}
        <ScrollFromPath />
      </MainLayoutBody>
    </React.Suspense>
  );
};
export default MainLayout;
