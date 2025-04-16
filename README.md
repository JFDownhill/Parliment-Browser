Startskärm
- En enkel startsida med en välkomsttext och knapp för att visa ledamöter.

Ledamotslista
- Hämtar data från API:n `https://api.lagtinget.ax/api/persons.json`.
- Varje ledamot visas i en lista med namn, stad och eventuell profilbild.
- Inbyggd sökfunktion för att filtrera på förnamn eller efternamn.
- Möjlighet att växla mellan att visa alla ledamöter och endast aktiva ledamöter via en knapp.

Detaljvy
- När en ledamot väljs visas mer detaljerad information:
  - Fullständigt namn
  - Födelsedatum (om tillgängligt)
  - Adress
  - Stad
  - Profilbild (om tillgänglig)
