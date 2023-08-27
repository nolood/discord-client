import { LOGIN_ROUTE } from '@/consts/PathsRoutes';
import { authRoutes, publicRoutes } from '@/routes';
import { useUserStore } from '@/store/userStore';
import {
  selectCurrentUser,
  selectIsAuth,
  selectSetCurrentUser,
  selectSetIsAuth,
} from '@/store/userStore/userSelectors';
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

const AppRouter = () => {
  const navigate = useNavigate();
  const isAuth = useUserStore(selectIsAuth);
  const setIsAuth = useUserStore(selectSetIsAuth);
  const setCurrentUser = useUserStore(selectSetCurrentUser);
  const currentUser = useUserStore(selectCurrentUser);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('discorduser') || '{}');
    if (user || currentUser) {
      setCurrentUser(user);
      setIsAuth(true);
    } else {
      setCurrentUser(null);
      setIsAuth(false);
      navigate(LOGIN_ROUTE);
    }
  }, []);

  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      {isAuth &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
    </Routes>
  );
};

export default AppRouter;
