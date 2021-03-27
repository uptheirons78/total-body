import { Typography } from '@material-ui/core';
import Workout from './Workout';

function App() {
  return (
    <div className='App'>
      <Typography
        component='h1'
        variant='h1'
        gutterBottom
        style={{ fontSize: '3rem', fontWeight: '700', textAlign: `center` }}
      >
        Total Body
      </Typography>
      <section>
        <Workout />
      </section>
    </div>
  );
}

export default App;
