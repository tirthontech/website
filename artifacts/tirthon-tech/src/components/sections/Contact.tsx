import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Mail, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useSendContactMessage, contactFormSchema, type ContactFormValues } from "@/hooks/use-contact";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { toast } = useToast();
  const mutation = useSendContactMessage();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  function onSubmit(data: ContactFormValues) {
    mutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        toast({
          title: "Message Sent",
          description: "We've received your inquiry and will be in touch shortly.",
          className: "bg-card border-primary/20 text-foreground",
          action: <CheckCircle2 className="w-6 h-6 text-primary" />,
        });
      },
      onError: () => {
        toast({
          variant: "destructive",
          title: "Error",
          description: "There was a problem sending your message. Please try again.",
        });
      }
    });
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-card/50 border border-border/50 rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left side: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
                Ready to <span className="text-primary">scale?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
                Whether you need a custom enterprise platform, automated internal tools, or a technical consultation—our team is ready to deliver.
              </p>

              <div className="mt-auto space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Email Us Directly</p>
                    <a href="mailto:tirthontech@gmail.com" className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
                      tirthontech@gmail.com
                    </a>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-muted-foreground">We respond within 24 hours.</span>
                </div>
              </div>
            </motion.div>

            {/* Right side: Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-muted-foreground">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Doe" 
                              className="bg-background/50 border-border/60 focus-visible:ring-primary/50 h-12 rounded-xl"
                              {...field} 
                            />
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
                          <FormLabel className="text-muted-foreground">Email Address</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="john@company.com" 
                              className="bg-background/50 border-border/60 focus-visible:ring-primary/50 h-12 rounded-xl"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Company <span className="text-muted-foreground/50 font-normal">(Optional)</span></FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Acme Corp" 
                            className="bg-background/50 border-border/60 focus-visible:ring-primary/50 h-12 rounded-xl"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about what you're trying to build..." 
                            className="bg-background/50 border-border/60 focus-visible:ring-primary/50 min-h-[150px] resize-none rounded-xl"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 rounded-xl text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
