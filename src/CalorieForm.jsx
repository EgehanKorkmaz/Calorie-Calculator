import React from "react";

// eslint-disable-next-line react/prop-types
function CalorieForm({ onCalculate }) {
  const [formData, setFormData] = React.useState({
    gender: "",  // Boş değer
    age: "",
    weight: "",
    height: "",
    bodyFat: "",
    activityLevel: "",  // Boş değer
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { gender, age, weight, height, bodyFat, activityLevel } = formData;

    // Zorunlu alanlar boşsa hesaplama yapmaması için uyarı veriyoruz
    if (!gender || !age || !weight || !height || !bodyFat || !activityLevel) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    onCalculate(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Cinsiyet:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Seçiniz</option>
          <option value="male">Erkek</option>
          <option value="female">Kadın</option>
        </select>
      </label>

      <label>
        Yaş:
        <input type="number" name="age" value={formData.age} onChange={handleChange} />
      </label>

      <label>
        Boy (cm):
        <input type="number" name="height" value={formData.height} onChange={handleChange} />
      </label>

      <label>
        Kilo (kg):
        <input type="number" name="weight" value={formData.weight} onChange={handleChange} />
      </label>

      <label>
        Yağ Oranı (%):
        <input type="number" name="bodyFat" value={formData.bodyFat} onChange={handleChange} />
      </label>

      <label className="bottom-label">
        Aktivite Seviyesi:
        <select name="activityLevel" value={formData.activityLevel} onChange={handleChange}>
          <option value="">Seçiniz</option>
          <option value="1.2">Hareketsiz</option>
          <option value="1.375">Hafif aktif (3-4 gün)</option>
          <option value="1.55">Orta aktif (5-6 gün)</option>
          <option value="1.725">Yoğun (6-7 gün)</option>
          <option value="1.9">Çok yoğun (7+ gün)</option>
        </select>
      </label>

      <button type="submit">Hesapla</button>
    </form>
  );
}

export default CalorieForm;
