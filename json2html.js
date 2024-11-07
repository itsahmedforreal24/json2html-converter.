export default function json2html(data) {
  
  let html = '<table data-user="ahmedmohammedghouse87@gmail.com">';
  

  const headers = Array.from(new Set(data.flatMap(Object.keys)));

  
  html += '<thead><tr>';
  headers.forEach(header => html += `<th>${header}</th>`);
  html += '</tr></thead>';

 
  html += '<tbody>';
  data.forEach(row => {
    html += '<tr>';
    headers.forEach(header => html += `<td>${row[header] || ''}</td>`);
    html += '</tr>';
  });
  html += '</tbody></table>';

  return html;
}
