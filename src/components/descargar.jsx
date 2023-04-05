import * as XLSX from 'xlsx';
import React from 'react';

function generateExcel(formData) {
  const worksheet = XLSX.utils.json_to_sheet([formData]);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Form Data');
  const fileBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  return fileBuffer;
}


/*  function downloadExcel(formData) {
    const fileBuffer = generateExcel(formData);
    const blob = new Blob([fileBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'form-data.xlsx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }  */

  export default function Descargar(){

    function downloadExcel() {
        const formData = new FormData(document.querySelector('form'));
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          age: formData.get('age'),
          phone: formData.get('phone')
        };
        const fileBuffer = generateExcel(data);
        // Resto del código para descargar el archivo Excel
        const blob = new Blob([fileBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'form-data.xlsx');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    return(
       
        <form>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />
      
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      
        <label htmlFor="age">Edad:</label>
        <input type="number" id="age" name="age" />
                  
        <label htmlFor="phone">Teléfono:</label>
        <input type="text" id="phone" name="phone" />
      
        <button type="button" onClick={downloadExcel}>Descargar Excel</button>
      </form>
     
    )
  }