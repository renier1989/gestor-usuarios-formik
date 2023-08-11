import { ErrorMessage, Field, Form, Formik } from "formik";
import TextInput from "./components/TextInput";
import CheckboxInput from "./components/CheckboxInput";

const validate = (values) => {
  const errors = {}
  if(!values.name){
    errors.name = 'Este campo es Requerido';
  }else if(values.name.length < 5){
    errors.name = 'El nombre es muy Corto';
  }
  if(!values.username){
    errors.username = 'Este campo es Requerido';
  }else if(values.username.length < 5){
    errors.username = 'El username es muy Corto';
  }
  if(!values.lastname){
    errors.lastname = 'Este campo es Requerido';
  }else if(values.lastname.length < 5){
    errors.lastname = 'El apellido es muy Corto';
  }
  if(!values.email){
    errors.email = 'Este campo es Requerido';
  }
  if(!values.select){
    errors.select = 'Este campo es Requerido';
  }

  return errors;
}

function App() {
  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-md w-[700px]">

        <Formik
          initialValues={{name: "",lastname: "",email: "",select:"",username:"",accept:false}}
          validate={validate}
          onSubmit={(values) => console.log(values)}
        >
            <Form >
              <div className="w-full">
                <TextInput name="username" label="Nombre de Usuario" />
              </div>
              <div className="w-full">
                <label className="flex font-semibold text-gray-500 text-lg"> Estado : 
                <span className="flex  text-sm items-center ml-5 text-indigo-700 font-semibold">
                <ErrorMessage name="select" />
                </span>
                </label>
                <Field
                  className="w-full border-[1px] border-gray-400 rounded-md px-2 py-1 outline-none mb-5 mt-2"
                  as="select"
                  name='select'
                >
                  <option value="">--Seleccione--</option>
                  <option value="feliz">Feliz</option>
                  <option value="triste">Triste</option>
                </Field>

              </div>
              <div className="w-full">
                <label className="flex font-semibold text-gray-500 text-lg"> Nombre : 
                <span className="flex  text-sm items-center ml-5 text-indigo-700 font-semibold">
                <ErrorMessage name="name" />
                </span>
                </label>
                <Field
                  className="w-full border-[1px] border-gray-400 rounded-md px-2 py-1 outline-none mb-5 mt-2"
                  type="text"
                  autoComplete="off"
                  name='name'
                />
              </div>
              <div>
                <label className="flex font-semibold text-gray-500 text-lg"> Apellido : 
                <span className="flex  text-sm items-center ml-5 text-indigo-700 font-semibold">
                <ErrorMessage name="lastname" />
                </span>
                </label>
                <Field
                className="w-full border-[1px] border-gray-400 rounded-md px-2 py-1 outline-none mb-5 mt-2"
                type="text"
                autoComplete="off"
                name='lastname'
                />
              </div>
              <div>
                <label className="flex font-semibold text-gray-500 text-lg"> Correo : 
                <span className="flex  text-sm items-center ml-5 text-indigo-700 font-semibold">
                <ErrorMessage name="email" />
                </span>
                </label>
                <Field
                className="w-full border-[1px] border-gray-400 rounded-md px-2 py-1 outline-none mb-5 mt-2"
                type="text"
                autoComplete="off"
                name='email'
                />
              </div>
              <div>
                <CheckboxInput name="accept">
                  Aceptar Terminos y condiciones
                </CheckboxInput>
              </div>
              <div className="flex items-center justify-center">
                <button className="px-4 py-2 bg-green-600 rounded-md font-semibold text-white" type="submit">Enviar</button>
              </div>
            </Form>
        </Formik>
      </div>
    </div>
  );
}

export default App;
