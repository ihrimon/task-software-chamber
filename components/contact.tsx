'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  message: string;
  countryCode: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    reset();
    setIsSubmitting(false);
  };

  return (
    <section className='py-24 bg-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-10'>
          <h2 className='text-4xl lg:text-5xl font-semibold leading-tight px-10 lg:px-0'>
            Let&apos;s talk about your next <br className='hidden lg:block' />
            project.{' '}
            <span className='text-muted-foreground'>
              We&apos;re here to help.
            </span>
          </h2>
          <p className='text-gray-500 mx-auto leading-relaxed max-w-md mt-8 text-center lg:text-lg text-sm px-4 lg:px-0'>
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and <br /> dynamic content generation.
          </p>
        </div>
        <div className='grid lg:grid-cols-2 items-center'>
          <div className='rounded-2xl lg:w-140 lg:pl-10 px-8'>
            <Image
              src='/assets/images/contact.png'
              alt='Contact'
              className='object-cover'
              height={500}
              width={630}
            />
          </div>

          <div className='p-8 rounded-2xl '>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              {/* First and Last Name Row */}
              <div className='space-y-6'>
                <Input
                  id='firstName'
                  placeholder='First Name'
                  {...register('firstName', {
                    required: 'First name is required',
                  })}
                  className='bg-muted/50 border-0'
                />
                {errors.firstName && (
                  <p className='text-sm text-destructive'>
                    {errors.firstName.message}
                  </p>
                )}
                <div className='space-y-2'>
                  <Input
                    id='lastName'
                    placeholder='Last Name'
                    {...register('lastName', {
                      required: 'Last name is required',
                    })}
                    className='bg-muted/50 border-0'
                  />
                  {errors.lastName && (
                    <p className='text-sm text-destructive'>
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className='space-y-2'>
                <Input
                  id='email'
                  type='email'
                  placeholder='Email'
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: 'Invalid email address',
                    },
                  })}
                  className='bg-muted/50 border-0'
                />
                {errors.email && (
                  <p className='text-sm text-destructive'>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className='space-y-2'>
                <div className='flex gap-2'>
                  <Select
                    onValueChange={(value) => setValue('countryCode', value)}
                    defaultValue='+1'
                  >
                    <SelectTrigger className='w-20 bg-muted/50 border-0'>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='+1'>+1</SelectItem>
                      <SelectItem value='+44'>+44</SelectItem>
                      <SelectItem value='+33'>+33</SelectItem>
                      <SelectItem value='+49'>+49</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id='phone'
                    placeholder='Phone'
                    {...register('phone', {
                      required: 'Phone number is required',
                    })}
                    className='flex-1 bg-muted/50 border-0'
                  />
                </div>
                {errors.phone && (
                  <p className='text-sm text-destructive'>
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Job Title */}
              <div className='space-y-2'>
                <Input
                  id='jobTitle'
                  placeholder='Job Title'
                  {...register('jobTitle')}
                  className='bg-muted/50 border-0'
                />
              </div>

              {/* Message */}
              <div className='space-y-2'>
                <Textarea
                  id='message'
                  placeholder='Your message'
                  rows={4}
                  {...register('message', { required: 'Message is required' })}
                  className='bg-muted/50 border-0 h-24'
                />
                {errors.message && (
                  <p className='text-sm text-destructive'>
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                className='px-4 py-2 rounded-full font-medium flex items-center justify-between gap-4 text-white w-40'
                style={{
                  background: 'linear-gradient(90deg, #44E0CA, #12B28B)',
                }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                <div className='size-10 bg-white rounded-full grid place-items-center'>
                  <MoveUpRight className='size-6 text-foreground ' />
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
