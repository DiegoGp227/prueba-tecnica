import style from "./style.module.css";

export default function Copyright() {
  return (
    <div className={style.div}>
      <svg
        className={style.svg}
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 24 24"
      >
        <g fill="none" stroke="#fff" stroke-width="1.5">
          <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z" />
          <path
            stroke-linecap="round"
            d="M14 15.667a4.5 4.5 0 0 1-1.714.333C9.919 16 8 14.21 8 12s1.919-4 4.286-4c.61 0 1.189.119 1.714.333"
          />
        </g>
      </svg>
      <p className={style.text} >Copyright 2024 - RQ</p>
    </div>
  );
}
