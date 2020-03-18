export const download = () => {
  const parametri = {
    listaRicevute: [
      {
        idDominio: "97210890584",
        iuv: "RF5000000000000000000045",
        codContesto: "DOPCA201607110000000000000000000045"
      },
      {
        idDominio: "97210890584",
        iuv: "RF1800000000000000000039",
        codContesto: "DOPCA201607110000000000000000000039"
      }
    ]
  };
  return fetch(
    "http://localhost:9080/DbWeb/services/DbRService/getPdfRicevute",
    {
      mode: "cors",
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parametri)
    }
  )
    .then(response => response.json())
    .then(res => {
      console.log(res.pdf);
      var arr = base64ToArrayBuffer(res.pdf);
      saveByteArray("test.pdf", arr);
    });
};

function base64ToArrayBuffer(base64) {
  var binaryString = window.atob(base64);
  var binaryLen = binaryString.length;
  var bytes = new Uint8Array(binaryLen);
  for (var i = 0; i < binaryLen; i++) {
    var ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes;
}

function saveByteArray(reportName, byte) {
  var blob = new Blob([byte], { type: "application/pdf" });
  var link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  var fileName = reportName;
  link.download = fileName;
  link.click();
}
