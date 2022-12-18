import css from "./index.module.css";

interface PreloaderProps {
    active: boolean
}

const Preloader = (props: PreloaderProps) => {
  return (
    <div className={css.container + " " + (props.active ? css.active : "")}>
      <div className={css.animation}>
        <div className={css.ldsSpinner}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
