import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "../routes/page";
import ExamplePage from "../routes/example/page";
import Layout from "../routes/layout";
import Signup from "../components/Signup";
import Login from "../components/Login";
import ArticleList from "../routes/article/page";
import ArticleDetail from "../routes/article/detail/page";
import RandomQuiz from "../routes/Quiz/RandomQuiz";
import Quiz from "../routes/Quiz/Quiz";
import MyPage from "../routes/user/MyPage";

export const mainRouter = [
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <MainPage />,
      },
      {
        path: "example",
        index: true,
        element: <ExamplePage />,
      },
      {
        path: "signup",
        index: true,
        element: <Signup />,
      },
      {
        path: "login",
        index: true,
        element: <Login />,
      },
      {
        path: "mypage",
        index: true,
        element: <MyPage />,
      },
      {
        path: "articlelist",
        children: [
          {
            path: "",
            element: <ArticleList />,
            index: true,
          },
          {
            path: ":articleId",
            element: <ArticleDetail />,
            index: true,
          },
        ],
      },
      {
        path: "quiz",
        index: true,
        element: <RandomQuiz />,
      },
      {
        path: "quizground",
        index: true,
        element: <Quiz />,
      },
    ],
  },
];

const router = createBrowserRouter(mainRouter);

export default router;
