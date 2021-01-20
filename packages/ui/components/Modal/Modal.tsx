const Modal = ({ children }: any) => {
  return (
    <div
      data-testid="modal"
      style={{ background: 'rgba(0,0,0,0.5)' }}
      className="absolute top-0 left-0 w-full h-full p-10 z-50 flex justify-center"
    >
      <section className="bg-white z-100 m-auto w-2/5 rounded shadow-3xl">
        {children}
      </section>
    </div>
  );
};

export default Modal;
