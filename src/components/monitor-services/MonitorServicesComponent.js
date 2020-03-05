import React from "react";
import {
  downloadWelcomeTest,
  categoriesWelcomeTest,
  monitorWelcomeTest
} from "../../services/service-status.service";
import { ServiceStatus } from "../service-status-component/ServiceStatusComponent";
import "../service-status-component/status.css";

export class MonitorServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      downloadStatus: true,
      categoriesStatus: true,
      monitorStatus: true
    };
  }

  componentDidMount() {
    downloadWelcomeTest().then(status =>
      this.setState({
        downloadStatus: status
      })
    );

    categoriesWelcomeTest().then(status =>
      this.setState({
        categoriesStatus: status
      })
    );
    monitorWelcomeTest().then(status =>
      this.setState({
        monitorStatus: status
      })
    );
  }

  render() {
    console.log("download");
    console.log(this.state.downloadStatus);
    console.log("categories");
    console.log(this.state.categoriesStatus);
    console.log("monitor");
    console.log(this.state.monitorStatus);
    return (
      <div className="row">
        <ServiceStatus
          status={this.state.downloadStatus}
          title="Download Service"
          description="Servizio per il download dei pdf."
        />
        <ServiceStatus
          status={this.state.categoriesStatus}
          title="Categories Service"
          description="Servizio per l'elenco delle categorie."
        />
        <ServiceStatus
          status={this.state.monitorStatus}
          title="Monitor Service"
          description="Servizio per il monitoraggio."
        />
      </div>
    );
  }
}
