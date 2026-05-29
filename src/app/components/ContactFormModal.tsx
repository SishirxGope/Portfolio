import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { toast } from "sonner";
import { Send, Loader2, Sparkles, Shield } from "lucide-react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Set your Formspree Form ID here to receive submissions directly.
// Example: const FORMSPREE_FORM_ID = "xoqgywze";
const FORMSPREE_FORM_ID = "mbdbwyne";

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setStatus("submitting");

    if (FORMSPREE_FORM_ID) {
      try {
        const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({
            name,
            email,
            subject,
            message
          })
        });

        if (response.ok) {
          setStatus("success");
          toast.success("Transmission successful! Message sent.");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setTimeout(() => {
            onClose();
            setStatus("idle");
          }, 2000);
        } else {
          throw new Error("Formspree response not OK");
        }
      } catch (err) {
        console.error("Formspree submit failed, falling back to mailto: ", err);
        triggerMailtoFallback();
      }
    } else {
      // Fallback mode: trigger mailto link and copy details
      triggerMailtoFallback();
    }
  };

  const triggerMailtoFallback = () => {
    const emailBody = `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "None"}\n\nMessage:\n${message}`;
    
    // Copy message details to clipboard as fallback
    navigator.clipboard.writeText(emailBody);
    
    // Build mailto link
    const mailtoSubject = encodeURIComponent(subject || "Secure Transmission from Portfolio");
    const mailtoBody = encodeURIComponent(emailBody);
    
    // Open mailto link
    window.location.href = `mailto:sishirgope2004@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    setStatus("success");
    toast.success("Mail client opened & details secured to clipboard!");
    
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    
    setTimeout(() => {
      onClose();
      setStatus("idle");
    }, 2500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="max-w-xl bg-[#09090b]/95 border border-wintry/30 text-white rounded-none p-6 md:p-8 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden font-sans">
        {/* Cyber aesthetics corner decorations */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-wintry" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-wintry" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-wintry" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-wintry" />

        {/* Scanline / Grid effect overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] opacity-15" />

        <DialogHeader className="relative z-10 mb-6">
          <div className="flex items-center gap-2 text-wintry text-xs font-cyber tracking-[0.3em] uppercase mb-1">
            <Shield className="w-4 h-4 animate-pulse" />
            SECURE LINK ESTABLISHED
          </div>
          <DialogTitle className="font-cyber text-2xl md:text-3xl font-black text-white tracking-wider uppercase">
            INITIALIZE<br className="sm:hidden" /> TRANSMISSION
          </DialogTitle>
          <DialogDescription className="text-slate-400 text-sm mt-1 font-sans">
            Please input transmission coordinates to dispatch your request directly to Sishir Gope.
          </DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="relative z-10 py-12 text-center flex flex-col items-center justify-center space-y-6">
            <div className="w-16 h-16 rounded-full border border-wintry/50 flex items-center justify-center text-wintry bg-wintry/10 shadow-[0_0_20px_rgba(6,182,212,0.3)] animate-bounce">
              <Sparkles className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-cyber text-xl font-bold tracking-widest text-wintry uppercase">TRANSMISSION SENT</h3>
              <p className="text-sm text-slate-400 max-w-sm mx-auto">
                {FORMSPREE_FORM_ID 
                  ? "Your message has been successfully broadcast to Sishir's terminal."
                  : "Email client launched & message logs have been secured to your clipboard."}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative z-10 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest text-wintry/70 font-cyber font-bold">NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="Subject Identifier"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black/40 border border-wintry/30 px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-wintry transition-all duration-300 font-sans text-sm rounded-none focus:ring-1 focus:ring-wintry"
                  disabled={status === "submitting"}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs uppercase tracking-widest text-wintry/70 font-cyber font-bold">EMAIL *</label>
                <input
                  type="email"
                  required
                  placeholder="comm_link@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black/40 border border-wintry/30 px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-wintry transition-all duration-300 font-sans text-sm rounded-none focus:ring-1 focus:ring-wintry"
                  disabled={status === "submitting"}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest text-wintry/70 font-cyber font-bold">SUBJECT</label>
              <input
                type="text"
                placeholder="Transmission Topic"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-black/40 border border-wintry/30 px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-wintry transition-all duration-300 font-sans text-sm rounded-none focus:ring-1 focus:ring-wintry"
                disabled={status === "submitting"}
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs uppercase tracking-widest text-wintry/70 font-cyber font-bold">TRANSMISSION PAYLOAD *</label>
              <textarea
                required
                rows={4}
                placeholder="Type your message summary here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-black/40 border border-wintry/30 px-4 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-wintry transition-all duration-300 font-sans text-sm rounded-none resize-none h-28 focus:ring-1 focus:ring-wintry"
                disabled={status === "submitting"}
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full relative px-6 py-3.5 bg-wintry/10 border border-wintry/50 hover:bg-wintry hover:border-wintry transition-all duration-500 font-cyber tracking-[0.2em] font-bold text-sm text-wintry hover:text-white flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
              >
                {/* Button Corners */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-wintry group-hover:border-white transition-colors" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-wintry group-hover:border-white transition-colors" />
                
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span className="text-white">TRANSMITTING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>LAUNCH SIGNAL</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
