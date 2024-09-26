import React, { useCallback } from "react";
import { utils, writeFileXLSX } from 'xlsx';
import * as XLSX from 'xlsx';
import { ButtonOutlined } from "../../../components";

const getTotal = (data) => {
  let sum = 0;
  for (let i = 0; i < data.length; i++){
    sum += data[i][5] * data[i][6]
  }
  return sum;
}

const ExcelExport = ({ data }) => {
  
  const l = [];

  data.map(row => {
    row[1].map((n) => {
      l.push(Object.values(n));
      return n;
    })
  });

  /* get state data and export to XLSX */
  const exportFile = useCallback(() => {
    // console.log(l);
    const worksheet = XLSX.utils.json_to_sheet(l.map((n) => ({
      Deskripsi: n[2],
      Satuan: n[3],
      "Harga Unit": parseInt(n[5]),
      Jumlah: parseInt(n[6]),
      "Harga Total": parseInt(n[5]) * parseInt(n[6]),
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.utils.sheet_add_aoa(worksheet, [['Nilai Total', getTotal(l)]], { origin: 'D12'});
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  }, []);

  return (
    <ButtonOutlined
        color={'var(--color-semiblack)'}
        height={'1.85rem'}
        width={'30%'}
        onClick={() => exportFile()}
        label={'Simpan'}
    />
  );
}

export default ExcelExport;