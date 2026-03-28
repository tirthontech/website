import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

// Schema for contact form validation
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

// Mock API hook for sending a contact message since this is a frontend-only project
export function useSendContactMessage() {
  return useMutation({
    mutationFn: async (data: ContactFormValues) => {
      // Validate data before sending (double-check beyond form validation)
      contactFormSchema.parse(data);
      
      // Simulate network latency (1.5 seconds)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Mock successful submission
      return { success: true, message: "Message sent successfully" };
    },
  });
}
