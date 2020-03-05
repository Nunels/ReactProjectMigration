import React from "react";

export function RichiestaListRow(props) {
  return (
    <tr>
      <td>{props.richiesta.idRichiesta}</td>
      <td>{props.richiesta.idPagatore}</td>
      <td>{props.richiesta.idDominio}</td>
      <td>{props.richiesta.dataRichiesta}</td>
      <td>{props.richiesta.codContesto}</td>
      <td>{props.richiesta.iuv}</td>
    </tr>
  );
}
