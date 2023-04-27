import * as XLSX from 'xlsx';
import React from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import TextArea from 'antd/es/input/TextArea';
import './descargar.css'
import Swal from 'sweetalert2'

function generateExcel(formData) {
  const worksheet = XLSX.utils.json_to_sheet([formData]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Form Data');
  const fileBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  return fileBuffer;
}



  export default function Descargar(){
    

    function downloadExcel(values) {
      if(values.dashboard !== undefined || values.series !== undefined || values.Subseries !== undefined || values.texto !== undefined) {
      console.log(values)
      const data = {
        Dashboard: values.dashboard,
        Series: values.series,
        SubSeries: values.Subseries,
        Texto: values.texto,
      };
      const fileBuffer = generateExcel(data);
      const blob = new Blob([fileBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'datos.xlsx');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      
      Swal.fire({
        title: 'Descargando',
        text: 'Descargando el excel',
        icon: 'success',
        confirmButtonText: 'Ok',
        confirmButtonColor:'#0b0825'
      })
    } else {
      
      Swal.fire({
        title: 'Carga los datos',
        text: 'Los datos quedaron incompletos',
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#0b0825'
      })
    }

    }


    return(
        <div className='form'>
      {/* <div className='title'>Cargar datos</div> */}

      <Form onFinish={downloadExcel} >


     <div className='formulario'>
      <FormItem htmlFor="dashboard" label="Título" name="dashboard">
      <Input type="text" id="dashboard" className='input' placeholder='Escribí el nombre' />
      </FormItem> 
      

      
      <Form.Item label="Series" name="series">
      <Select className='input' placeholder='Elegí la serie'>
        <Select.Option value="Demo1">Demo1</Select.Option>
        <Select.Option value="Demo2">Demo2</Select.Option>
        <Select.Option value="Demo3">Demo3</Select.Option>
        <Select.Option value="Demo4">Demo4</Select.Option>
        <Select.Option value="Demo5">Demo5</Select.Option>
      </Select>
    </Form.Item>
    

    
    <Form.Item label="Subseries" name="Subseries">
      <Select className='input'placeholder='Elegí la subserie' >
        <Select.Option value="Demo1">Demo1</Select.Option>
        <Select.Option value="Demo2">Demo2</Select.Option>
        <Select.Option value="Demo3">Demo3</Select.Option>
        <Select.Option value="Demo4">Demo4</Select.Option>
        <Select.Option value="Demo5">Demo5</Select.Option>
      </Select>
    </Form.Item>
    

    
      <FormItem htmlFor="texto" label="Texto:" name="texto">
      <TextArea type="text" id="texto" className='input' placeholder='Escribí el texto' />
      </FormItem>
     


      <Button type="primary" htmlType="submit" className='boton'>Descargar Excel</Button>
      </div>
      </Form>
      </div>
    )
  }