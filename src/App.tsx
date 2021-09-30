import {FC} from 'react';
import Routes from "./router/Routes"
import CustomLayout from "./components/CustomLayout/CustomLayout";

const App: FC = () => {
  return (
    <CustomLayout>
      <Routes/>
    </CustomLayout>
  );
};

export default App;