import { Route, BrowserRouter, Switch } from 'react-router-dom';
import CreateAccount from './Pages/AccountPages/Create'
import EditAccount from './Pages/AccountPages/Edit';
import ViewAccount from './Pages/AccountPages/View';
import DeleteAccount from './Pages/AccountPages/Delete';
import Login from './Pages/AccountPages/Login';


import CreateClass from './Pages/ClassPages/Create'
import EditClass from './Pages/ClassPages/Edit';
import ViewClass from './Pages/ClassPages/View';
import ViewClassAll from './Pages/ClassPages/ViewAll';
import DeleteClass from './Pages/ClassPages/Delete';

const Routes = () => {

  return (

    <BrowserRouter >
      <Switch>
        <Route component={CreateAccount} path="/conta/criar" exact />
        <Route component={EditAccount} path="/conta/editar" exact />
        <Route component={DeleteAccount} path="/conta/deletar" exact /> 
        <Route component={Login} path="/conta/login" exact /> 
        <Route component={ViewAccount} path="/conta/visualizar" exact />


        <Route component={CreateClass} path="/aula/criar" exact />
        <Route component={ViewClassAll} path="/aula/todas" exact />
        <Route component={EditClass} path="/aula/editar/:id_class" exact />
        <Route component={DeleteClass} path="/aula/deletar/:id_class" exact /> 
        <Route component={ViewClass} path="/aula/visualizar/:id_class" exact />

        {/*
        <Route component={CreateContent} path="/aula/criar" exact />
        <Route component={CreateContent} path="/aula/delete" exact />
        <Route component={CreateContent} path="/aula/view" exact />
        <Route component={CreateContent} path="/aula/edit" exact /> */}
      </Switch>
    </BrowserRouter>

  );
}
export default Routes;