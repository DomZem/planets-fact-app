import MainTemplate from '../../components/templates/MainTemplate/MainTemplate';
import AppProviders from '../../providers/AppProviders';
import Planet from '../Planet/Planet';

const App = () => (
  <AppProviders>
    <MainTemplate>
      <Planet />
    </MainTemplate>
  </AppProviders>
);

export default App;
