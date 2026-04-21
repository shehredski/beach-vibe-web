import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { emailjs } from '@emailjs/browser';

const inquirySchema = z.object({
  name: z.string().min(2, "Моля, въведете име"),
  email: z.string().email("Невалиден имейл адрес"),
  phone: z.string().min(7, "Моля, въведете телефон за връзка"),
  message: z.string().min(10, "Моля, напишете вашето запитване"),
});

type InquiryValues = z.infer<typeof inquirySchema>;

export default function BookingInquiry() {
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    emailjs.init("RDskpTUuP9O976NEM");
  }, []);

  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  async function onSubmit(data: InquiryValues) {
    setIsSending(true);
    try {
      await emailjs.send(
        'service_6ab4jtk', 
        'template_0haaozp', 
        {
          from_name: data.name,
          reply_to: data.email,
          phone: data.phone,
          message: data.message,
        }
      );
      alert("Благодарим Ви! Запитването е изпратено успешно.");
      form.reset();
    } catch (error) {
      alert("Грешка при изпращането.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="booking" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-2xl text-center">
        <h2 className="text-4xl font-bold mb-8 uppercase">Направи запитване</h2>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-white p-8 rounded-xl shadow-xl border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-left">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem><FormLabel>Име</FormLabel><FormControl><Input {...field} disabled={isSending} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem><FormLabel>Имейл</FormLabel><FormControl><Input {...field} disabled={isSending} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem><FormLabel>Телефон</FormLabel><FormControl><Input {...field} disabled={isSending} /></FormControl><FormMessage /></FormItem>
              )} />
              <FormField control={form.control} name="message" render={({ field }) => (
                <FormItem><FormLabel>Съобщение</FormLabel><FormControl><Textarea {...field} disabled={isSending} /></FormControl><FormMessage /></FormItem>
              )} />
              <Button type="submit" className="w-full bg-amber-600 h-12 text-white" disabled={isSending}>
                {isSending ? <Loader2 className="animate-spin" /> : "Изпрати"}
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
