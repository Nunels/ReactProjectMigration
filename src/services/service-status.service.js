import { Richiesta } from "../models/richiesta";

export const _list = () => {
  return fetch(
    "http://localhost:9080/DbWeb/services/DbRService/getRichieste",
    {
      mode: "cors",
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }
  )
    .then(response => response.json())
    .then()
    .then(richieste =>
      richieste.map(
        richiesta =>
          new Richiesta(
            richiesta.idRichiesta,
            richiesta.idPagatore,
            richiesta.idDominio,
            richiesta.dataRichiesta,
            richiesta.codContesto,
            richiesta.iuv
          )
      )
    );
};

export const list = async () => {
  const res = await fetch(
    "http://localhost:9080/DbWeb/services/DbRService/getRichieste",
    {
      mode: "cors",
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }
  );

  const dto = await res.json();

  return dto.listaRichieste;
};

export const downloadWelcomeTest = () => {
  return fetch(
    "http://localhost:9080/DbWeb/services/DbRService/welcomeTest",
    {
      mode: "cors",
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" }
    }
  )
    .then(res => res.status)
    .then(status => status === 200)
    .catch(status => false);
};

export const _welcomeTest = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "POST",
    "http://localhost:9080/DbWeb/services/DbRService/welcomeTest"
  );
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send();

  xhr.onload = function() {
    alert(xhr.status);
  };
  console.log(xhr.status);
  return xhr.status === 200 ? true : false;
};

export const categoriesWelcomeTest = () => {
  return fetch(
    "http://localhost:9080/ADMPayRServiceWeb/services/ADMPayRService/welcomeTest",
    {
      headers: { "Content-Type": "application/json" },
      crossDomain: "true"
    }
  )
    .then(res => res.status)
    .then(status => status === 200)
    .catch(status => false);
};

export const monitorWelcomeTest = () => {
  return fetch(
    "http://localhost:9080/SogeiPaySystemMonitorWeb/services/PaySystemMonitorRService/welcomeTest",
    {
      headers: { "Content-Type": "application/json" },
      crossDomain: true,
      method: "POST"
    }
  )
    .then(res => res.status)
    .then(status => status === 200)
    .catch(status => false);
};
