import CalorieForm from './CalorieForm';

function App() {
    const calculateCalories = (data) => {
      const { weight, height, age, gender, activityLevel } = data;
      let bmr;
  
      // BMR hesaplama
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
  
      // Aktivite seviyesiyle çarp
      const dailyCalories = bmr * parseFloat(activityLevel);
      alert(`Günlük kalori ihtiyacın: ${Math.round(dailyCalories)} kalori.`);
    };
  
    return (
      <div>
        <h1>Kalori Hesaplama</h1>
        <CalorieForm onCalculate={calculateCalories} />
      </div>
    );
  }
  
  export default App;