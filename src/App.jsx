import { useFormik } from "formik";

const validate = (values) => {
  const errors = {}
  if(!values.name){
    errors.name = 'Este campo es Requerido';
  }else if(values.name.length < 5){
    errors.name = 'El nombre es muy Corto';
  }
  if(!values.lastname){
    errors.lastname = 'Este campo es Requerido';
  }else if(values.lastname.length < 5){
    errors.lastname = 'El apellido es muy Corto';
  }
  if(!values.email){
    errors.email = 'Este campo es Requerido';
  }

  return errors;
}

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate,
    onSubmit: (values) => console.log(values),
  });
  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-md w-[700px]">
        <form onSubmit={formik.handleSubmit}>
          <div className="w-full">
            <label className="flex font-semibold text-gray-500 text-lg"> Nombre : 
            {formik.errors.name ? <div className="flex  text-sm items-center ml-5 text-indigo-700 font-semibold">{formik.errors.name}</div> : null}
            </label>
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
            <label className="flex font-semibold text-gray-500 text-lg"> Apellido : 
            {formik.errors.lastname ? <div className="flex  text-sm items-center ml-5 text-indigo-700 font-semibold">{formik.errors.lastname}</div> : null}
            </label>
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
            <label className="flex font-semibold text-gray-500 text-lg"> Correo : 
            {formik.errors.lastname ? <div className="flex  text-sm items-center ml-5 text-indigo-700 font-semibold">{formik.errors.lastname}</div> : null}
            </label>
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
