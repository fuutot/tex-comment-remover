export type AlertProps = {
  message: string;
  type: "success" | "error";
};

export default function Alert({ message, type }: AlertProps) {
  const alertStyles =
    type === "success"
      ? "bg-green-100 text-green-800 border-green-300"
      : "bg-red-100 text-red-800 border-red-300";

  return (
    <div className={`border-l-4 p-4 rounded-md ${alertStyles}`} role="alert">
      {message}
    </div>
  );
}
