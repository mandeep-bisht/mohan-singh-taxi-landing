import { useState } from "react";
import { Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { z } from "zod";

const schema = z.object({
  company: z.string().trim().min(1, "Company name is required").max(100),
  contact: z.string().trim().min(1, "Contact person is required").max(100),
  phone: z.string().trim().min(10, "Valid phone number required").max(15),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Please describe your requirement").max(1000),
});

const B2BSection = () => {
  const [form, setForm] = useState({ company: "", contact: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => { fieldErrors[err.path[0] as string] = err.message; });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    const msg = `Corporate Enquiry\nCompany: ${form.company}\nContact: ${form.contact}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`;
    window.open(`https://wa.me/919639129933?text=${encodeURIComponent(msg)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  return (
    <section className="py-16 md:py-24 bg-taxi-gradient">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="w-14 h-14 rounded-full bg-yellow-gradient flex items-center justify-center mb-6">
              <Building2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-taxi-dark-foreground">
              Corporate & <span className="text-gradient-yellow">B2B Deals</span>
            </h2>
            <p className="mt-4 text-taxi-dark-foreground/70 max-w-md">
              Special rates and dedicated fleet for businesses. Get in touch with your requirements and we'll craft a custom plan for your team.
            </p>
            <ul className="mt-6 space-y-3 text-taxi-dark-foreground/80 text-sm">
              <li>✓ Dedicated account manager</li>
              <li>✓ Monthly billing options</li>
              <li>✓ Priority booking</li>
              <li>✓ Custom fleet allocation</li>
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-2xl space-y-4"
          >
            <div>
              <Input placeholder="Company Name" value={form.company} onChange={e => update("company", e.target.value)} />
              {errors.company && <p className="text-destructive text-xs mt-1">{errors.company}</p>}
            </div>
            <div>
              <Input placeholder="Contact Person" value={form.contact} onChange={e => update("contact", e.target.value)} />
              {errors.contact && <p className="text-destructive text-xs mt-1">{errors.contact}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Input placeholder="Phone Number" value={form.phone} onChange={e => update("phone", e.target.value)} />
                {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Input placeholder="Email" value={form.email} onChange={e => update("email", e.target.value)} />
                {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <Textarea placeholder="Describe your requirement..." rows={4} value={form.message} onChange={e => update("message", e.target.value)} />
              {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
            </div>
            <Button type="submit" className="w-full bg-yellow-gradient text-primary-foreground font-bold h-12 shadow-lg shadow-primary/25">
              Submit Enquiry
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
