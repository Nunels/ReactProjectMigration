import React from "react";
import { RichiestaListRow } from "../richiesta-list-row/RichiestaListRowComponent";
import { list } from "../../services/service-status.service";

export class RichiestaList extends React.Component {
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
    //console.log(this.state.richieste);

    const rows = this.state.richieste.map(richiesta => (
      <RichiestaListRow
        key={richiesta.idRichiesta}
        richiesta={richiesta}
      />
    ));
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Id Richiesta</th>
            <th>Id Pagatore</th>
            <th>Id Dominio</th>
            <th>Data Richiesta</th>
            <th>Cod Contesto</th>
            <th>Iuv</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}
