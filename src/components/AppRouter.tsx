import { authRoutes, publicRoutes } from "@/routes";
import { useUserStore } from "@/store/userStore";
import { selectIsAuth } from "@/store/userStore/userSelectors";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  const isAuth = useUserStore(selectIsAuth);
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
