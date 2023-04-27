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
    </div>
  );
}

function generateCodeExplainerPromot(promptInput) {
  return `Review my code and explain step by step in HTML format. Explaination should contain language, purpose of code, any better alternative: ${promptInput}`;
}