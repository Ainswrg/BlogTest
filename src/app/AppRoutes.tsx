import AboutMe from "pages/AboutMe/AboutMe";
import Posts from "pages/Posts/Posts";
import UserDetails from "pages/UserDetails/UserDetails";
import { type FC } from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "widgets/MainLayout/MainLayout";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route path="/" element={<Posts />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/user-details" element={<UserDetails />} />
      </Route>
    </Routes>
  );
};
