// src/UserData.js
import Data from './mainData.json';

export const UserData = Object.entries(Data).map(([key, value]) => ({
  ...value,         // copy semua isi user (id, nama, saldo, dll)
  uniqueKey: `${key}-${value.id}`, // bikin key unik: "user-1-1", "user-2-2"
}));