import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  text: z.string().min(1, { message: "Please add a link" }),
});

type TypeSchema = z.infer<typeof FormSchema>;

type Links = {
  link: string;
  shorten: string;
};

type CustomFormProps = {
  addLink: (text: string) => React.Dispatch<React.SetStateAction<Links[]>>;
};

const CustomForm: React.FunctionComponent<CustomFormProps> = ({ addLink }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TypeSchema>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: TypeSchema) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url: "https%3A%2F%2Fgoogle.com%2F" }),
    };
    fetch("https://cleanuri.com/api/v1/shorten", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    addLink(data.text);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="flex flex-col gap-4 p-4 bg-[url(src/assets/images/bg-shorten-mobile.svg)] bg-neutral-4 rounded-lg w-full"
    >
      <div className="relative">
        <input
          {...register("text")}
          type="text"
          className="rounded-md w-full px-2 py-1"
          placeholder="Shorten a link here"
        />
        {errors.text && (
          <p className=" text-red-500 text-sm pt-2">{errors.text.message}</p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-primary-1 rounded-md text-neutral-1 px-6 py-2  hover:opacity-80 focus-visible:opacity-80"
      >
        Shorten It!
      </button>
    </form>
  );
};

export default CustomForm;
