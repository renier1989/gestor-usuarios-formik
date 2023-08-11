/* eslint-disable react/prop-types */
import { useField } from "formik";

function CheckboxInput({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  
  return (
    <div>
      <label>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="flex  text-sm items-center ml-5 text-indigo-700 font-semibold">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
}

export default CheckboxInput;
