const Backdrop = (props) => {
  return (
    <div
      className="fixed w-full min-h-screen z-40 top-0 left-0 bg-slate-900/50 backdrop-blur-sm"
      onClick={props.onClick}
      aria-hidden="true"
    />
  );
};

export default Backdrop;
