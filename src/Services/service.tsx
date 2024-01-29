import http from '../http-common';
import { Osoba } from '../models/models';

const getPerson = () => {
  return http.get<Array<Osoba>>('/osoby');
};

const addPerson = (data: { id?: number | undefined; firstName: string; lastName: string; height: number; weight: number; age: number; gender: NonNullable<boolean | undefined>; przeciwwskazania: string; trainingLevel: string; cel: string; }) => {
  return http.post<any>("/osoby", data); // zmiana endpointu na '/osoby'
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