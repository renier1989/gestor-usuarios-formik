/* eslint-disable react/prop-types */
import { useField } from "formik"

function RadioInput({label, ...props}) {
    const [field] = useField({...props, type: "radio"})
  return (
    <div>
        <label >
            <input className="mr-3" type="radio" {...field} {...props} />
            {label}
        </label>
    </div>
  )
}

export default RadioInput