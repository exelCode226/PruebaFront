import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const baseUrl = 'http://localhost:3000/api/postCategory';


export default function Form({ props }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>  axios.post(baseUrl,data);
  



  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Nombre Categoria</label>
      <br/>
      <input {...register("name")} />
      <br/>
      <input type="submit"/>
    </form>
  );
}
