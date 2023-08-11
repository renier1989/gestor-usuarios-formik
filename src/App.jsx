import { useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    onSubmit: (values) => console.log(values),
  });
  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-md w-[700px]">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full">
            <label className="font-semibold text-gray-500 text-lg"> Nombre : </label>
            <input
              className="w-full border-[1px] border-gray-400 rounded-md px-2 py-1 outline-none mb-5 mt-2"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
              autoComplete="off"
            />
          </div>
          <div>
            <label className="font-semibold text-gray-500 text-lg"> Apellido : </label>
            <input
            className="w-full border-[1px] border-gray-400 rounded-md px-2 py-1 outline-none mb-5 mt-2"
              name="lastname"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              autoComplete="off"
            />
          </div>
          <div>
            <label className="font-semibold text-gray-500 text-lg"> Correo : </label>
            <input
            className="w-full border-[1px] border-gray-400 rounded-md px-2 py-1 outline-none mb-5 mt-2"
              name="email"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email}
              autoComplete="off"
            />
          </div>
          <div className="flex items-center justify-center">
            <button className="px-4 py-2 bg-green-600 rounded-md font-semibold text-white" type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
