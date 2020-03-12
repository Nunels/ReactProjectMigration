import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { list } from "../../services/service-status.service";

export class RichiestaListPrime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      richieste: [],
      status: ""
    };
  }
  componentDidMount = () => {
    list().then(richieste => this.setState({ richieste }));
  };

  render() {
    return (
      <DataTable value={this.state.richieste}>
        <Column field="idRichiesta" header="idRichiesta" />
        <Column field="idPagatore" header="idPagatore" />
        <Column field="idDominio" header="idDominio" />
        <Column field="dataRichiesta" header="dataRichiesta" />
        <Column field="codContesto" header="codContesto" />
        <Column field="iuv" header="iuv" />
      </DataTable>
    );
  }
}
