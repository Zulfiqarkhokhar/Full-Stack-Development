import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import {z} from 'zod'

const MyFormSchema = z.object({
    name: z.string().min(5,"Should be 5 charachter long").max(20,"Should be less than 20 Characters"),
    age: z.coerce.number().min(10,"Should be 10 year old").max(50,"Should be less than 50 Years old"),
    password: z.string().min(5,"Should be 5 charachter long").max(20,"Should be less than 20 Characters"),
})

const ZodForm = () => {

    const {register,handleSubmit,formState:{errors}} = useForm({
        resolver: zodResolver(MyFormSchema)
    });

    function formSubmit(data){
        console.log(data);
    }

    console.log("Render")


  return (
    <div>
        <h1>React Hook Form</h1>

        <form onSubmit={handleSubmit(formSubmit)}>
            <div>
                <label htmlFor="first">Name :</label>
                <input type="text" {...register("name")}/>
                {
                    errors.name && <span>{errors.name.message}</span>
                }
            </div>
            <div>
                <label htmlFor="second">Age :</label>
                <input type="number" {...register("age")}/>
                {
                    errors.age && <span>{errors.age.message}</span>
                }
            </div>
            <div>
                <label htmlFor="third">Password :</label>
                <input type="password" {...register("password")}/>
                {
                    errors.password && <span>{errors.password.message}</span>
                }
            </div>
            <button>Submit</button>
        </form>

    </div>
  )
}

export default ZodForm;