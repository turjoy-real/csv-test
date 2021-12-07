// import { useEffect, useState } from 'react'

// export default function CsvReader(){
//     const [csvFile, setCsvFile] = useState();
//     const [csvArray, setCsvArray] = useState([]);
//     // [{name: "", age: 0, rank: ""},{name: "", age: 0, rank: ""}]

//     const processCSV = (str, delim=',') => {
//         const headers = str.slice(0,str.indexOf('\n')).split(delim);
//         const rows = str.slice(str.indexOf('\n')+1).split('\r\n');

//         const newArray = rows.map( row => {
//             const values = row.split(delim);
//             const eachObject = headers.reduce((obj, header, i) => {
//                 obj[header] = values[i];
//                 console.log("object, header, id:" , obj, header, i);                
              
//                 return obj;
//             }, {})
//             return eachObject;
//         })

//         setCsvArray(newArray);
//         console.log("array:", newArray[0]);
//     }

//     useEffect(()=>{
// console.log("hey",csvArray[1]);

//     },[csvArray])
//     const submit = () => {
//         const file = csvFile;
//         const reader = new FileReader();

//         reader.onload = function(e) {
//             const text = e.target.result;
//             console.log(text);
//             processCSV(text)
//         }

//         reader.readAsText(file);
//     }

//     return(
//         <form id='csv-form'>
//             <input
//                 type='file'
//                 accept='.csv'
//                 id='csvFile'
//                 onChange={(e) => {
//                     setCsvFile(e.target.files[0])
//                 }}
//             >
//             </input>
//             <br/>
//             <button
//                 onClick={(e) => {
//                     e.preventDefault()
//                     if(csvFile)submit()
//                 }}
//             >
//                 Submit
//             </button>
//             <br/>
//             <br/>
//             {csvArray.length>0 ? 
//             <>
//                 <table>
//                     <thead>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Rank</th>
//                     </thead>
//                     <tbody>
//                         {
//                             csvArray.map((item, i) => (
//                                 <tr key={i}>
//                                     <td>{item.Name}</td>
//                                     <td>{item.Age}</td>
//                                     <td>{item.Rank}</td>
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </table>
//             </> : null}
//         </form>
//     );

// }

import React from 'react';
import { CSVReader } from 'react-papaparse';

export default function Component() {
 const handleOnDrop = (data) => {
    console.log('---------------------------');
    console.log(data[0].data[0]);
    console.log('---------------------------');
  };

  const handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  const handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };


    return (
      <>
        <h5>Click and Drag Upload</h5>
        <CSVReader
          onDrop={handleOnDrop}
          onError={handleOnError}
          addRemoveButton
          onRemoveFile={handleOnRemoveFile}
        >
          <span>Drop CSV file here or click to upload.</span>
        </CSVReader>
      </>
    );
  
}

