import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [promptInput, setPromptInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: generateCodeExplainerPromot(promptInput) }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      document.getElementById("result").innerHTML = data.result;
      //setResult(data.result);
      setPromptInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <div>
      <Head>
        <title>Code Explainer GPT</title>
      </Head>

      <main className={styles.main}>
        <h3>Code Explainer GPT</h3>
        <form onSubmit={onSubmit}>
          <textarea
            name="prompt"
            placeholder="Enter a code"
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
          />
          <input type="submit" value="Explain me this Code" />
        </form>
      </main>
      <div className={styles.result} id="result"></div>
      <footer className={styles.footer}>
        <p>
          Code hosted on 
          <a href="https://github.com/csankhala/code-explainer-gpt" title="Source Code">
            <svg height="20" alt="GitHub" version="1.1" width="20"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>
          </a>
          Based on OpenAI API.
        </p>

      </footer>
    </div>
    
  );
}

function generateCodeExplainerPromot(promptInput) {
  return `Review my code and explain step by step in HTML format. Explaination should contain language, purpose of code, any better alternative: ${promptInput}`;
}