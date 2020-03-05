export class Richiesta {
  constructor(
    idRichiesta,
    idPagatore,
    idDominio,
    dataRichiesta,
    codContesto,
    iuv
  ) {
    this.idRichiesta = idRichiesta;
    this.idPagatore = idPagatore;
    this.idDominio = idDominio;
    this.dataRiciesta = dataRichiesta;
    this.codContesto = codContesto;
    this.iuv = iuv;
  }
}
