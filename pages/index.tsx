import Head from "next/head";
import React from "react";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  const [value, setValue] = React.useState<string>();
  const [displayResult, setDisplayResult] = React.useState<(string | number)[]>(
    []
  );

  function changeAngka(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value
    setDisplayResult([]);
    if (newValue || Number(newValue) >= 0) {
      setValue(newValue);
    }
  }

  function generateSegitiga() {
    if (value) {
      const result = value.split("").map((e, i) => {
        const zero = new Array(i + 1).fill(0);
        return e + zero.join("");
      });
      setDisplayResult(result);
    }
  }

  function generateGanjil() {
    if (value) {
      const result = [];
      for (let index = 1; index <= Number(value); index++) {
        if (index % 2 === 1) {
          result.push(index);
        }
      }

      setDisplayResult(result);
    }
  }

  function generatePrima() {
    if (value) {
      const result = [];
      for (let index = 2; index <= Number(value); index++) {
        const condition = new Array(index)
          .fill("")
          .map((_, i) => index % (i + 1))
          .filter((e) => e === 0)
          .length === 2
        if (condition) {
          result.push(index);
        }
      }
      setDisplayResult(result);
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div>
          <input
            type="number"
            name="angka"
            id="angka"
            placeholder="Input Angka"
            value={value}
            onChange={changeAngka}
          />
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={generateSegitiga}>Generate Segitiga</button>
          <button onClick={generateGanjil}>Generate Bilangan Ganjil</button>
          <button onClick={generatePrima}>Generate Bilangan Prima</button>
        </div>
        <b>
          <h1>Result : </h1>
        </b>
        <b>
          {displayResult.map((e, i) => (
            <h3 key={i}>{e}</h3>
          ))}
        </b>
      </main>
    </>
  );
}
