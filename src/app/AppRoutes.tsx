import AboutMe from "pages/AboutMe/AboutMe";
import Posts from "pages/Posts/Posts";
import UserDetails from "pages/UserDetails/UserDetails";
import { type FC } from "react";
import { Route, Routes } from "react-router-dom";
import { PathRoutes } from "shared/consts";
import { MainLayout } from "widgets/MainLayout/MainLayout";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path={PathRoutes.posts} element={<Posts />} />
        <Route path={PathRoutes.aboutMe} element={<AboutMe />} />
        <Route path={PathRoutes.userDetails} element={<UserDetails />} />
      </Route>
    </Routes>
  );
};
