import jsPDF from "jspdf";
import "jspdf-autotable";

import { format } from "date-fns";


const generatePDF = (table,products) => {
  
  const doc = new jsPDF();

  let tableColumn = '';

  const tableRows = [];

  // for each product pass all its data into an array
  if(table==='product'){
    tableColumn = ["Id", "Product", "Category", "Market", "Created at"];
    products.forEach(product => {
      const productData = [
        product.id,
        product.name,
        product.Category.name,
        product.Market.name,
        // called date-fns to format the date on the product
        format(new Date(product.createdAt), "yyyy-MM-dd")
      ];
      // push each tickcet's info into a row
      tableRows.push(productData);
    });
  }
  if(table==='market'){
    tableColumn = ["Id", "Market", "Province", "District","Sector", "Created at"];
    products.forEach(product => {
      const productData = [
        product.id,
        product.name,
        product.province,
        product.district,
        product.sector,
        // called date-fns to format the date on the product
        format(new Date(product.createdAt), "yyyy-MM-dd")
      ];
      // push each tickcet's info into a row
      tableRows.push(productData);
    });
  }
  if(table==='user'){
    tableColumn = ["Id", "FirstName", "LastName", "Email","Gender","Type", "Created at"];
    products.forEach(product => {
      const productData = [
        product.id,
        product.firstName,
        product.lastName,
        product.email,
        product.gender,
        product.type,
        // called date-fns to format the date on the product
        format(new Date(product.createdAt), "yyyy-MM-dd")
      ];
      // push each tickcet's info into a row
      tableRows.push(productData);
    });
  }
  if(table==='category'){
    tableColumn = ["Id", "Category", "Created at"];
    products.forEach(product => {
      const productData = [
        product.id,
        product.name,
        // called date-fns to format the date on the product
        format(new Date(product.createdAt), "yyyy-MM-dd")
      ];
      // push each tickcet's info into a row
      tableRows.push(productData);})
  }


  // startY is basically margin-top
  doc.autoTable(tableColumn, tableRows, { startY: 20 });
  const date = Date().split(" ");
  // we use a date string to generate our filename.
  const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];
  // product title. and margin-top + margin-left
  doc.text("Created products.", 14, 15);
  // we define the name of our PDF file.
  doc.save(`report_${dateStr}.pdf`);
};

export default generatePDF;