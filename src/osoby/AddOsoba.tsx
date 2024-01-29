import React, { FormEvent, useEffect, useState } from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import {BazaOsob} from '../data/osobyData';
import { useNavigate  } from 'react-router-dom';
import Service from "../Services/service";
import './AddOsoba.css';

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

  const validatePerson = Yup.object().shape({
    id: Yup.number().optional(),
    firstName: Yup.string()
      .required("Imię jest wymagane."),
    lastName: Yup.string()
      .required("Nazwisko jest wymagane."),
      height: Yup.number()
      .typeError("Wzrost musi być liczbą.")
      .required("Pole jest wymagane")
      .positive("Wzrost musi być liczbą dodatnią.")
      .min(120, "Wzrost musi być większy niż 120 cm.")
      .max(220, "Wzrost musi być mniejszy niż 220 cm."),
    weight: Yup.number()
      .typeError("Waga musi być liczbą.")
      .required("Pole jest wymagane")
      .positive("Waga musi być liczbą dodatnią.")
      .min(40, "Waga musi być większa niż 40 kg.")
      .max(160, "Waga musi być mniejsza niż 160 kg."),
    age: Yup.number()
      .typeError("Wiek musi być liczbą.")
      .required("Pole jest wymagane")
      .positive("Wiek musi być liczbą dodatnią."),
    gender: Yup.bool()
      .required("Płeć jest wymagana."),
    przeciwwskazania: Yup.string()
      .required("Przeciwwskazania są wymagane - jeśli nie masz żadnych wpisz 'brak'."),
    trainingLevel: Yup.string()
      .required("Poziom treningu jest wymagany."),
    cel: Yup.string()
      .required("Cel jest wymagany.")
  });

const AddPerson = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Osoby>({
        resolver: yupResolver(validatePerson),
    });

    const navigate = useNavigate();
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
        const maxId = BazaOsob.length > 0 ? Math.max(...BazaOsob.map(o => o.id)) : 0;
        const newId = maxId + 1;
    
        const newPerson = {
            ...data,
            id: newId
        };
    
        BazaOsob.push(newPerson);
        console.log('Osoba dodana:', newPerson);
        navigate('/osoby');
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