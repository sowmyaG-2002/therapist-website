"use client";

import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Form submitted!");
    reset();
  };

  return (
    <section id="contact" className="py-16 bg-secondary">
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact Dr. Blake</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white p-6 rounded-lg shadow">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              {...register("phone", { required: true })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">Phone is required</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">What brings you here?</label>
            <textarea
              {...register("message", { required: true })}
              className="w-full border rounded px-3 py-2"
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">This field is required</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Preferred time to reach you</label>
            <input
              type="text"
              {...register("time", { required: true })}
              className="w-full border rounded px-3 py-2"
            />
            {errors.time && <p className="text-red-500 text-sm mt-1">This field is required</p>}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              {...register("consent", { required: true })}
              className="mr-2"
            />
            <label className="text-sm">I agree to be contacted</label>
          </div>
          {errors.consent && <p className="text-red-500 text-sm mt-1">Consent is required</p>}

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-teal-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
