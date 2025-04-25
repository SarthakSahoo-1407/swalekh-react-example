
"use client"
import styles from "./page.module.css";
import { SwalekhConfig } from "./components/SwalekhConfig";
import { Form } from "./components/Form";
import { SwalekhConfigProvider } from "swalekh-react";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <SwalekhConfigProvider
                validationKey="<SWALEKH-VALIDATION-KEY>"
                language="hi"
                mode="phonetic"
                theme="fresh"
              >
        <SwalekhConfig />
        <Form />
        </SwalekhConfigProvider>
      </main>

    </div>
  );
}
