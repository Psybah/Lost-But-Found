import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LostItemList } from "./lostItem/LostItemList";
import { LostItemCreate } from "./lostItem/LostItemCreate";
import { LostItemEdit } from "./lostItem/LostItemEdit";
import { LostItemShow } from "./lostItem/LostItemShow";
import { FoundItemList } from "./foundItem/FoundItemList";
import { FoundItemCreate } from "./foundItem/FoundItemCreate";
import { FoundItemEdit } from "./foundItem/FoundItemEdit";
import { FoundItemShow } from "./foundItem/FoundItemShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LostAndFoundService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="LostItem"
          list={LostItemList}
          edit={LostItemEdit}
          create={LostItemCreate}
          show={LostItemShow}
        />
        <Resource
          name="FoundItem"
          list={FoundItemList}
          edit={FoundItemEdit}
          create={FoundItemCreate}
          show={FoundItemShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
