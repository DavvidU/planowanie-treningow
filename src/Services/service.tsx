import http from '../http-common';
import { Osoba } from '../models/models';

const getPerson = () => {
  return http.get<Array<Osoba>>('/osoby');
};

const addPerson = (data: Osoba) => {
  return http.post<any>('/osoby/dodaj', data);
};

const editPerson = (data: Osoba, id: number) => {
  return http.put<any>('/osoby/' + id, data);
};

const deletePerson = (id: number) => {
  return http.delete<any>('/osoby/' + id);
};

const Service = {
  getPerson,
  addPerson,
  editPerson,
  deletePerson,
};

export default Service;