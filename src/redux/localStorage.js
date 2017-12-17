import localforage from 'localforage';

export const consultation = localforage.createInstance({
  name: 'consultation'
});

export const loadState = () => consultation.getItem('state');

export const saveState = state => {
  try {
    consultation.setItem('state', state)
  } catch (err) {
    // dafuck
  }
};
