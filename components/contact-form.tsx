"use client";

import { useActionState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { submitContactForm } from "@/app/actions/contact";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, null);

  return (
    <form action={formAction} className="mx-auto max-w-md space-y-6">
      {state?.error && (
        <p className="text-sm text-foreground" role="alert">
          {state.error}
        </p>
      )}
      {state?.success && (
        <p className="text-sm text-muted-foreground" role="status">
          Thank you. We will be in touch soon.
        </p>
      )}
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          autoComplete="name"
          disabled={state?.success}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          autoComplete="email"
          disabled={state?.success}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell us about your project..."
          required
          rows={5}
          minLength={10}
          disabled={state?.success}
        />
      </div>
      <Button type="submit" size="lg" disabled={state?.success}>
        Send Message
      </Button>
    </form>
  );
}
