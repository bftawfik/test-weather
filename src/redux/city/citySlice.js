import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userCity: {
    name: undefined,
    temp: {
      value: 0,
      min: 0,
      max: 0,
    },
    weather: {
      title: "",
      description: "",
      icon: "",
    },
  },
  inputCity: {
    name: undefined,
    temp: {
      value: 0,
      min: 0,
      max: 0,
    },
    weather: {
      title: "",
      description: "",
      icon: "",
    },
  },
};

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {
    addCityName: (state, action) => {
      state[`${action.payload.type}City`].name = action.payload.value;
    },
    addCityFullWeather: (state, action) => {
      state[`${action.payload.type}City`].temp.value = action.payload.value.temp.value;
      state[`${action.payload.type}City`].temp.min = action.payload.value.temp.min;
      state[`${action.payload.type}City`].temp.max = action.payload.value.temp.max;
      if (action.payload.value.weather) {
        state[`${action.payload.type}City`].weather.title = action.payload.value.weather.title;
        state[`${action.payload.type}City`].weather.description = action.payload.value.weather.description;
        state[`${action.payload.type}City`].weather.icon = action.payload.value.weather.icon;
      }
    },
  },
});

export const { addCityName, addCityFullWeather } = citySlice.actions;

export default citySlice.reducer;
