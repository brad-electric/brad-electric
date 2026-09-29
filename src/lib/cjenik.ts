export type CjenikStavka = {
  usluga: string;
  aktualnaCijena: string;
  sidrenaCijena: string;
};

export const SIDRENA_CJENA_DATUM = "10.9.2026";

export const CJENIK_NAPOMENA =
  "Navedene cjene odnose se na standardne uvjete izvođenja radova i ne uključuju materijal. Konačna cjena može se razlikovati od cijena navedenih u cjeniku, ovisno o opsegu radova, duljini trase, vrsti podloge, otežanom pristupu i drugim specifičnostima na objektu. Konačna cjena utvrđuje se ponudom prije početka radova.";

export const CJENIK: CjenikStavka[] = [
  {
    usluga: "Izvod utičnice – do 15 m trase",
    aktualnaCijena: "30,00 €",
    sidrenaCijena: "30,00 €",
  },
  {
    usluga: "Izvod prekidača – do 15 m trase",
    aktualnaCijena: "30,00 €",
    sidrenaCijena: "30,00 €",
  },
  {
    usluga: "Izvod rasvjete – do 15 m trase",
    aktualnaCijena: "30,00 €",
    sidrenaCijena: "30,00 €",
  },
  {
    usluga: "Izvod za uređaj – do 15 m trase",
    aktualnaCijena: "40,00 €",
    sidrenaCijena: "40,00 €",
  },
  {
    usluga: "Premještanje postojećeg izvoda",
    aktualnaCijena: "40,00 €",
    sidrenaCijena: "40,00 €",
  },
  {
    usluga: "Razvodna kutija – izrada i spajanje",
    aktualnaCijena: "30,00 €",
    sidrenaCijena: "30,00 €",
  },
  {
    usluga: "Spajanje elektroormara",
    aktualnaCijena: "150,00 €",
    sidrenaCijena: "150,00 €",
  },
  {
    usluga: "Montaža rasvjetnog tijela",
    aktualnaCijena: "10,00 €",
    sidrenaCijena: "10,00 €",
  },
  {
    usluga: "Montaža elektroopreme",
    aktualnaCijena: "10,00 €",
    sidrenaCijena: "10,00 €",
  },
  {
    usluga: "Posebni priključak – bojler, indukcija i sl.",
    aktualnaCijena: "50,00 €",
    sidrenaCijena: "50,00 €",
  },
  {
    usluga: "Montaža punjača za električna vozila",
    aktualnaCijena: "100,00 €",
    sidrenaCijena: "100,00 €",
  },
  {
    usluga: "Sat električara",
    aktualnaCijena: "30,00 €/h",
    sidrenaCijena: "30,00 €/h",
  },
  {
    usluga: "Servis i otklanjanje kvara",
    aktualnaCijena: "30,00 €/h",
    sidrenaCijena: "30,00 €/h",
  },
];

export const CJENIK_CSV_URL = "/cjenik-brad-electric.csv";
export const CJENIK_CSV_FILENAME = "cjenik-brad-electric.csv";
