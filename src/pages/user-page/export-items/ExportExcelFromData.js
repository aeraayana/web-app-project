import React, { useCallback } from "react";
import { utils, writeFileXLSX } from 'xlsx';
import * as XLSX from 'xlsx';
import { ButtonOutlined } from "../../../components";

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
    const worksheet = XLSX.utils.json_to_sheet(l.map((n) => ({
      Deskripsi: n[1],
      Satuan: n[2],
      "Harga Unit": n[3],
      Jumlah: n[4],
      "Harga Total": n[5],
    })));
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
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