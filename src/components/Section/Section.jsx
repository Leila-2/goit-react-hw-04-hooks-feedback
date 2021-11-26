import React from "react";
import s from "../Section/Section.module.css";
const Section = ({ title, child }) => {
  return (
    <section className={s.section}>
      <h1 className={s.title}>{title}</h1>
      {child}
    </section>
  );
};
export { Section };
