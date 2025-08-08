'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';
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
    <section className='py-20 bg-background'>
      <div className='container mx-auto px-4'>
        <div className='text-center mx-auto mb-20'>
          <h2 className='text-4xl lg:text-5xl font-bold text-foreground leading-tight'>
            Let&apos;s talk about your next <br />
            project.{' '}
            <span className='text-muted-foreground'>
              We&apos;re here to help.
            </span>
          </h2>
          <p className='text-muted-foreground text-lg leading-relaxed max-w-md mx-auto'>
            Deliver personalized experiences to your customers with AI-powered
            recommendation engines and dynamic content generation.
          </p>
        </div>
        <div className='grid lg:grid-cols-2 gap-6 items-center'>
          {/* Left side - Image and content */}
          <div className='space-y-8'>
            {/* Contact Image */}
            <div className='relative'>
              <div className='w-full max-w-md h-96 bg-muted rounded-2xl overflow-hidden'>
                <Image
                  src='/assets/images/contact.png'
                  alt='Contact'
                  className='w-full h-full object-cover'
                  height={730}
                  width={770}
                />
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
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

              {/* Submit Button */}
              <Button
                type='submit'
                disabled={isSubmitting}
                className='w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg flex items-center justify-center gap-2 transition-all'
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
                <ArrowRight className='w-4 h-4' />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
