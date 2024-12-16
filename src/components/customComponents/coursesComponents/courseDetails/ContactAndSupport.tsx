'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { Users, ArrowUpRight, Globe } from 'lucide-react'
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Invalid phone number"),
  course: z.string().min(1, "Please select a course"),
  terms: z.boolean().refine((val) => val === true, "You must accept the terms"),
})

export default function QueryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      terms: false,
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <div className=" mx-auto p-6 bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
    <div className="flex  max-w-5xl mx-auto flex-col lg:flex-row w-full gap-8 bg-gradient-to-br from-red-900 to-red-800 p-8 rounded-lg">
      {/* Stats Section */}
      <div className="flex-1 space-y-8">
        <h2 className="text-3xl font-bold text-white">
          We have successfully served
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-red-800/50 p-6 rounded-lg space-y-2">
            <div className="bg-red-700/50 w-12 h-12 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">11,00,000+</div>
            <div className="text-white/80">Student's Lives Changed</div>
          </div>

          <div className="bg-red-800/50 p-6 rounded-lg space-y-2">
            <div className="bg-red-700/50 w-12 h-12 rounded-lg flex items-center justify-center">
              <ArrowUpRight className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">450+</div>
            <div className="text-white/80">Companies Benefited</div>
          </div>

          <div className="bg-red-800/50 p-6 rounded-lg space-y-2">
            <div className="bg-red-700/50 w-12 h-12 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-white">160+ </div>
            <div className="text-white/80">Open Source Tools & Technology Covered</div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-[400px] bg-white p-8 rounded-lg">
        <h3 className="text-2xl font-semibold mb-6">Let’s get <span className="text-[#ff0000]">connected</span></h3>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Full Name*" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email Id*" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="flex">
                      <div className="flex items-center px-3 border rounded-l-md border-r-0 bg-muted">
                        <img
                          src="/placeholder.svg?height=20&width=28"
                          alt="IN"
                          className="w-7 h-5 object-cover"
                        />
                        <span className="ml-2 text-sm">+91</span>
                      </div>
                      <Input 
                        placeholder="Phone Number*" 
                        className="rounded-l-none" 
                        type="tel"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Course*" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="react">React Development</SelectItem>
                      <SelectItem value="node">Node.js Development</SelectItem>
                      <SelectItem value="fullstack">Full Stack Development</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="terms"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-2 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="text-sm leading-none pt-1">
                    I agree to LinuxWorld's{" "}
                    <a href="#" className="text-red-600 hover:underline">
                      Terms & Conditions
                    </a>
                    .
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full bg-[#ff0000] hover:bg-[#ff0000] hover:shadow-md hover:shadow-black">
              Submit →
            </Button>
          </form>
        </Form>
      </div>
    </div>
    </div>
  )
}
