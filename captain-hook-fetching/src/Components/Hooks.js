import { useState, useEffect } from "react";

function useFetch(url) {
  //AZ ADATOKAT MAJD AMIKET BEHÍVTUNK TÖMB-BE RENDEZI
  const [data, setData] = useState([]);
  //
  const [loading, setLoading] = useState(true);
  //Ő HÍVJA BE AZ ADATOKAT, MIND ADDIG AWAIT VAN AMEDDIG AZ ÖSSZES ADAT BE NEM TÖLTŐDÖTT, ADDIG A LOADING FELIRAT JELENIK MEG, A BETÖLTŐDÉS UTÁN PEDIG BETÖLTI A KÉPEKET A LOADING=FALSE ÁLLAPOT MIATT
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  //Ő ADJA ÁT AZ ADATOKAT A HTML ELEMNEK, HOGY MEG JELENJENEK
  useEffect(() => {
    fetchUrl();
  }, []);
  return [data, loading];
}

export { useFetch };
