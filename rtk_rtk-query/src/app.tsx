import type { FC } from "react";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "components/layout/header";
import { useAppSelector } from "store";
import { useGetUserQuery } from "store/api/user";
import AppRouter from "./router";
import LoaderLayout from "components/layout/loader";
import localStorage from "service/localStorage";
import { authSelector } from "store/selectors/auth";



const App: FC = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const isAuth = useAppSelector(authSelector);
  const { isFetching } = useGetUserQuery(null, { skip: !localStorage.getAccessToken() });

  useEffect(() => {
    !isFetching && setLoading(false);
  }, [isFetching]);

  if (isLoading) return <LoaderLayout />;

  return (
    <BrowserRouter>
      <Suspense fallback={<LoaderLayout />}>
        {isAuth && <Header />}
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
