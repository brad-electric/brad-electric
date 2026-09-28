export type CijenikStavka = {
  usluga: string;
  aktualnaCijena: string;
  sidrenaCijena: string;
  istaknuto?: boolean;
};

export const CIJENIK: CijenikStavka[] = [
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
    istaknuto: true,
  },
  {
    usluga: "Servis i otklanjanje kvara",
    aktualnaCijena: "30,00 €/h",
    sidrenaCijena: "30,00 €/h",
  },
];

export const CIJENIK_CSV_URL = "/cijenik-brad-electric.csv";
export const CIJENIK_CSV_FILENAME = "cijenik-brad-electric.csv";
