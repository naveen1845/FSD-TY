import './App.css';
import People from './components/People/People';
import Bmi from './components/BMI/Bmi';
import Note from './components/Note/Note';
import Quote from './components/Quotes/Quote';
import Birthday from './components/BirthdayReminder/BirthdayReminder';

function App() {
  return (
    <div className="App">
      <Bmi />
    </div>
  );
}

export default App;