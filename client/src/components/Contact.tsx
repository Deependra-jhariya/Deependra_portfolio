import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { insertContactMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

// Extend the schema with additional validations
const formSchema = insertContactMessageSchema.extend({
  email: z.string().email("Please enter a valid email address"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", data);

      toast({
        title: "Message Sent",
        description: "Thank you for your message! I'll get back to you soon.",
        variant: "default",
      });

      form.reset();
    } catch (error) {
      console.error("Error sending message:", error);

      toast({
        title: "Error",
        description:
          "There was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-neutral dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-6 md:p-8 lg:p-10">
                <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>

                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...form.register("name")}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent dark:bg-gray-700"
                    />
                    {form.formState.errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...form.register("email")}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent dark:bg-gray-700"
                    />
                    {form.formState.errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {form.formState.errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...form.register("subject")}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent dark:bg-gray-700"
                    />
                    {form.formState.errors.subject && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {form.formState.errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      {...form.register("message")}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-primary dark:focus:border-accent dark:bg-gray-700"
                    ></textarea>
                    {form.formState.errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 transition-colors dark:bg-accent dark:text-secondary dark:hover:bg-teal-400 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>

              <div className="md:w-1/2 p-6 md:p-8 lg:p-10 bg-primary dark:bg-accent text-white dark:text-secondary flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <i className="fas fa-envelope"></i>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Email</p>
                        <a
                          href="mailto:deependra@example.com"
                          className="hover:underline"
                        >
                          deependrajhariya@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <i className="fas fa-phone-alt"></i>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Phone</p>
                        <a href="tel:+1234567890" className="hover:underline">
                          +91 8719989752
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <i className="fas fa-map-marker-alt"></i>
                      </div>
                      <div className="ml-4">
                        <p className="font-medium">Location</p>
                        <p className="opacity-90">Jabalpur Madhaya Pradesh, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">Connect With Me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/Deependra-jhariya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/deependrajhariya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    {/* <a
                      href="https://twitter.com/deependrajhariya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-10 w-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
