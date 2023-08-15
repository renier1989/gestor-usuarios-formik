import { ErrorMessage, Field, Form, Formik } from "formik";
import TextInput from "./components/TextInput";
import CheckboxInput from "./components/CheckboxInput";
import SelectInput from "./components/SelectInput";
import RadioInput from "./components/RadioInput";

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
  if(!values.gender){
    errors.gender = 'Este campo es Requerido';
  }
  if(!values.calification){
    errors.calification = 'Este campo es Requerido';
  }

  return errors;
}

const sendForm = (values) => {
  return console.log(values);
}

function App() {
  return (
    <div className="h-screen bg-gray-200 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-md w-[700px]">

        <Formik
          initialValues={{name: "",lastname: "",email: "",select:"",username:"",accept:false,gender:'',calification:''}}
          validate={validate}
          onSubmit={(values) => sendForm(values)}
          // onSubmit={(values) => console.log(values)}
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
                <SelectInput label="Genero" name="gender">
                  <option value="">--Seleccione--</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femdenino</option>
                  <option value="none">No Revelar</option>
                </SelectInput>
              </div>
              <div className="w-full">
              <TextInput name="name" label="Nombre" />
              </div>
              <div>
              <TextInput name="lastname" label="Apellido" />
              </div>
              <div>
              <TextInput name="email" label="Correo" />
              </div>
              
              <div className="w-full ">
                <label className="flex font-semibold text-gray-500 text-lg" >Como le parecio el Curso?
                <span className="flex  text-sm items-center ml-5 text-indigo-700 font-semibold">
                <ErrorMessage name="calification" />
                </span>
                </label>
                <div className="flex justify-between mt-4 text-lg text-gray-600 font-semibold">
                <RadioInput name="calification" value="malo" label="Malo" />
                <RadioInput name="calification" value="mejorable" label="Mejorable" />
                <RadioInput name="calification" value="neutro" label="Neutro" />
                <RadioInput name="calification" value="bueno" label="Bueno" />
                <RadioInput name="calification" value="excelente" label="Excelente" />
                </div>
              </div>

              <div className="w-full mt-3">
                <CheckboxInput name="accept">
                  Aceptar Terminos y condiciones
                </CheckboxInput>
              </div>
              <div className="flex items-center justify-center mt-10">
                <button className="px-4 py-2 bg-green-600 rounded-md font-semibold text-white" type="submit">Enviar</button>
              </div>
            </Form>
        </Formik>
      </div>
    </div>
  );
}

export default App;
