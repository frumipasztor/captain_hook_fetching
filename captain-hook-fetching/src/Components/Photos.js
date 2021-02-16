import React from "react";
import { useFetch } from "./Hooks.js";
function Photos() {
  //BETÖLTI AZ ADATOKAT A MEGADOTT URLRŐL, VALAMINT AMEDDIG AZ ADATOK NEM TÖLTÖTTEK BE ADDIG KIÍRJA, HOGY LOADING
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/photos?albumId=1"
  );
  return (
    <>
      <h1>Photos</h1>
      {/* Ő VIZSGÁLJA, HOGY BETÖLTŐDTEK-E MÁR AZ ADATOK */}
      {loading ? (
        "Loading..."
      ) : (
        // Ő PEDIG A BETÖLTŐDÉS UTÁN MAP-EL BEHELYEZI ŐKET EGY FELSOROLÁSBA ÉS EGYEDI KEYEKET GENERÁL HOZZÁJUK
        <ul>
          {data.map(({ id, title, url }) => (
            <li key={`photo-${id}`}>
              <img alt={title} src={url} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
export default Photos;
