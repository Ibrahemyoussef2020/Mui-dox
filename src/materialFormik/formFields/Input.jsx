import {useEffect,useRef} from 'react'
import { Field,Form,Forrmik } from "formik"

const Input = ({control,value,as,type,className,name,rest}) => {
    
const InputRef = useRef(null)
  
    return (
    <div>
        <Field  name={name} 
        value={value}
        as={as}
        ref={InputRef}
        type={type}
        className={className}
        {...rest}
    />
    </div>
  )
}

export default Input