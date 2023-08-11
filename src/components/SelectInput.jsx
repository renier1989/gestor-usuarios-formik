/* eslint-disable react/prop-types */
import { useField } from 'formik'

function SelectInput({label, ...props}) {
    const [field , meta] = useField(props);
  return (
    <div>
        <label className="flex font-semibold text-gray-500 text-lg">{label} :
        {meta.touched && meta.error ? <div className="flex  text-sm items-center ml-5 text-indigo-700 font-semibold">{meta.error}</div> : null}
        </label>
        <select className="w-full border-[1px] border-gray-400 rounded-md px-2 py-1 outline-none mb-5 mt-2" {...field} {...props} />
    </div>
  )
}

export default SelectInput