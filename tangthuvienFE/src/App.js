import { publicRoutes } from "~/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import { HomeLayout , CategoryLayout} from "~/components/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          let Layout = CategoryLayout;
          const Page = route.component;


          if(route.layout){
            Layout = route.layout;
          }else if(route.layout === null){
            Layout= Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
}

export default App;
