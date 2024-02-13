import { affix } from "@/utils/api";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";

type Props = {
  setter: Dispatch<SetStateAction<CustomerType | null>>;
  loader: Dispatch<SetStateAction<boolean>>;
  path: string
};

const OrderForm: React.FC<Props> = ({ setter, loader, path }) => {
  // const { isAuth } = useState(IsAuthContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerType>();

  const onSubmit = async (data: CustomerType) => {
    loader(true);
    const cust = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      phone: data.mobile,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cust),
    };
    const customer: CustomerType = await affix(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/customers`,
      options
    );

    if (customer) {
      setter(customer);
      loader(false);
      router.push(`/basket/checkout/${customer.id}`)
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate={true}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-6">
        <div className="form-control">
          <label
            htmlFor="first_name"
            className="text-gray-900 dark:text-white font-medium"
          >
            First Name
          </label>
          <input
            type="text"
            id="first_name"
            placeholder="First name"
            {...register("first_name", {
              required: {
                value: true,
                message: "First name is required",
              },
              minLength: 2,
              maxLength: 80,
            })}
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
          />
          <p className="text-red-500">{errors.first_name?.message}</p>
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="text-gray-900 dark:text-white font-medium"
          >
            Last Name
          </label>
          <input
            type="text"
            id="last_name"
            placeholder="Last name"
            {...register("last_name", {
              required: false,
              minLength: 2,
              maxLength: 80,
            })}
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mb-6">
        <div>
          <label
            htmlFor="email"
            className="text-gray-900 dark:text-white font-medium"
          >
            Email:
          </label>
          <input
            type="text"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },
              minLength: 2,
              maxLength: 80,
            })}
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
          />
          <p className="text-red-500">{errors.email?.message}</p>
        </div>
        <div>
          <label
            htmlFor="mobile"
            className="text-gray-900 dark:text-white font-medium"
          >
            Phone No:
          </label>
          <input
            type="text"
            id="mobile"
            placeholder="Phone"
            {...register("mobile", {
              required: {
                value: true,
                message: "Phone no. is required",
              },
              pattern: {
                value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                message: "Invalid phone format",
              },
              minLength: 2,
              maxLength: 80,
            })}
            className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
          />
          <p className="text-red-500">{errors.mobile?.message}</p>
        </div>
      </div>

      <label
        htmlFor="pickuptime"
        className="text-gray-700 dark:text-white font-medium"
      >
        Pickup time:
      </label>
      <input
        readOnly={true}
        type="text"
        placeholder="~15 minutes"
        className="block text-gray-700 border dark:bg-gray-700 dark:text-white mb-1 p-2 dark:border-none rounded-lg"
        id="pickuptime"
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="p-3 text-white font-medium bg-custo-51 mt-6 rounded-lg"
        >
          Confirm Order
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
