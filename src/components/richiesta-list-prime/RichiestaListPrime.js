import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Paginator } from "primereact/paginator";
import { Button } from "primereact/button";
import { list } from "../../services/service-status.service";

export class RichiestaListPrime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      richieste: [],
      status: "",
      first: 0,
      richiesteSelezionate: []
    };
  }
  componentDidMount = () => {
    list().then(richieste => this.setState({ richieste }));
  };
  handleDownloadButtonClick = () => {
    console.log(this.state.richiesteSelezionate);
  };

  render() {
    const download_button = (
      <Button
        label="Download"
        onClick={this.handleDownloadButtonClick}
      />
    );
    return (
      <div>
        <DataTable
          value={this.state.richieste}
          paginator={true}
          rows={10}
          first={this.state.first}
          rowsPerPageOptions={[5, 10, 20]}
          paginatorTemplate="FirstPageLink PrevPageLink
           PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          selection={this.state.richiesteSelezionate}
          onSelectionChange={e =>
            this.setState({ richiesteSelezionate: e.value })
          }
          footer={download_button}
        >
          <Column selectionMode="multiple" style={{ width: "3em" }} />
          <Column
            field="idRichiesta"
            header="idRichiesta"
            style={{ width: "7em" }}
          />
          <Column
            field="idPagatore"
            header="idPagatore"
            style={{ width: "11em" }}
          />
          <Column
            field="idDominio"
            header="idDominio"
            style={{ width: "9em" }}
          />
          <Column
            field="dataRichiesta"
            header="dataRichiesta"
            style={{ width: "9em" }}
          />
          <Column
            field="codContesto"
            header="codContesto"
            style={{ width: "22em" }}
          />
          <Column
            field="iuv"
            header="iuv"
            style={{ width: "15em" }}
          />
        </DataTable>
      </div>
    );
  }
}
