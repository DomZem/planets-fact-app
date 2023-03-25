import { Outlet } from 'react-router-dom';
import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import AppProviders from '../../providers/AppProviders';

const App = () => (
  <AppProviders>
    <MainTemplate>
      <Outlet />
    </MainTemplate>
  </AppProviders>
);

export default App;
