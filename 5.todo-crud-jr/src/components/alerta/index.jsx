export const Alerta = ({ children, tipo }) => {
  return (
    <div
      className={`${
        tipo === "error"
          ? "bg-red-100 text-red-800"
          : "bg-green-100 text-green-600"
      } text-center py-2 mt-2`}
    >
      {children}
    </div>
  );
};
