import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// Валидация за запитването
const inquirySchema = z.object({
  name: z.string().min(2, "Моля, въведете име"),
  email: z.string().email("Невалиден имейл адрес"),
  phone: z.string().min(7, "Моля, въведете телефон за връзка"),
  message: z.string().min(10, "Моля, напишете вашето запитване (минимум 10 символа)"),
});

type InquiryValues = z.infer<typeof inquirySchema>;

export default function BookingInquiry() {
  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });

  function onSubmit(data: InquiryValues) {
    console.log("Inquiry sent:", data);
    
    // Използваме стандартен alert, за да нямаме нужда от външни файлове (hooks)
    alert("Благодарим Ви, " + data.name + "! Запитването Ви е изпратено успешно. Ще се свържем с Вас скоро.");
    
    form.reset();
  }

  return (
    <section id="booking" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4 uppercase tracking-tighter">Направи запитване</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-stone-600 italic">
            Имате въпроси или искате да проверите наличности? Пишете ни!
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-xl shadow-2xl border border-stone-100"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Име</FormLabel>
                      <FormControl><Input placeholder="Вашето име" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон</FormLabel>
                      <FormControl><Input placeholder="08XXXXXXXX" {...field} /></FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Имейл</FormLabel>
                    <FormControl><Input placeholder="email@example.com" {...field} /></FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Вашето съобщение</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Напишете период на престой, брой хора или други въпроси..." 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white h-12 text-lg uppercase tracking-widest transition-all">
                <Send className="mr-2 h-5 w-5" /> Изпрати запитването
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
