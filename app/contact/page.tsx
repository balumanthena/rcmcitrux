'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message too short"),
});

type FormData = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  function onSubmit(data: FormData) {
    // Mock submission - simulate delay
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(data);
        setSubmitted(true);
        resolve();
      }, 1500);
    });
  }

  return (
    <main className="min-h-screen bg-background p-8 font-body max-w-lg mx-auto">
      <h1 className="text-4xl font-display text-primary mb-8 text-center">Contact Us</h1>

      {submitted ? (
        <p className="text-green-600 text-center font-semibold">
          Thank you for reaching out. We will get back to you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-semibold text-gray-700 mb-1">
              Name
            </label>
            <Input id="name" {...register('name')} />
            {errors.name && <p className="mt-1 text-red-600 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold text-gray-700 mb-1">
              Email
            </label>
            <Input id="email" type="email" {...register('email')} />
            {errors.email && <p className="mt-1 text-red-600 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent"
              {...register('message')}
            />
            {errors.message && <p className="mt-1 text-red-600 text-sm">{errors.message.message}</p>}
          </div>

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </main>
  );
}
