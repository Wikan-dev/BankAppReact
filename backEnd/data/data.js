import Data from './mainData.json'; //mengimpor json
import HistoryData from '../server/historyData.json'; //mengimpor json

export const UserData = Object.entries(Data).map(([key, value]) => ({
  ...value,         // copy semua isi user (id, nama, saldo, dll)
  uniqueKey: `${key}-${value.id}`, // bikin key unik: "user-1-1", "user-2-2"
}));

export const UserHistory = Object.entries(HistoryData).map(([key, value]) => ({
  ...value,         // copy semua isi user (id, nama, saldo, dll)
  uniqueKey: `${key}-${value.id}`, // bikin key unik: "user-1-1", "user-2-2"
}));