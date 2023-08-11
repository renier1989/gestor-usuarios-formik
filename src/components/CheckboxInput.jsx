/* eslint-disable react/prop-types */
import { useField } from "formik";

function CheckboxInput({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div>
      <label>
        <input className="mr-2" type="checkbox" {...field} {...props} />
        <span className="font-semibold">{children}</span>
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
