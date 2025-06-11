


import { createContext, useState } from "react";
import main from "../Config/Gemini"; 

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput]                 = useState("");
  const [recentprompts, setrecentprompts] = useState("");
  const [prevpromts, setprevprompts]      = useState([]);
  const [showresults, setshowresults]     = useState(false);
  const [loading, setloading]             = useState(false);
  const [resultdata, setresultdata]       = useState("");

  /* ───────────────────────── helper ───────────────────────── */
  const delayPara = (index, nextword) => {
    setTimeout(() => {
      setresultdata(prev => prev + nextword);
    }, 50 * index);
  };

  /* ───────────────────── main “send” function ───────────────────── */

  const newcht=()=>{
    setloading(false);
    setshowresults(false);
    setInput("");
  }
  const onsent = async (promptArg) => {
    /* Accept a prompt coming either from the textbox (input)
       or from a recent-chat click (promptArg)                  */
    const prompt = promptArg ?? input;
    if (!prompt.trim()) return;            // nothing to send

    setresultdata("");
    setloading(true);
    setshowresults(true);

    setrecentprompts(prompt);
    setprevprompts(prev => prev.includes(prompt) ? prev : [...prev, prompt]);

    try {
      const raw = await main(prompt);

      /* bold **text** and newlines * → <br/> exactly as before */
      const newResponse = raw
        .split("**")
        .map((chunk, i) => (i % 2 ? `<b>${chunk}</b>` : chunk))
        .join("")
        .split("*").join("<br/>");

      newResponse.split(" ").forEach((word, i) => delayPara(i, word + " "));
    } finally {
      setloading(false);
      setInput("");
    }
  };

  /* ───────────────────────  new chat  ─────────────────────── */
  const newchat = () => {
    setInput("");
    setrecentprompts("");
    setprevprompts([]);
    setshowresults(false);
    setloading(false);
    setresultdata("");
  };

  const contextvalue = {
    onsent,
    prevpromts,
    setprevprompts,
    setrecentprompts,
    recentprompts,
    showresults,
    loading,
    resultdata,
    input,
    setInput,
    newchat,
    newcht
  };

  return <Context.Provider value={contextvalue}>{props.children}</Context.Provider>;
};

export default ContextProvider;
