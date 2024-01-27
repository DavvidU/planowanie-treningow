import React, { FormEvent, useEffect, useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {BazaOsob} from '../data/osobyData'
import Service from "../Services/service";

type Osoby = {
    id?: number,
    firstName: string;
    lastName: string;
    height: number;
    weight: number;
    age: number;
    gender: boolean;
    przeciwwskazania: string;
    trainingLevel: string;
    cel: string;
  };

const validatePerson = Yup.object().shape(
    {
        id: Yup.number().optional(),
        firstName: Yup.string().required("Pole jest wymagane"),
        lastName: Yup.string().required("Pole jest wymagane"),
        height: Yup.number().required("Pole jest wymagane").positive('Należy wybrać liczbę z zakresu x - y').min(120,"Za mała liczba").max(220,'Za duża liczba'),
        weight: Yup.number().required("Pole jest wymagane").positive('Należy wybrać liczbę z zakresu x - y').min(40,"Za mała liczba").max(160,'Za duża liczba'),
        age: Yup.number().required("Pole jest wymagane").positive('Należy wybrać liczbę z zakresu x - y'),
        gender: Yup.bool().required('Pole jest wymagane'),
        przeciwwskazania: Yup.string().required("Pole jest wymagane - jeśli nie masz żadnych wpisz 'brak'"),
        trainingLevel: Yup.string().required("Pole jest wymagane"),
        cel: Yup.string().required("Pole jest wymagane"),
    }
)

const AddPerson = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Osoby>({
        resolver: yupResolver(validatePerson),
    });

    const [nextId, setNextId] = useState<number>(0);

    useEffect(() => {
        Service.getPerson()
            .then(response => {
                const maxId = response.data.reduce((max, person) => person.id > max ? person.id : max, 0);
                setNextId(maxId + 1);
            })
            .catch(error => {
                console.error("Błąd ładowania osób:", error);
                setNextId(1);
            });
    }, []);

    const onSubmit = (data: Osoby) => {
        const newPerson = {
            ...data,
            id: nextId
        };
    
        Service.addPerson(newPerson)
            .then(() => {
                console.log('Osoba dodana:', newPerson);
                setNextId(prevId => prevId + 1);
            })
            .catch((error: Error) => {
                console.error('Błąd dodawania osoby:', error);
            });
    };
  
    return (
        <div className="form-container">
          <div>
            <h1>Add new person!</h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="addPersonForm">
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                {...register('firstName')}
                className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.firstName?.message}</div>
            </div>
      
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                {...register('lastName')}
                className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.lastName?.message}</div>
            </div>
      
            <div className="form-group">
              <label>Height (cm):</label>
              <input
                type="number"
                {...register('height')}
                className={`form-control ${errors.height ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.height?.message}</div>
            </div>
      
            <div className="form-group">
              <label>Weight (kg):</label>
              <input
                type="number"
                {...register('weight')}
                className={`form-control ${errors.weight ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.weight?.message}</div>
            </div>
      
            <div className="form-group">
              <label>Age:</label>
              <input
                type="number"
                {...register('age')}
                className={`form-control ${errors.age ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.age?.message}</div>
            </div>
      
            <div className="form-group">
              <label>Gender:</label>
              <select {...register('gender')} className={`form-control ${errors.gender ? 'is-invalid' : ''}`}>
                <option value="true">Male</option>
                <option value="false">Female</option>
              </select>
              <div className="invalid-feedback">{errors.gender?.message}</div>
            </div>
      
            <div className="form-group">
              <label>Contraindications:</label>
              <input
                type="text"
                {...register('przeciwwskazania')}
                className={`form-control ${errors.przeciwwskazania ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.przeciwwskazania?.message}</div>
            </div>
      
            <div className="form-group">
              <label>Training Level:</label>
              <input
                type="text"
                {...register('trainingLevel')}
                className={`form-control ${errors.trainingLevel ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.trainingLevel?.message}</div>
            </div>
      
            <div className="form-group">
              <label>Goal:</label>
              <input
                type="text"
                {...register('cel')}
                className={`form-control ${errors.cel ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.cel?.message}</div>
            </div>
      
            <div className="form-group">
              <input type="button" value="Back" />
              <input type="submit" value="Add" />
            </div>
          </form>
        </div>
      );
  };
  export default AddPerson;