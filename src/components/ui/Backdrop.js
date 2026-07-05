const Backdrop = (props) => {
  return <div className="absolute w-full min-h-full z-10 top-0 left-0 bg-slate-900/50 backdrop-blur-sm" onClick={props.onClick} />;
};

export default Backdrop;
